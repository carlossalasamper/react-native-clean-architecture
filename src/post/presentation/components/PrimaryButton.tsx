import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import useGlobalStyle from 'src/core/presentation/hooks/useGlobalStyle';

type Props = {
  text: string;
  style?: StyleProp<ViewStyle>;
  wrapContent?: boolean;
  onPress?: () => void;
};

const PrimaryButton = (props: Props) => {
  const commonStyle = useGlobalStyle();

  const alignSelf = props.wrapContent ?? true ? 'center' : 'auto';

  return (
    <TouchableOpacity
      style={[styles.button, {alignSelf: alignSelf}, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.text, commonStyle.txtLabel]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#66C270',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
