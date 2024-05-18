import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {useFonts} from 'expo-font';
import CanvasWrite, {CanvasWriteRef} from '../components/CanvasWrite';
import PrimaryButton from '../components/PrimaryButton';

const LessonScreen = () => {
  const [_] = useFonts({
    SVN_Cherish: require('assets/fonts/SVN_Cherish.otf'),
  });

  const canvasWriteRef = useRef<CanvasWriteRef>(null);

  return (
    <View style={[styles.screen]}>
      <View style={[styles.ph32]}>
        <View>
          <Text style={[styles.fonts_SVN_Cherish, styles.textTitle]}>
            VIETNAMESE
          </Text>
        </View>
        <View style={[styles.boxQuestion]}>
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
          <Text style={[styles.textW500s16Black, styles.pb16]}>
            Write the "Á"
          </Text>
          <CanvasWrite
            ref={canvasWriteRef}
            text={{content: 'Á', color: '#66C270'}}
          />
          <PrimaryButton
            text="Submit"
            style={[styles.mt32]}
            onPress={() => {
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
    flex: 1,
    backgroundColor: '#66c270',
  },
  p16: {
    padding: 16,
  },
  pb16: {
    paddingBottom: 16,
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
