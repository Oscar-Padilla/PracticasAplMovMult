import {View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: { backgroundColor: 'white'},
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details'}} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings'}} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}