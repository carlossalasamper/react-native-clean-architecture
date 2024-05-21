import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// import GlobalModal from 'services/globalModal';
import RootNavigator from './navigation/RootNavigator';
import RootNavigation from './navigation/actions/RootNavigationActions';
import {screenTracking} from './utils/ScreenTracking';

const App = () => {
  const routeNameRef = useRef<string>();

  const onNavigationReady = (): void => {
    const route = RootNavigation.current?.getCurrentRoute();

    if (route) {
      routeNameRef.current = route.name;
      // store?.rootStore?.dispatch(setAppReady());
    }
  };
  const changeRouteName = () => {
    const previousRouteName = routeNameRef.current;
    const currentRoute = RootNavigation.current?.getCurrentRoute();
    if (currentRoute) {
      const currentRouteName = currentRoute.name;
      screenTracking(previousRouteName, currentRouteName);
      routeNameRef.current = currentRouteName;
    }
  };

  return (
    <NavigationContainer
      ref={RootNavigation}
      onReady={onNavigationReady}
      onStateChange={changeRouteName}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
        {/* <GlobalModal /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
