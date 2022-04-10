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
import SplitBillScreen from './src/screens/SplitBill';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <MyProfileScreen /> */}
       {/*<FindFriendsScreen />*/}
        {/*<CreateAccount/>*/}
        {/*<LogIn>*/}
        <SplitBillScreen/>
        {/*<SettingsScreen />*/}
      </SafeAreaView>
    </>
  );
};

export default App;