import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ImageBackground: {
        height: '100%',
        width: '100%',
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    logo: {
        height: 80,
        width: 80,
        marginLeft: 15,
    },
    points: {
        fontSize: 40,
        color: 'white',
        margin: 10,
    },
    bottomContainer: {
        width: '100%',
        height: 650,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 15,
        marginTop: 10,
        //justifyContent: 'space-between',
    },
});

export default styles;