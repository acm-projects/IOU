import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 20,
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    settings: {
        fontSize: 20,
        marginRight: 30,
        fontWeight: 'bold',
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        height: 50,
        width: 360,
        borderRadius: 15,
        marginLeft: 15,
        marginTop: 30,
    },
    searchInput: {
        marginLeft: 10,
    },
    searchIcon: {
        marginLeft: 10,
    },
    settingContainer: {
        marginTop: 30,
    },
    setting: {
        height: 50,
        marginBottom: 10,
        justifyContent: 'center',
    },

});

export default styles;