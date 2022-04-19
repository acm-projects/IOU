import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput, Alert } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import auth, { firebase } from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore";


const SignUpScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  const doCreateUser = async (email, password, firstName, lastName, username) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password
      )
      firestore().collection('Users').doc(response.user.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        amountPositive: 0,
        amountNegative: 0,
        addedToBill: false,
        tokens: [],
      })
      firestore().collection('Users').doc(response.user.uid).collection("friends").doc(response.user.uid).set({ name: firstName })
      if (response && response.user) {
        Alert.alert("Success ✅", "Account created successfully")
        navigation.navigate("Home")
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
      style={styles.backgroundImage} >
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.quote}>Create an account to continue</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="First Name:"
          placeholderTextColor="black"
          onChangeText={text => {
            setFirstName(text)
          }}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Last Name:"
          placeholderTextColor="black"
          onChangeText={text => {
            setLastName(text)
          }}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email:"
          placeholderTextColor="black"
          keyboardType="email-address"
          onChangeText={text => {
            setEmail(text)
          }}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username:"
          placeholderTextColor="black"
          onChangeText={text => {
            setUsername(text)
          }}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="black"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Pressable onPress={() => doCreateUser(email, password, firstName, lastName, username)}
        style={styles.loginButton1}>
        <Text style={styles.loginText1}>SIGN UP</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}
        style={styles.loginButton2}>
        <Text style={styles.loginText2}>I already have an account!</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default SignUpScreen;