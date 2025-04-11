import { NavigationContainer } from "@react-navigation/native";
//import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ConfigScreen2 from "./src/screens/ConfigScreen2";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function RootStack() {
    let isSignedIn = true; 

    return (
        <NavigationContainer>
                {isSignedIn ? (
                    // <Tab.Navigator
                    //     screenOptions={({ route }) => ({
                    //         tabBarIcon: ({ focused, color, size }) => {
                    //             let iconName;
                    //             if (route.name === 'Home') {
                    //                 iconName = focused ? 'home' : 'home-outline';
                    //             } 
                    //             else if (route.name === "Details") {
                    //                 iconName = focused ? 'list' : 'list-outline';
                    //             }                             
                    //             else if (route.name === 'Settings') {
                    //                 iconName = focused ? 'settings' : 'settings';
                    //             }
                    //             else if (route.name === 'Config2') {
                    //                 iconName = focused ? 'settings' : 'settings';
                    //             }
                    //             return <Ionicons name={iconName} size={size} color={color} />;
                    //         },
                    //         tabBarActiveTintColor: 'tomato',
                    //         tabBarInactiveTintColor: 'gray',
                    //     })}
                    // >
                    //     <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                    //     <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
                    //     <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
                    //     <Tab.Screen name="Config2" component={ConfigScreen2} options={{ title: 'Config2' }} />
                    // </Tab.Navigator>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Details" component={DetailsScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                    <Drawer.Screen name="Config2" component={ConfigScreen2} />
                </Drawer.Navigator>
                ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
    );
}

export default function App() {
    return (
        <RootStack />
    );
}