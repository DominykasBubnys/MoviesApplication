import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import AuthenticateScreen from "../screens/AuthenticateScreen";
import DetailsScreen from '../screens/DetailsScreen';
import PlayerScreen from "../screens/PlayerScreen";
import ProfileScreen from "../screens/ProfileScreen";


const Stack = createNativeStackNavigator();

const HomeStack = () => {

    const MyTheme = {
        dark: false,
        colors: {
          primary: 'red',
          card: 'rgba(78, 78, 78, 0.9)',
          text: 'rgb(28, 28, 30)',
          backgroundColor: "black",
          notification: 'rgb(255, 69, 58)',
          opacity: "0",
          color: "red"
        },
      };

    return <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Auth" component={AuthenticateScreen} />
            <Stack.Screen name="Browse" component={BrowseScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default HomeStack