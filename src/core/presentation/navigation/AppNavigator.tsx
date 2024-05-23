import * as React from 'react';
import {STACK_NAVIGATOR} from './ConstantNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStack} from './RootNavigator';
import TabNavigator from './tabNavigator/TabNavigator';
import {hideBottomTab, showBottomTab} from './actions/RootNavigationActions';
import PostScreen from 'src/post/presentation/screens/PostsScreen';
import PostsScreen from 'src/post/presentation/screens/PostsScreen';
import LessonScreen from 'src/lesson/presentation/screens/LessonScreen';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const TargetStack = createStackNavigator();
const ParentStack = createStackNavigator();
const ChildStack = createStackNavigator();

export const AuthStackScreens = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <AuthStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={PostsScreen}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            hideBottomTab(navBottom);
          },
        })}
      />
    </AuthStack.Navigator>
  );
};

export const HomeStackScreens = (): React.ReactElement => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <HomeStack.Screen
        name={STACK_NAVIGATOR.HOME.LESSON}
        key={STACK_NAVIGATOR.HOME.LESSON}
        component={LessonScreen}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

export const TargetStackScreens = (): React.ReactElement => {
  return (
    <TargetStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <TargetStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={PostsScreen}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
      {/* <TargetStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={Login}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      /> */}
    </TargetStack.Navigator>
  );
};

export const ParentStackScreens = (): React.ReactElement => {
  return (
    <ParentStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <ParentStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={PostsScreen}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
      {/* <ParentStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={Login}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      /> */}
    </ParentStack.Navigator>
  );
};

export const ChildStackScreens = (): React.ReactElement => {
  return (
    <ChildStack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
      }}>
      <ChildStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={PostsScreen}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      />
      {/* <ChildStack.Screen
        name={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        key={STACK_NAVIGATOR.AUTH.LOGIN_SCREEN}
        component={Login}
        listeners={({navigation: navBottom}) => ({
          focus: () => {
            showBottomTab(navBottom);
          },
        })}
      /> */}
    </ChildStack.Navigator>
  );
};

function AppNavigator(): React.ReactElement {
  return (
    <>
      <AppStack.Screen
        name={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS}
        key={STACK_NAVIGATOR.BOTTOM_TAB_SCREENS}
        component={TabNavigator}
      />
      <AppStack.Screen
        name={STACK_NAVIGATOR.AUTH_NAVIGATOR}
        key={STACK_NAVIGATOR.AUTH_NAVIGATOR}
        component={AuthStackScreens}
      />
      <AppStack.Screen
        name={STACK_NAVIGATOR.HOME_NAVIGATOR}
        key={STACK_NAVIGATOR.HOME_NAVIGATOR}
        component={HomeStackScreens}
      />
      <AppStack.Screen
        name={STACK_NAVIGATOR.TARGET_NAVIGATOR}
        key={STACK_NAVIGATOR.TARGET_NAVIGATOR}
        component={TargetStackScreens}
      />
      <AppStack.Screen
        name={STACK_NAVIGATOR.PARENT_NAVIGATOR}
        key={STACK_NAVIGATOR.PARENT_NAVIGATOR}
        component={ParentStackScreens}
      />
      <AppStack.Screen
        name={STACK_NAVIGATOR.CHILD_NAVIGATOR}
        key={STACK_NAVIGATOR.CHILD_NAVIGATOR}
        component={ChildStackScreens}
      />
    </>
  );
}

export default AppNavigator;
