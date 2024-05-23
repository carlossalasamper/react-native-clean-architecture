import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useRef} from 'react';
import {useFonts} from 'expo-font';
import CanvasWrite, {CanvasWriteRef} from '../components/CanvasWrite';
import PrimaryButton from '../components/PrimaryButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const matchPointsA = [
  [8.456913341175436, 130.62562561035156],
  [10.493090542879969, 111.93546225807884],
  [14.81996154785156, 93.64533441716975],
  [18.38327165083453, 73.50071438876066],
  [21.03756852583453, 57.46502546830611],
  [27.618767478249282, 42.70197504216975],
  [37.83600824529475, 38.30216147682883],
  [46.48975025523794, 48.592644431374296],
  [48.45321793989703, 65.17378789728338],
  [49.798543756658376, 80.2277207808061],
  [55.28893349387428, 92.48176019841975],
  [53.90725291859019, 104.33580849387428],
  [53.72545693137428, 123.46227333762428],
  [54.016339388760656, 130.22563448819247],
  [53.034605546431095, 112.62633583762428],
  [41.872007890181095, 106.80842035466975],
  [34.19997752796519, 109.75373285466975],
  [24.964470603249282, 107.97199457341975],
  [41.14480174671519, 18.01212241432883],
  [46.96242869984019, 5.9399011785333755],
  [42.19924510609019, 12.19416254216975],
].map(v => ({x: v[0], y: v[1]}));

const LessonScreen = () => {
  const [_] = useFonts({
    SVN_Cherish: require('assets/fonts/SVN_Cherish.otf'),
  });

  const canvasWriteRef = useRef<CanvasWriteRef>(null);
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screen, {paddingTop: insets.top}]}>
      <View style={[styles.ph24]}>
        <View style={[styles.rowBetween]}>
          <View>
            <Text style={[styles.fonts_SVN_Cherish, styles.textTitle]}>
              VIETNAMESE
            </Text>
            <Text style={[styles.fonts_SVN_Cherish, styles.textModule]}>
              Module 1
            </Text>
          </View>
          <View style={styles.alightEnd}>
            <View style={[styles.boxPrice]}>
              <Text style={[styles.fonts_SVN_Cherish, styles.textPrice]}>
                FREE
              </Text>
            </View>
            <Text style={[styles.fonts_SVN_Cherish, styles.textPrice]}>
              150
            </Text>
          </View>
        </View>
        <View style={[styles.boxQuestion, styles.pb32]}>
          <Text style={[styles.fonts_SVN_Cherish, styles.textLarge]}>Á</Text>
          <Text style={[styles.fonts_SVN_Cherish, styles.textQuestion]}>
            CON CÁ
          </Text>
        </View>
        <View style={[styles.tabs]}>
          {Array.from({length: 10}, (_, i) => {
            const bg = i < 3 ? 'white' : i === 3 ? '#F2B559' : '#258F78';
            return <Dotline key={i} bg={bg} />;
          })}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.backgroundAnswer}>
          <View style={styles.backgroundLeft} />
          <View style={styles.backgroundRight} />
        </View>
        <View style={[styles.boxAnswer]}>
          <Text style={[styles.textW500s16Black, styles.pb32]}>
            Write the "Á"
          </Text>
          <CanvasWrite
            ref={canvasWriteRef}
            text={{content: 'Á', color: '#66C270'}}
            matchPoints={matchPointsA}
          />
          <PrimaryButton
            text="Submit"
            style={[styles.mt32]}
            onPress={() => {
              const result = canvasWriteRef.current?.getResult();
              const isCorrect =
                result &&
                result?.matchPointNumber > matchPointsA.length - 4 &&
                result?.strokesNumber <= 3 &&
                result.maxDistance <= 15;
              Alert.alert(
                'Kết quả',
                `${isCorrect ? 'chính xác' : 'không chính xác'}`,
              );
              canvasWriteRef.current?.reset();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const Dotline = ({bg}: {bg: string}) => {
  return <View style={[styles.dotline, {backgroundColor: bg}]} />;
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#66c270',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  p16: {
    padding: 16,
  },
  pb16: {
    paddingBottom: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  pb32: {
    paddingBottom: 32,
  },
  pv32: {
    paddingVertical: 32,
  },
  ph32: {
    paddingHorizontal: 32,
  },
  mt32: {
    marginTop: 32,
  },
  fonts_SVN_Cherish: {
    fontFamily: 'SVN_Cherish',
  },
  textTitle: {
    fontSize: 40,
    color: 'white',
  },
  alightEnd: {
    alignItems: 'flex-end',
  },
  textModule: {
    fontSize: 20,
    color: '#258F78',
  },
  boxPrice: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRadius: 100,
    padding: 6,
    width: 90,
    backgroundColor: '#FFE699',
  },
  textPrice: {
    fontSize: 18,
    color: '#1C6349',
    paddingHorizontal: 16,
  },
  boxQuestion: {
    padding: 16,
    alignItems: 'center',
  },
  textLarge: {
    fontSize: 140,
    color: 'white',
  },
  textQuestion: {
    fontSize: 40,
    color: 'white',
  },
  boxAnswer: {
    flex: 1,
    padding: 32,
  },
  backgroundAnswer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  backgroundLeft: {
    backgroundColor: '#DDF598',
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 40,
  },
  backgroundRight: {
    backgroundColor: '#DDF598',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 16,
  },
  textW500s16White: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  textW500s16Black: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  dotline: {
    height: 6,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 3,
  },
  tabs: {
    flexDirection: 'row',
    paddingBottom: 14,
  },
});
