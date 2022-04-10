import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyProfileScreen from './src/screens/MyProfile';
import FindFriendsComponent from './src/components/FindFriends';
import FindFriendsScreen from './src/screens/FindFriends';
import SettingsScreen from './src/screens/Settings';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import LeaderboardScreen from './src/screens/Leaderboard';
import AchievementsScreen from './src/screens/Achievements';
import SplitBillScreen from './src/screens/SplitBill';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
      {/* <MyProfileScreen /> */}
      {/* <FindFriendsScreen /> */}
      {/* <CreateAccount /> */}
      {/* <LogIn /> */}
      {/* <SettingsScreen /> */}
      {/* <HomeScreen /> */}
      {/* <Router /> */}
      {/* <LeaderboardScreen /> */}
      {/* <AchievementsScreen /> */}
      {/* </SafeAreaView> */}
      {/* <Router /> */}
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


    </>
  );
};

export default App;