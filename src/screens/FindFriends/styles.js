import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

    },
    backgroundImage: {
        height: "100%",
        width: "100%",
    },
    backButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    heading: {
        fontSize: 30,
        left: 75,
        color: 'white',
        marginTop: 10,
        marginBottom: 20,
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        width: 370,
        borderRadius: 15,
        marginLeft: 10,
        // marginTop: 20,
    },
    searchInput: {
        marginLeft: 10,
    },
    searchIcon: {
        marginLeft: 10,
    },
    bottomContainer: {
        height: 570,
        width: "100%",
        backgroundColor: 'white',
        marginTop: 30,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    recommended: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        fontWeight: 'bold',
    }
});

export default styles;