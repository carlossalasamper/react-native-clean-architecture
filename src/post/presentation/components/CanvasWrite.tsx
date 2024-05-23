import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Canvas,
  Path,
  SkPath,
  Skia,
  Circle,
  TouchInfo,
  useTouchHandler,
  Text as TextSkia,
  matchFont,
  useFonts,
} from '@shopify/react-native-skia';

type Props = {
  text?: {
    content: string;
    color?: string;
    opacity?: number;
    font?: {
      name: string;
      require: number;
    };
  };
  matchDistance?: number;
  matchPoints?: {x: number; y: number; passed?: boolean}[];
};

export type CanvasWriteRef = {
  reset(): void;
  getResult(): {
    strokesNumber: number;
    maxDistance: number;
    paths: SkPath[];
    matchPointNumber: number;
  };
};

const CanvasWrite = forwardRef<CanvasWriteRef, Props>((props: Props, ref) => {
  const fontMgr = useFonts({
    SVN_Cherish: [
      props.text?.font?.require ??
        require('assets/fonts/SVN-Cherish Moment.ttf'),
    ],
  });
  const font = fontMgr
    ? matchFont(
        {
          fontFamily: props?.text?.font?.name ?? 'SVN_Cherish',
          fontSize: 140,
        },
        fontMgr,
      )
    : null;
  const [size, setSize] = useState({height: 0, width: 0});

  const positionText = useMemo(() => {
    if (!props.text?.content) {
      return;
    }
    const sizeText = font?.measureText(props.text?.content);
    return (
      sizeText && {
        originX: size.width / 2 - sizeText?.width / 2,
        originY: size.height / 2 - sizeText?.height / 2,
        x: size.width / 2 - sizeText?.width / 2 - sizeText.x,
        y: size.height / 2 - sizeText?.height / 2 - sizeText?.y,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontMgr, size, props.text?.content]);
  const [paths, setPaths] = useState<SkPath[]>([]);

  const points = useRef<{x: number; y: number; passed?: boolean}[]>([]);

  const matchPointNumber = useRef(0);

  const maxDistance = useRef(0);

  const [matchDistance] = useState(props.matchDistance ?? 10);
  const [strokesNumber, setStrokesNumber] = useState(0);

  const findPointNear = useCallback(
    (touchInfo: TouchInfo) => {
      const {x, y} = touchInfo;
      const diemGanNhat = points.current.reduce<{
        kc2: number;
        x: number;
        y: number;
        index: number;
      }>(
        (min, value, index) => {
          const khoangCach2 =
            (value.x - x) * (value.x - x) + (value.y - y) * (value.y - y);
          if (khoangCach2 < min.kc2) {
            return {
              ...min,
              ...value,
              kc2: khoangCach2,
              index: index,
            };
          } else {
            return min;
          }
        },
        {x: 0, y: 0, kc2: 999999999, index: -1},
      );

      const kc = Math.sqrt(diemGanNhat.kc2);

      if (kc <= matchDistance && !points.current[diemGanNhat.index].passed) {
        points.current[diemGanNhat.index] = {
          ...points.current[diemGanNhat.index],
          passed: true,
        };
        matchPointNumber.current += 1;
      }
      if (kc > maxDistance.current) {
        maxDistance.current = kc;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onDrawingStart = useCallback((touchInfo: TouchInfo) => {
    // points.current = [...points.current, {x: touchInfo.x, y: touchInfo.y}];
    setPaths(old => {
      const {x, y} = touchInfo;
      const newPath = Skia.Path.Make();
      newPath.moveTo(x, y);
      newPath.lineTo(x + 1, y + 1);
      return [...old, newPath];
    });
    setStrokesNumber(pre => pre + 1);
  }, []);

  const onDrawingActive = useCallback(
    (touchInfo: TouchInfo) => {
      findPointNear(touchInfo);

      setPaths(currentPaths => {
        const {x, y} = touchInfo;
        const currentPath = currentPaths[currentPaths.length - 1];
        const lastPoint = currentPath.getLastPt();
        const xMid = (lastPoint.x + x) / 2;
        const yMid = (lastPoint.y + y) / 2;

        currentPath.quadTo(lastPoint.x, lastPoint.y, xMid, yMid);
        return [...currentPaths.slice(0, currentPaths.length - 1), currentPath];
      });
    },
    [findPointNear],
  );

  const touchHandler = useTouchHandler(
    {
      onActive: onDrawingActive,
      onStart: onDrawingStart,
    },
    [onDrawingActive, onDrawingStart],
  );

  const reset = () => {
    // console.log(
    //   points.current.map(pre => [
    //     pre.x - (positionText?.originX ?? 0),
    //     pre.y - (positionText?.originY ?? 0),
    //   ]),
    //   'points',
    // );
    setPaths([]);
    setStrokesNumber(0);
    matchPointNumber.current = 0;
    points.current = points.current.map(e => ({...e, passed: false}));
    maxDistance.current = 0;
  };

  useImperativeHandle(ref, () => ({
    reset,
    getResult: () => ({
      maxDistance: maxDistance.current,
      paths: paths,
      matchPointNumber: matchPointNumber.current,
      strokesNumber: strokesNumber,
    }),
  }));

  useEffect(() => {
    if (props.matchPoints) {
      points.current = props.matchPoints.map(e => ({
        ...e,
        x: e.x + (positionText?.originX ?? 0),
        y: e.y + (positionText?.originY ?? 0),
      }));
    }
  }, [positionText?.originX, positionText?.originY, props.matchPoints]);

  return (
    <View
      style={styles.container}
      onLayout={e => {
        setSize({
          height: e.nativeEvent.layout.height,
          width: e.nativeEvent.layout.width,
        });
      }}>
      <Canvas style={styles.container} onTouch={touchHandler}>
        {props?.text?.content && (
          <TextSkia
            text={props?.text?.content}
            font={font}
            x={positionText?.x ?? 0}
            y={positionText?.y ?? 200}
            color={props.text.color ?? 'green'}
            opacity={props?.text?.opacity ?? 1}
          />
        )}
        {false && //test
          points.current.map((point, index) => (
            <Circle
              cx={point.x}
              cy={point.y}
              r={3}
              key={index}
              color={point.passed ? '#FF00FF' : 'black'}
            />
          ))}
        {paths.map((path, index) => (
          <Path
            key={'path' + index}
            path={path}
            color={'black'}
            style={'stroke'}
            strokeWidth={2}
          />
        ))}
      </Canvas>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  chiSo: {
    padding: 8,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  space: {
    height: 20,
  },
});

export default CanvasWrite;
