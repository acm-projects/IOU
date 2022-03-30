import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import { useNavigation } from '@react-navigation/native';

const SettingsScreen = (props) => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate("Profile")}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"#93A8E1"} />
                </Pressable>
                <Text style={styles.settings}>Settings</Text>
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
            <View style={styles.settingContainer}>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('account setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"user"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Account</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('notification setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"bell"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Notifications</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('payment setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"credit-card"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Payment Methods</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('privacy setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"lock"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Privacy {'&'} Security</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('help setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"headphones"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Help and Support</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => console.warn('about setting clicked')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"alert-circle"} size={25} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>About</Text>
                        <Feather name={"chevron-right"} size={30} style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 30,
                        }}></Feather>
                    </Pressable>
                </View>
                <View style={styles.setting}>
                    <Pressable onPress={() => navigation.navigate("Sign Up")}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name={"log-out"} size={25} color={'red'} style={{ marginLeft: 30 }}></Feather>
                        <Text style={{ marginLeft: 10, fontSize: 16, color: 'red' }}>Log Out</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SettingsScreen;