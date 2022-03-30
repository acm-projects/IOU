import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends';
import { useNavigation } from '@react-navigation/native';

const FindFriendsScreen = (props) => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

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
                        value={inputText}
                        onChangeText={setInputText}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.recommended}>Recommended</Text>
                    <FlatList
                        data={friendsData}
                        renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default FindFriendsScreen;