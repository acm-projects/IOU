import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ImageBackground: {
        height: "100%",
        width: "100%"
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    heading: {
        fontSize: 30,
        left: 70,
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
    },
    middleContainer: {
        flexDirection: 'row',
        height: 220,
        justifyContent: 'center',
    },
    image: {
        height: 50,
        width: 50,
    },
    first: {
        flexDirection: 'column',
        padding: 10,
        top: 30,
    },
    firstBar: {
        backgroundColor: '#fad2d4',
        width: 80,
        height: 230,
        borderRadius: 15,
        alignItems: 'center',
    },
    second: {
        flexDirection: 'column',
        padding: 10,
        top: 80,
    },
    secondBar: {
        backgroundColor: '#fad2d4',
        width: 80,
        height: 215,
        borderRadius: 15,
        alignItems: 'center',
    },
    third: {
        flexDirection: 'column',
        padding: 10,
        top: 100,
    },
    thirdBar: {
        backgroundColor: '#fad2d4',
        width: 80,
        height: 180,
        borderRadius: 15,
        alignItems: 'center',
    },
    bottomContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 500,
        borderRadius: 25,
    },
});

export default styles;