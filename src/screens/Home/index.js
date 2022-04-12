import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import auth, { firebase } from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";

const HomeScreen = (props) => {
    const { uid } = firebase.auth().currentUser;
    const [user, setUser] = useState();

    const getUser = async () => {
        try {
            const documentSnapshot = await firestore()
                .collection('Users')
                .doc(uid)
                .get();

            const userData = documentSnapshot.data();
            setUser(userData);
        } catch {
            console.log("Could not find user")
        }
    };

    useEffect(() => {
        getUser();
    }, []);


    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate("Profile")}
                    style={styles.profileButton}>
                    <AntDesign name={"user"} size={30} style={{ color: 'white' }}></AntDesign>
                </Pressable>
            </View>
            <View style={styles.welcome}>
                <Text style={{ color: 'white', fontSize: 40, fontFamily: 'Helvetica bold' }}>Hello,</Text>
                <Text style={{ color: 'white', fontSize: 24, fontFamily: 'Helvetica bold' }}>{user && user?.firstName} {user && user?.lastName}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={styles.amount}>
                        <Text style={{ color: 'green', fontSize: 36, margin: 10, }}>+${user && user?.amountPositive}</Text>
                    </Pressable>
                    <Pressable style={styles.amount}>
                        <Text style={{ color: 'red', fontSize: 36, margin: 10, }}>-${user && user?.amountNegative}</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Split Bill')}
                >
                    <Text style={{ color: 'white', fontSize: 30, margin: 10 }}>Split your bill</Text>
                </Pressable>
                <Pressable
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Find Friends')}
                >
                    <Text style={{ color: 'white', fontSize: 30, margin: 10 }}>Find Friends</Text>
                </Pressable>
                <Pressable
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Leaderboard')}
                >
                    <Text style={{ color: 'white', fontSize: 30, margin: 10 }}>Leaderboard</Text>
                </Pressable>
            </View>

        </ImageBackground>
    );
};

export default HomeScreen;