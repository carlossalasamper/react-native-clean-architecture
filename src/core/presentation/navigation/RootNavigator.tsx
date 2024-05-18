import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import PostScreen from 'src/post/presentation/screens/PostScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TestScreen from 'src/post/presentation/screens/TestScreen';
import LessonScreen from 'src/post/presentation/screens/LessonScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = 'Posts';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Posts" component={LessonScreen} />

      <Stack.Screen name="Post" component={PostScreen} />

      <Stack.Screen name="TestCanvas" component={TestScreen} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
