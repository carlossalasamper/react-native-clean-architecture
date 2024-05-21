import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import AppNavigator from './AppNavigator';

export const AppStack = createStackNavigator();

const RootNavigator: FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      {AppNavigator()}
    </AppStack.Navigator>
  );
};

export default RootNavigator;
