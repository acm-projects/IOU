import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'
import { useNavigation } from '@react-navigation/native';
import SplitBillComponent from '../../components/SplitBill';
import auth from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";
import { firebase } from '@react-native-firebase/app';

const SplitBillScreen = (props) => {
    const [amount, setAmount] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const navigation = useNavigation();
    const [filterdData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setsearch] = useState('');
    const { uid } = firebase.auth().currentUser;
    const [user, setUser] = useState(); // current user
    const [users, setUsers] = useState([]); // list of all users
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    const [usersOnBill, setUsersOnBill] = useState([]);

    // useEffect(() => {
    //     const names = [];
    //     firestore().collection("Users").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             const name = doc.data().firstName
    //             const lastName = doc.data().lastName
    //             //console.log(name)
    //             names.push(name + ' ' + lastName)
    //         })
    //     })
    //     //console.log("Users starts:"+names)
    //     //setUsers(users);
    //     setUsers(names)
    //     setLoading(false);
    //     setMasterData(names);
    //     setFilteredData(names);

    //     //console.log("Users starts:"+users)

    //     // Unsubscribe from events when no longer in use
    //     //return () => subscriber();
    // }, []);



    const searchFilter = (text) => {
        console.log("Users starts:" + users)
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.toUpperCase();
                //console.log(item.firstName) 
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            });
            setFilteredData(newData);
            setsearch(text);
        } else {
            setFilteredData(masterData);
            setsearch(text);
        }
    }
    const ItemSeperatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
            />
        )
    }

    useEffect(() => {
        getUser();
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
        const subscriber = firestore()
            .collection('Users')
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    // documentSnapshot.ref.update({
                    //     addedToBill: false
                    // })
                    // PUT THIS IN ONSUBMIT
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

    if (loading) {
        return <ActivityIndicator />;
    }


    const onCreateTransaction = async () => {
        const d = new Date();
        if (amount == '') {
            console.log("must enter amount");
            return;
        }
        if (item == '') {
            console.log("must enter item");
            return;
        }
        try {
            for (let i = 0; i < users.length; i++) {
                if (users[i].addedToBill == true) {
                    usersOnBill.push(users[i]);
                }
            }
            const amountPerPerson = (amount / (usersOnBill.length + 1)).toFixed(2);

            // Create seperate transaction for each user
            for (let i = 0; i < usersOnBill.length; i++) {
                // add to current users transactions
                let transactionid = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "-" + amount + "-" + i;
                await firestore().collection('Users').doc(uid).collection('transactions').doc(transactionid).set({
                    totalAmount: amount,
                    userSending: uid,
                    item: item,
                    amountPerPerson: amountPerPerson,
                    userOnBill: usersOnBill[i].key,
                })

                // add to the added users transactions
                await firestore().collection('Users').doc(usersOnBill[i].key).collection('transactions').doc(transactionid).set({
                    totalAmount: amount,
                    userSending: uid,
                    item: item,
                    amountPerPerson: amountPerPerson,
                    userOnBill: usersOnBill[i].key,
                })

                await firestore().collection('Users').doc(usersOnBill[i].key).update({
                    // amountNegative: admin.firestore().FieldValue.increment(amountPerPerson)
                    amountNegative: amountPerPerson,
                })
                // await firestore().collection('Users').doc(uid).update({
                //     amountPositive: admin.firestore().FieldValue.increment(amountPerPerson)
                // })
            }

            await firestore().collection('Users').doc(uid).update({
                amountPositive: (amount - amountPerPerson),
            })

            firestore().collection('Users').onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    documentSnapshot.ref.update({
                        addedToBill: false
                    })
                });
            });
            navigation.navigate("Home")
        } catch (e) {
            console.log(e);
        }
    }
    // const onCreateTransaction = async () => {
    //     const d = new Date();
    //     const id = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "-" + amount
    //     console.log(id)
    //     try {
    //         console.log(users)
    //         for (let i = 0; i < users.length; i++) {
    //             if (users[i].addedToBill) {
    //                 usersOnBill.push(users[i]);
    //                 await firestore().collection('Users').doc(uid).collection("transactions").doc(id)
    //                     .collection("usersSentTo").doc(users[i].key).set({ name: users[i].firstName, paid: false })
    //             }
    //         }
    //         console.log(usersOnBill.length)
    //         const amountPerPerson = (amount / (usersOnBill.length + 1));
    //         await firestore().collection('Users').doc(uid).collection("transactions").doc(id).set({
    //             totalAmount: amount,
    //             userSending: uid,
    //             item: item,
    //             amountPerPerson: amountPerPerson,
    //         })
    //         for (let i = 0; i < usersOnBill.length; i++) {
    //             await firestore().collection('Users').doc(usersOnBill[i].key).collection("transactions").doc(id).set({
    //                 totalAmount: amount,
    //                 userSending: uid,
    //                 item: item,
    //                 amountPerPerson: amountPerPerson,
    //             })
    //             for (let j = 0; j < usersOnBill.length; j++) {
    //                 await firestore().collection('Users').doc(usersOnBill[i].key).collection("transactions").doc(id)
    //                     .collection("usersSentTo").doc(usersOnBill[j].key).set({ name: usersOnBill[j].firstName, paid: false })
    //             }
    //         }
    //         // await firestore().collection('Users').doc(uid).collection("transactions").doc(id)
    //         //     .collection("usersSentTo").doc(uid).set({ name: user.firstName })
    //         firestore().collection('Users').onSnapshot(querySnapshot => {
    //             querySnapshot.forEach(documentSnapshot => {
    //                 documentSnapshot.ref.update({
    //                     addedToBill: false
    //                 })
    //             });
    //         });
    //         navigation.navigate("Home")
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const onSplitBill = () => {
        for (let i = 0; i < usersOnBill.length; i++) {

        }
    }

    // useEffect(async () => {

    // });

    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"white"} />
                </Pressable>
                <Text style={styles.heading}>Split Bill</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.valueInput}>
                    <Text style={{ marginLeft: 20, }}>Enter Amount: $</Text>
                    <TextInput
                        placeholder="0"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.valueInput}>
                    <TextInput
                        placeholder="What is it for?"
                        value={item}
                        onChangeText={setItem}
                    />
                </View>
                <View style={styles.friendsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                        <AntDesign name={"search1"} size={20} style={{ marginLeft: 20, marginTop: 15, marginBottom: 15, }}></AntDesign>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={search}
                            onChangeText={(text) => searchFilter(text)}
                        />
                    </View>
                    <FlatList
                        data={users}
                        // keyExtractor={(item, index) => index.toString()}
                        // ItemSeperatorComponent={ItemSeperatorView}
                        renderItem={({ item }) => <SplitBillComponent friend={item} />}
                    />
                </View>
                <Pressable style={styles.submitButton} onPress={() => onCreateTransaction()}>
                    <Text style={{ color: 'white', margin: 10, fontSize: 20, }}>Submit</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default SplitBillScreen;