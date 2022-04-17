import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import auth from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';


const TransactionUOMeComponent = (props) => {
    const transaction = props.transaction;
    const { uid } = firebase.auth().currentUser;
    const [name, setName] = useState();

    useEffect(() => {
        getUsersName();
        // console.log(transaction);
    });

    const getUsersName = async () => {
        const user = await firestore().collection('Users').doc(transaction.userOnBill).get();
        // console.log(user.data().firstName);
        setName(user.data().firstName);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/sampleProfilePic.jpeg')} style={styles.image} />
            <Text style={styles.name}>From {name} for {transaction.item}</Text>
            <Text style={styles.amount}>${transaction.amountPerPerson}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90,
        //backgroundColor: '#F5F5F5',
        alignItems: 'center',
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: '#D3D3D3'
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
        width: "60%",
        fontSize: 20,
        marginLeft: 10,
    },
    amount: {
        fontSize: 20,
        //marginRight: 10,
        marginLeft: 10,
    }
});

export default TransactionUOMeComponent;