import { StyleSheet } from "react-native";
//import styles from "../MyProfile/styles";

const styles = StyleSheet.create({
    backgroundImage: {
        height: '95%',
        width: '100%',
    },
    profileButton: {
        marginTop: 10,
        left: 350,
    },
    welcome: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10
    },
    bottomContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 600,
        marginTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        flexDirection: 'column',
    },
    amount: {
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttons: {
        backgroundColor: '#93A8E1',
        marginTop: 30,
        borderRadius: 30,
        width: 300,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
    },
    keyTest: {
        fontSize: 20,
    },
    pieContainer: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        height: 300,
        marginTop: 0,
        marginBottom: 10,
        //borderTopLeftRadius: 25,
        //borderTopRightRadius: 25,
        alignItems: 'center',
    },
    keyStyle: {
        fontSize: 15,
        textAlign: 'center',
        flexDirection: 'row',
        marginRight: 10,
    },
    misc: {
        width: 10,
        height: 10,
        backgroundColor: '#2196F3',
        marginTop: 5,
        marginRight: 5, 
        //flexDirection: 'column',
    },
    food: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        marginTop: 5,
        marginRight: 5, 
        //flexDirection: 'column',
    },
    rent: {
        width: 10,
        height: 10,
        backgroundColor: 'orange',
        marginTop: 5,
        marginRight: 5, 
        //flexDirection: 'column',
    },
    fun: {
        width: 10,
        height: 10,
        backgroundColor: '#4CAF50',
        marginTop: 5,
        marginRight: 5, 
        //flexDirection: 'column',
    },
    keyList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    
});



export default styles;