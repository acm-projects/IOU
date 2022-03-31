import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'

const LogIn = (props) => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                
                <View>
        <Text style={styles.header}>IOU</Text>
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
        <TouchableOpacity style={styles.loginButton1}>
          <Text style={styles.loginText1}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton2}>
          <Text style={styles.loginText2}>I don't have an account!</Text>
        </TouchableOpacity>

        
      </View>
            </ImageBackground>
        </View>
    );
};

export default LogIn;