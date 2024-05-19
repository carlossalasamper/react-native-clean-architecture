import {View, Text, StyleSheet} from 'react-native';
import {FontFamily} from './useFonts';

export default function useGlobalStyle() {
  return StyleSheet.create({
    txtLabel: {
      fontSize: 15,
      fontFamily: FontFamily.Eina01Bold,
    },
  });
}
