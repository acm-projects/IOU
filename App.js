import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MyProfileScreen from './src/screens/MyProfile';
import FindFriendsComponent from './src/components/FindFriends';
import FindFriendsScreen from './src/screens/FindFriends';
import SettingsScreen from './src/screens/Settings';
import LogIn from './src/screens/logIn';
import CreateAccount from './src/screens/CreateAccount';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <MyProfileScreen /> */}
        {/* <FindFriendsScreen /> */}
        {/*<CreateAccount>*/}
        {/*<LogIn>*/}
        {/*<SettingsScreen />*/}
      </SafeAreaView>
    </>
  );
};

export default App;