// import {View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DetailsScreen from "./src/screens/DetailsScreen";
// import SettingsScreen from "./src/screens/SettingsScreen";
// import HomeScreen from "./src/screens/HomeScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import { createStaticNavigation, useNavigation } from "@react-navigation/native";
// import { Button } from "@react-navigation/elements";

// const Stack = createNativeStackNavigator();

// function RootStack() {
//     return (
//         <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//             headerStyle: { backgroundColor: 'white'},
//         }}>
//             <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}} />
//             <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details'}} />
//             <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings'}} />
//         </Stack.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <RootStack />
//         </NavigationContainer>
//     );
// }



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
// import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootStack() {
    let isSignedIn = true; 

    return (
        <NavigationContainer>
                {isSignedIn ? (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Home') {
                                    iconName = focused ? 'home' : 'home-outline';
                                } 
                                else if (route.name === "Details") {
                                    iconName = focused ? 'list' : 'list-outline';
                                }                             
                                else if (route.name === 'Settings') {
                                    iconName = focused ? 'settings' : 'settings';
                                }
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                        })}
                    >
                        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                        <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
                        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
                    </Tab.Navigator>
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
        // <NavigationContainer>
        // </NavigationContainer>
    );
}