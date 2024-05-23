import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#66C270',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
