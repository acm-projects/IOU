import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable, TextInput, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'

const SplitBillScreen = (props) => {
    const [amount, setAmount] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => console.warn('back button clicked')}
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
                <View style={styles.friendsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                        <AntDesign name={"search1"} size={20} style={{ marginLeft: 20, marginTop: 15, marginBottom: 15, }}></AntDesign>
                        <TextInput
                            placeholder="Search Friends"
                            value={searchInput}
                            onChangeText={setSearchInput}
                        />
                    </View>
                    <FlatList
                        data={friendsData}
                        renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                    />
                </View>
                <Pressable style={styles.submitButton}>
                    <Text style={{ color: 'white', margin: 10, fontSize: 20, }}>Submit</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default SplitBillScreen;