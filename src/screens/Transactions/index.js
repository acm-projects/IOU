import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TransactionComponent from '../../components/Transaction';
import transactionData from '../../../assets/data/transactions';

import { useNavigation } from '@react-navigation/native';

const TransactionsScreen = (props) => {
    const navigation = useNavigation();
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
                        data={transactionData}
                        renderItem={({ item }) => <TransactionComponent transaction={item} />}
                    />
                </View>
            </View>

        </ImageBackground>
    );
};

export default TransactionsScreen;