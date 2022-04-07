import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MyProfileScreen from './src/screens/MyProfile';
import FindFriendsComponent from './src/components/FindFriends';
import FindFriendsScreen from './src/screens/FindFriends';
import SettingsScreen from './src/screens/Settings';
import LogIn from './src/screens/Login';
import CreateAccount from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import LeaderboardScreen from './src/screens/Leaderboard';
import AchievementsScreen from './src/screens/Achievements';
import Router from './src/navigation/router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
      <Router />

    </>
  );
};

export default App;