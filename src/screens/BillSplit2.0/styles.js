import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: '100%'
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    heading: {
        fontSize: 30,
        left: 95,
        color: 'white',
        marginTop: 10,
        marginBottom: 0,
    },
    bottomContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 700,
        borderRadius: 25,
        //alignItems: 'center',
    },
    valueInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 5,
        borderRadius: 10,
        height: 50,
        width: 242.5
    },
    friendsContainer: {
        backgroundColor: '#F5F5F5',
        height: 450,
        borderRadius: 25,
        margin: 20,
    },
    submitButton: {
        backgroundColor: '#93A8E1',
        width: 100,
        borderRadius: 20,
        alignItems: 'center',
        left: 147
    },
    Inputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
       
    },
    container: {
        backgroundColor: '#F5F5F5',
        //marginLeft: 30,
        marginRight: 10,
        marginTop: 30,
        marginBottom: 5,
        borderRadius: 10,
        //alignItems: 'center',
        height: 50,
        width: 120,
        color: 'red',
    }
});

export default styles;