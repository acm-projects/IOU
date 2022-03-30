import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#668CD0'
  },
  header: {
    fontWeight: "bold",
    fontSize: 50,
    color: "black",
    marginBottom: 40,
    marginLeft: 15,
  },
  inputView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    margin: 10,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgotPassword: {
    color: "black",
    fontSize: 20
  },
  loginButton1: {
    width: "90%",
    backgroundColor: "#93A8E1",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 20,
  },
  loginButton2: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 20,
    color: "#93A8E1"
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
  },
  safeArea: {
    flex: 1
  }
});
export default styles;