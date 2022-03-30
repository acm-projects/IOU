import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#668CD0',
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
    color: "black",
    marginBottom: 40,
    textAlign: "center"
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    padding: 20,
    margin: 10,
    width: "90%"
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgotPassword: {
    color: "black",
    fontSize: 16,
    marginLeft: 15,
  },
  loginButton1: {
    width: "90%",
    backgroundColor: "#93A8E1",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 40,
  },
  loginButton2: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  backgroundImage: {
    //To make Square Shape
    width: 410,
    height: 720,
  },
  loginText1: {
    color: "white",
    fontSize: 30
  },
  loginText2: {
    color: "#93A8E1",
    fontSize: 30
  }
});

export default styles;