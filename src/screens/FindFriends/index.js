import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'

const FindFriendsScreen = (props) => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => console.warn('home button pressed')}
                        style={styles.homeButton}>
                        <AntDesign name={"home"} size={30} style={{ color: 'white' }}></AntDesign>
                    </Pressable>
                    <Pressable onPress={() => console.warn('profile button pressed')}
                        style={styles.profileButton}>
                        <AntDesign name={"user"} size={30} style={{ color: 'white' }}></AntDesign>
                    </Pressable>
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