import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
    homeButton: {
        marginTop: 10,
        marginLeft: 10,
    },
    settingButton: {
        marginTop: 10,
        left: 310,
    },
    bottomContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        top: 170,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        //opacity: 0.5
    },
    profilePicture: {
        height: 200,
        width: 200,
        left: 100,
        borderRadius: 100,
        bottom: 575,
        zIndex: 100,
        borderWidth: 5,
        borderColor: 'white',
    },
    name: {
        fontFamily: 'Helvetica bold',
        fontWeight: 'bold',
        fontSize: 30,
        top: 85,
    },
    friends: {
        top: 95,
        alignItems: 'center',
        right: 50,
    },
    requests: {
        top: 55,
        alignItems: 'center',
        left: 50,
    },
    payments: {
        top: 110,
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
    },
    paymentPrice: {
        top: 115,
        fontSize: 24,
        color: 'green',
    },
    owed: {
        top: 150,
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
    },
    owedPrice: {
        top: 155,
        fontSize: 24,
        color: 'red',
    },
    achievementsButton: {
        top: 200,
        backgroundColor: '#93A8E1',
        height: 50,
        borderRadius: 25,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    achievements: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Helvetica-Bold',
    }
});

export default styles;