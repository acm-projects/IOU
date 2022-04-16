import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ActivityIndicator, StyleSheet } from "react-native";

import auth from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';


const SplitBillComponent = (props) => {
    const friend = props.friend;
    const [added, setAdded] = useState(false);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { uid } = firebase.auth().currentUser;

    useEffect(() => {
        const subscriber = firestore()
            .collection('Users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setUsers(users);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    const addToBill = async () => {
        try {
            if (added == false) {
                await firestore().collection('Users').doc(friend.key).update({ addedToBill: true })
                console.log("user added")
            } else {
                await firestore().collection('Users').doc(friend.key).update({ addedToBill: false })
                console.log("user removed")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/sampleProfilePic.jpeg')}
            />
            <Text style={styles.name}>{friend.firstName} {friend.lastName}</Text>
            <Pressable
                onPress={() => {
                    console.log("button pressed")
                    //addFriend()
                    addToBill();
                    setAdded(!added);
                    // friend.friend = !friend.friend;
                }}>
                <Text style={styles.buttonText}>
                    {added ? '-' : '+'}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
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
        fontSize: 20,
        marginLeft: 10,
        width: '70%'
        //ontWeight: 'bold',
    },
    textContainer: {
        height: 80,
        width: '20%',
        //alignItems: ''
    },
    buttonText: {
        color: '#7879F1',
        fontSize: 30,
    },
});

export default SplitBillComponent;