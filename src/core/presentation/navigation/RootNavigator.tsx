import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import AppNavigator from './AppNavigator';
import {STACK_NAVIGATOR} from './ConstantNavigator';
import {useFonts} from '../hooks/useFonts';

export const AppStack = createStackNavigator();

const RootNavigator: FC = () => {
  useFonts();
  return (
    <AppStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}
      initialRouteName={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS}>
      {AppNavigator()}
    </AppStack.Navigator>
  );
};

export default RootNavigator;
