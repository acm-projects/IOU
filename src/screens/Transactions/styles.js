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
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 30,
        marginLeft: 65,
    },
    bottomContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 700,
        borderRadius: 25,
        //alignItems: 'center',
    },
    textContainer: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    IOU: {
        height: '50%',
    },
    IOUText: {
        fontSize: 20,
        marginLeft: 10,
        color: 'red',
    },
    UOMeText: {
        fontSize: 20,
        marginLeft: 10,
        color: 'green',
    }
});

export default styles;