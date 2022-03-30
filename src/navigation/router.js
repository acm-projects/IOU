import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import SplitBillScreen from "../screens/SplitBill";
import FindFriendsScreen from "../screens/FindFriends";
import MyProfileScreen from "../screens/MyProfile";
import SettingsScreen from "../screens/Settings";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;