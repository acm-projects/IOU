import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ActivityIndicator,Alert } from "react-native";
import styles from "./styles"

import auth from '@react-native-firebase/auth';
import messaging from "@react-native-firebase/messaging"
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';
//import { firebase } from '@react-native-firebase/app';

const FindFriendsComponent = (props) => {
    const friend = props.friend;
    const [added, setAdded] = useState(false);
    const { uid } = firebase.auth().currentUser;
    const [user, setUser] = useState(); // current user
    const [userFriends, setUserFriends] = useState([]); // array of current users friends
    const [loading, setLoading] = useState(true);

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
    
      useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert(remoteMessage.notification.body)
        });
    
        return unsubscribe;
      }, []);

    const saveTokenToDatabase = async (token)=> {
        // Assume user is already signed in
        const userId = auth().currentUser.uid;
        console.log("token is "+token)
        //console.log("UID is "+userId)
        //console.log(firebase.messaging().isDeviceRegisteredForRemoteMessages)
        // Add the token to the users datastore
        await firestore()
          .collection('Users').doc(userId).update({
            tokens: firestore.FieldValue.arrayUnion(token)
          });
      }

      useEffect(() => {
        // Get the device token
        messaging()
          .getToken()
          .then(token => {
            saveTokenToDatabase(token);
          });
        
            messaging().onTokenRefresh(token => {
            saveTokenToDatabase(token);
          });
        }, []);


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

    useEffect(async () => {
        const subscriber = await firestore()
            .collection('Users').doc(uid).collection('friends')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                for (let i = 0; i < users.length; i++) {
                    if (friend.key == users[i].key) {
                        setAdded(!added);
                    }
                }
                setUserFriends(users);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }


      
    const addFriend = async () => {
        console.log(userFriends)
        try {
            for (let i = 0; i < userFriends.length; i++) {
                if (friend.key == userFriends[i].key) {
                    //console.log("Already friends with " + friend.key)
                    await firestore().collection('Users').doc(uid).collection('friends').doc(friend.key).delete().then(() => {
                        console.log('User deleted!');
                    });
                    await firestore().collection('Users').doc(friend.key).collection('friends').doc(uid).delete().then(() => {
                        console.log('User deleted!');
                    });
                    return;
                }
            }
            await firestore().collection('Users').doc(uid).collection("friends").doc(friend.key).set({ name: friend.firstName })
            console.log("friend added")
            const documentSnapshot = await firestore().collection('Users').doc(uid).get()
            const currUser = documentSnapshot.data()
            console.log(currUser.firstName)
            await firestore().collection('Users').doc(friend.key).collection("friends").doc(uid).set({ name: currUser.firstName })
            console.log("friend added")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}

                // source={{ uri: friend.image }}
                source={require('../../../assets/images/sampleProfilePic.jpeg')}
            />
            <Text style={styles.name}>{friend}</Text>
            <Pressable
                onPress={() => {
                    console.log("button pressed")
                    addFriend()
                    setAdded(!added);
                    // friend.friend = !friend.friend;
                }}
                style={({ pressed }) => [
                    { borderWidth: added ? 2 : 0 },
                    // { borderWidth: friend.friend ? 2 : 0 },
                    { backgroundColor: added ? '#FFFFFF' : '#93A8E1' },
                    // { backgroundColor: friend.friend ? '#FFFFFF' : '#93A8E1' },
                    { borderColor: added ? '#93A8E1' : '#FFFFFF' },
                    // { borderColor: friend.friend ? '#93A8E1' : '#FFFFFF' },
                    styles.button]}>
                <Text style={styles.buttonText}>
                    {added ? 'Added' : 'Add'}
                    {/* {friend.friend ? "Added" : "Add"} */}
                </Text>
            </Pressable>
        </View>
    );
};

export default FindFriendsComponent;