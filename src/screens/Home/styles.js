import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
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
        alignItems: 'center'
    
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
    }
});

export default styles;