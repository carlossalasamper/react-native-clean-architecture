import {
  DrawerActions,
  NavigationContainerRef,
  NavigationProp,
  ParamListBase,
  StackActions,
  TabActions,
} from '@react-navigation/native';
import {createRef} from 'react';

const navigationRef = createRef<NavigationContainerRef>();

export const navigateScreen = (
  screen: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  try {
    navigationRef.current?.navigate(screen, params);
  } catch (error) {
    console.log('RootNavigation - function navigateScreen crash');
  }
};
export const pushScreen = (
  screen: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  try {
    navigationRef.current?.dispatch(StackActions.push(screen, params));
  } catch (error) {
    console.log('RootNavigation - function navigateScreen crash');
  }
};

export const replaceScreen = (
  screen: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  navigationRef.current?.dispatch(StackActions.replace(screen, params));
};
export const goBack = (): void => {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
};

export const resetNavigator = (screen: string, params = {}): void =>
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: screen, params}],
  });

export const backToTopScreen = (): void =>
  navigationRef.current?.dispatch(StackActions.popToTop());

export const backToOthersScreen = (key: number | undefined): void =>
  navigationRef.current?.dispatch(StackActions.pop(key));

export const jumpToTab = (screen: string, params = {}): void =>
  navigationRef.current?.dispatch(TabActions.jumpTo(screen, params));

export const openDrawer = (): void => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
};

export const hideBottomTab = (
  navigation: NavigationProp<ParamListBase>,
): void => {
  const parent = navigation?.getParent();
  parent &&
    parent.setOptions &&
    parent.setOptions({
      tabBarVisible: false,
    });
};
export const showBottomTab = (
  navigation: NavigationProp<ParamListBase>,
): void => {
  const parent = navigation?.getParent();
  parent &&
    parent.setOptions &&
    parent.setOptions({
      tabBarVisible: true,
    });
};
export default navigationRef;
