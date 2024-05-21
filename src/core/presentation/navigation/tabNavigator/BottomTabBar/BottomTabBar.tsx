import React, {FC, Fragment} from 'react';
import {Platform, View, StatusBar} from 'react-native';
import styles from '../styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'src/core/presentation/constants/colors';
import TabButton from './TabButton';

interface CustomStatusBarProps {
  backgroundColor: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const CustomStatusBar: FC<CustomStatusBarProps> = ({
  backgroundColor,
  barStyle,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{height: insets.bottom, backgroundColor}}>
      <StatusBar
        animated={true}
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.ReactElement | null {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Fragment>
      <View style={styles.blockRoutes}>
        {Platform.OS === 'android' && (
          <View style={styles.blockRoutesContainer} />
        )}
        {state?.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // console.log('route', route);
              navigation.navigate(route.name);
            }
          };

          return (
            <TabButton
              options={options}
              onPress={onPress}
              route={route}
              isFocused={isFocused}
              numberOfTab={state?.routes}
            />
          );
        })}
      </View>
      <CustomStatusBar
        backgroundColor={COLORS.BLUE_258F78}
        barStyle="light-content"
      />
    </Fragment>
  );
}

export default BottomTabBar;
