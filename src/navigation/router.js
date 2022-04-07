import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/SignUp";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import SplitBillScreen from "../screens/SplitBill";
import FindFriendsScreen from "../screens/FindFriends";
import MyProfileScreen from "../screens/MyProfile";
import SettingsScreen from "../screens/Settings";
import AchievementsScreen from "../screens/Achievements";
import LeaderboardScreen from "../screens/Leaderboard";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign Up">
                <Stack.Screen
                    name={"Sign Up"}
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Login"}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Split Bill"}
                    component={SplitBillScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Find Friends"}
                    component={FindFriendsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Leaderboard"}
                    component={LeaderboardScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Profile"}
                    component={MyProfileScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Settings"}
                    component={SettingsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={"Achievements"}
                    component={AchievementsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;