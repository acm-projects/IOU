import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

    },
    backgroundImage: {
        height: "100%",
        width: "100%",
    },
    homeButton: {
        marginLeft: 10,
        marginTop: 10,
    },
    profileButton: {
        marginTop: 10,
        left: 310,
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        width: 370,
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 30,
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