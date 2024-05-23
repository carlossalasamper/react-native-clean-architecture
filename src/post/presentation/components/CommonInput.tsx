import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  TextStyle,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import useGlobalStyle from 'src/core/presentation/hooks/useGlobalStyle';

type Props = {
  textInputProp?: TextInputProps;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  suffiex?: React.ReactNode;
};

const CommonInput = (props: Props) => {
  const commonStyle = useGlobalStyle();

  return (
    <View style={styles.pb32}>
      <Text style={[commonStyle.txtLabel, styles.txtLabel]}>{props.label}</Text>
      <View style={styles.boxInput}>
        <TextInput style={[styles.input]} {...props.textInputProp} />
      </View>
      {props.suffiex}
    </View>
  );
};

export const CommonInputPassword = (props: Props) => {
  const [password, setPassword] = useState(props.textInputProp?.value ?? '');
  const commonStyle = useGlobalStyle();
  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  useEffect(() => {
    props.textInputProp?.onChangeText?.(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, props.textInputProp?.onChangeText]);

  useEffect(() => {
    setPassword(props.textInputProp?.value ?? '');
  }, [props.textInputProp?.value]);

  const onChangePassword = (text: string, index: number) => {
    if (text.trim() !== '') {
      if (password.length < refs.length) {
        setPassword(password + text);
      }
      if (index < refs.length - 1) {
        refs[index + 1]?.current?.focus();
      } else {
        Keyboard.dismiss();
      }
    } else if (text === '') {
      setPassword(password.substring(0, password.length - 1));
      if (index > 0) {
        refs[index - 1]?.current?.focus();
      } else {
      }
    }
  };

  return (
    <View style={styles.pb32}>
      <Text style={[commonStyle.txtLabel, styles.txtLabel]}>{props.label}</Text>
      <View style={[styles.rowBetween]}>
        <View style={[styles.rowBetween, styles.fill]}>
          {refs.map((r, i) => (
            <View style={[styles.boxInput, styles.w64]} key={i}>
              <TextInput
                value={password[i] ?? ''}
                onChangeText={t => onChangePassword(t, i)}
                ref={r}
                style={[styles.inputPassword]}
                maxLength={1}
              />
            </View>
          ))}
        </View>
        {props.suffiex}
      </View>
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  boxInput: {
    backgroundColor: '#DDF598',
    height: 64,
    borderRadius: 15,
    flexDirection: 'row',
  },
  txtLabel: {
    color: '#1C6349',
    paddingBottom: 8,
  },
  input: {
    padding: 22,
  },
  inputPassword: {
    flex: 1,
    textAlign: 'center',
  },
  w64: {
    width: 64,
  },
  pb8: {
    paddingBottom: 8,
  },
  pb32: {
    paddingBottom: 32,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
