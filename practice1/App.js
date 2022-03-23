import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
const image = { uri: "https://lh3.googleusercontent.com/ghXFIvmhSKfs_sqjfOzGxhj6TGXdc_5TtmLaOqLJHZNYWc58CIauh0JICy0-1KcoB6MvETM=s131" };
export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View>
      <ImageBackground source={image} style={styles.backgroundImage}>
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#668CD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontWeight:"bold",
    fontSize:50,
    color:"black",
    marginBottom:40,
    textAlign: "center"
  },
  inputView:{
    width:"95%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgotPassword:{
    color:"black",
    fontSize:20
  },
  loginButton1:{
    width:"95%",
    backgroundColor:"#93A8E1",
    borderRadius:25,
    height:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginButton2:{
    width:"95%",
    backgroundColor:"white",
    borderRadius:25,
    height:60,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  backgroundImage: {
    //To make Square Shape
    width: 410,
    height: 720,
  },
  loginText1:{
    color:"white",
    fontSize: 30
  },
  loginText2:{
    color:"#93A8E1",
    fontSize:30 
  }
});