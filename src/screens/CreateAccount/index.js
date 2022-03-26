import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";



const CreateAccount = (props) => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                
                <View>
        <Text style={styles.header}>Welcome to IOU</Text>
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
            placeholder="New Password:" 
            placeholderTextColor="black"
            />
        </View>
        <TouchableOpacity style={styles.loginButton1}>
          <Text style={styles.loginText1}>Create New Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton2}>
          <Text style={styles.loginText2}>I already have an account!</Text>
        </TouchableOpacity>

        
      </View>
            </ImageBackground>
        </View>
    );
};

export default CreateAccount;