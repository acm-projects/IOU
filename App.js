import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MyProfileScreen from './src/screens/MyProfile';
import FindFriendsComponent from './src/components/FindFriends';
import FindFriendsScreen from './src/screens/FindFriends';
import SettingsScreen from './src/screens/Settings';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <MyProfileScreen /> */}
        {/* <FindFriendsScreen /> */}
        <SettingsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;