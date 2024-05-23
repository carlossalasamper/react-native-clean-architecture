import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useGlobalStyle from 'src/core/presentation/hooks/useGlobalStyle';
import PrimaryButton from '../components/PrimaryButton';
import CommonInput, {CommonInputPassword} from '../components/CommonInput';

const LoginScreen = () => {
  const commonStyle = useGlobalStyle();

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [useName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={[styles.fill]}>
        <View style={[styles.boxLang]}>
          <Text style={[commonStyle.txtLabel, styles.ph16]}>Eng</Text>
          <View style={[styles.arrowIcon]} />
        </View>

        <View style={[styles.fill, styles.justifyCenter]}>
          <CommonInput
            label="Email or phone number"
            textInputProp={{
              placeholder: 'Enter email or phone number',
              value: emailOrPhone,
              onChangeText: setEmailOrPhone,
            }}
          />

          <CommonInput
            label="User Name"
            textInputProp={{
              placeholder: 'Enter name',
              value: useName,
              onChangeText: setUserName,
            }}
          />

          <CommonInputPassword
            label="Enter password"
            textInputProp={{
              value: password,
              onChangeText: setPassword,
            }}
          />

          <CommonInputPassword
            label="Confirm password"
            textInputProp={{
              value: confirmPassword,
              onChangeText: setConfirmPassword,
            }}
          />
        </View>

        <View style={[styles.rowAround]}>
          <PrimaryButton text="Log in" />
          <PrimaryButton text="Next" />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fbf8cc',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  boxLang: {
    backgroundColor: '#FFE699',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 40,
    padding: 5,
    borderRadius: 30,
  },
  arrowIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
