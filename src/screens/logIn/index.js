import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const doSignIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        // Alert.alert("Success ✅", "Authenticated successfully")
        navigation.navigate("Home")
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
      style={styles.backgroundImage} >
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.quote}>Please sign in to continue</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={text => {
            setEmail(text)
          }}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={text => {
            setPassword(text)
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Pressable onPress={() => doSignIn(email, password)}
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