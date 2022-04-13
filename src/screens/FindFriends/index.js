import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput, ActivityIndicator } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends';
import { useNavigation } from '@react-navigation/native';

import auth, { firebase } from '@react-native-firebase/auth';
import firestore, { documentSnapshot } from "@react-native-firebase/firestore";

const FindFriendsScreen = (props) => {
    const navigation = useNavigation();
    const [filterdData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchPosts();
        return () => {

        }
    }, [])

    const fetchPosts = () => {
        setMasterData(friendsData);
        setFilteredData(friendsData);
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase()
                    : ''.toUpperCase();
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

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                <View style={{ flexDirection: 'row', }}>
                    <Pressable onPress={() => navigation.navigate('Home')}
                        style={styles.backButton}>
                        <AntDesign name={"arrowleft"} size={30} color={"white"} />
                    </Pressable>
                    <Text style={styles.heading}>Find Friends</Text>
                </View>
                <View style={styles.search}>
                    <AntDesign name={"search1"} size={20} style={styles.searchIcon}></AntDesign>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.recommended}>Recommended</Text>
                    <FlatList
                        // data={filterdData}
                        // keyExtractor={(item, index) => index.toString()}
                        // ItemSeperatorComponent={ItemSeperatorView}
                        // renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                        data={users}
                        renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default FindFriendsScreen;