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
        marginBottom: 20,
    },
    bottomContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 740,
        borderRadius: 25,
        //alignItems: 'center',
    },
    valueInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
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
    }
});

export default styles;