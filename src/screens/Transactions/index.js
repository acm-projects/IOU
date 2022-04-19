import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TransactionComponent from '../../components/Transaction';
import transactionData from '../../../assets/data/transactions';
import TransactionUOMeComponent from '../../components/TransactionUOMe';
import transactionUOMeData from '../../../assets/data/transactionsUOMe';

import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';

const TransactionsScreen = (props) => {
    const navigation = useNavigation();
    const { uid } = firebase.auth().currentUser;
    const [transactions, setTransactions] = useState([]);
    const [UOMe, setUOMe] = useState([]);
    const [IOU, setIOU] = useState([]);

    useEffect(() => {
        getTransactions();
        // console.log(transactions);
        // console.log(transactions);
        // setArrayType
        setArrayType();
        console.log(IOU);
        console.log(UOMe);
    }, []);

    const getTransactions = async () => {
        try {
            await firestore().collection('Users').doc(uid).collection('transactions')
                .onSnapshot(querySnapshot => {
                    const t = [];

                    querySnapshot.forEach(documentSnapshot => {
                        t.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                    });

                    setTransactions(t);
                });
        } catch (e) {
            console.log(e);
        }
    }

    const setArrayType = () => {
        const u = [];
        const io = [];
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].userSending == uid) {
                u.push(transactions[i]);
            } else {
                io.push(transactions[i]);
            }
        }
        setUOMe(u);
        setIOU(io);
    }


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
                    </View>
                    <FlatList
                        data={transactionData}
                        renderItem={({ item }) => <TransactionComponent transaction={item} />}
                    />
                </View>
                <View style={styles.IOU}>
                    <View style={styles.textContainer}>
                        <Text style={styles.UOMeText}>U-O-Me</Text>
                    </View>
                    <FlatList
                        data={transactionUOMeData}
                        renderItem={({ item }) => <TransactionUOMeComponent transaction={item} />}
                    />
                </View>
            </View>

        </ImageBackground>
    );
};

export default TransactionsScreen;