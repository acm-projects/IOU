import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable, FlatList, ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TransactionComponent from '../../components/Transaction';
import transactionData from '../../../assets/data/transactions';
import TransactionUOMeComponent from '../../components/TransactionUOMe';

import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';

const TransactionsScreen = (props) => {
    const navigation = useNavigation();
    const { uid } = firebase.auth().currentUser;
    const [transactions, setTransactions] = useState([]); // list of all users
    const [IOU, setIOU] = useState([]);
    const [UOMe, setUOMe] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setArrays();
    });

    const setArrays = () => {
        firestore()
            .collection('Users').doc(uid).collection('transactions').where('userSending', '==', uid).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    UOMe.push(doc.data());
                })
            })
        firestore()
            .collection('Users').doc(uid).collection('transactions').where('userSending', '!=', uid).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    IOU.push(doc.data());
                })
            })
        console.log(UOMe);
        // console.log(IOU);
    }

    // const renderItem = ({ item }) => {
    //     return <View style={styles.container}>
    //         <Image source={require('../../../assets/images/sampleProfilePic.jpeg')} style={styles.image} />
    //         <Text style={styles.name}>From {item.userOnBill} for {item.item}</Text>
    //         <Text style={styles.amount}>${item.amountPerPerson}</Text>
    //     </View>
    // }

    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')} style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"white"} />
                </Pressable>
                <Text style={styles.heading}>Transactions</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.IOU}>
                    <View style={styles.textContainer}>
                        <Text style={styles.IOUText}>I-O-U</Text>
                        {/* <Text>{UOMe[0].item}</Text> */}
                    </View>
                    <FlatList
                        data={IOU}
                        renderItem={({ item }) => <TransactionComponent transaction={item} />}
                    />
                </View>
                <View style={styles.IOU}>
                    <View style={styles.textContainer}>
                        <Text style={styles.UOMeText}>U-O-Me</Text>
                    </View>
                    <FlatList
                        data={UOMe}
                        // renderItem={renderItem}
                        renderItem={({ item }) => (<TransactionUOMeComponent transaction={item} />)}
                    />
                </View>
            </View>

        </ImageBackground>
    );
};

export default TransactionsScreen;