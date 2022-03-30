import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

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
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Last Name:"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email:"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Username:"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="black"
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Home")}
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