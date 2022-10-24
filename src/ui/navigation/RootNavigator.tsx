import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import NotFoundScreen from "../modules/core/screens/NotFoundScreen";
import HomeScreen from "../modules/core/screens/HomeScreen";
import PostScreen from "../modules/post/screens/PostScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const initialRouteName: keyof RootStackParamList = "Home";

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Post" component={PostScreen} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
