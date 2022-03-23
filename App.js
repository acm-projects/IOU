import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MyProfileScreen from './src/screens/MyProfile';
import FindFriendsComponent from './src/components/FindFriends';
import FindFriendsScreen from './src/screens/FindFriends';
import SettingsScreen from './src/screens/Settings';
import HomeScreen from './src/screens/Home';
import SplitBillScreen from './src/screens/SplitBill';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <MyProfileScreen /> */}
        {/* <FindFriendsScreen /> */}
        {/* <SettingsScreen /> */}
        {/* <HomeScreen /> */}
        <SplitBillScreen />
      </SafeAreaView>
    </>
  );
};

export default App;