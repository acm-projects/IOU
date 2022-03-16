import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 100,
        marginLeft: 10,
        borderWidth: 5,
        borderColor: 'white'
    },
    name: {
        fontSize: 20,
        marginLeft: 10,
        //ontWeight: 'bold',
    },
    button: {
        height: 40,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        position: 'absolute',
        marginRight: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;