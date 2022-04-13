import React, { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
    Pressable
} from "react-native";

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import auth, { firebase } from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";

const MyProfileScreen = (props) => {
    const navigation = useNavigation();

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

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => navigation.navigate("Home")}
                        style={styles.homeButton}>
                        <AntDesign name={"home"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Settings")}
                        style={styles.settingButton}>
                        <AntDesign name={"setting"} size={30} color='white' />
                    </Pressable>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.name}>{user && user?.firstName} {user && user?.lastName}</Text>
                    <View style={styles.friends}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>{user && user?.friends.length}</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>Friends</Text>
                    </View>
                    <View style={styles.requests}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>20</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>Requests</Text>
                    </View>
                    <Text style={styles.payments}>Payments to make</Text>
                    <Text style={styles.paymentPrice}>${user && user?.amountPositive}</Text>
                    <Text style={styles.owed}>Owed to me</Text>
                    <Text style={styles.owedPrice}>${user && user?.amountNegative}</Text>
                    <Pressable
                        style={styles.achievementsButton}
                        onPress={() => navigation.navigate("Achievements")}
                    >
                        <Text style={styles.achievements}>Achievements</Text>
                    </Pressable>
                </View>
                <Image source={require('../../../assets/images/sampleProfilePic.jpeg')}
                    style={styles.profilePicture} />
            </ImageBackground>
        </View >
    );
};

export default MyProfileScreen;