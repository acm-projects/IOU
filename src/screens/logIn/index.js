import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
      style={styles.backgroundImage} >
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.quote}>Please sign in to continue</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="black"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Home")}
        style={styles.loginButton1}>
        <Text style={styles.loginText1}>LOGIN</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Sign Up")}
        style={styles.loginButton2}>
        <Text style={styles.loginText2}>I don't have an account!</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default LoginScreen;