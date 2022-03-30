import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: "bold",
    fontSize: 48,
    color: "white",
    marginRight: 120,
  },
  quote: {
    color: 'white',
    fontSize: 20,
    marginRight: 60,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    padding: 20,
    margin: 10,
    width: "85%",
  },
  inputText: {
    height: 50,
  },
  loginButton1: {
    width: "85%",
    backgroundColor: "#93A8E1",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 40,
  },
  loginButton2: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  loginText1: {
    color: "white",
    fontSize: 25
  },
  loginText2: {
    color: "#93A8E1",
    fontSize: 25
  },
  safeArea: {
    flex: 1
  }
});
export default styles;