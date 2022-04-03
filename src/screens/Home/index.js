import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Router from '../../navigation/router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.navigate('Profile')}
                    style={styles.profileButton}>
                    <AntDesign name={"user"} size={30} style={{ color: 'white' }}></AntDesign>
                </Pressable>
            </View>
            <View style={styles.welcome}>
                <Text style={{ color: 'white', fontSize: 36, fontFamily: 'Helvetica bold' }}>Welcome back</Text>
                <Text style={{ color: 'white', fontSize: 24, fontFamily: 'Helvetica bold' }}>name</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', marginTop: 60, marginBottom: 30 }}>
                    <Pressable style={styles.amount}>
                        <Text style={{ color: 'green', fontSize: 36, margin: 10, }}>+$12.34</Text>
                    </Pressable>
                    <Pressable style={styles.amount}>
                        <Text style={{ color: 'red', fontSize: 36, margin: 10, }}>-$56.78</Text>
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
                <Pressable style={styles.buttons}>
                    <Text style={{ color: 'white', fontSize: 30, margin: 10 }}>Leaderboard</Text>
                </Pressable>
            </View>

        </ImageBackground>
    );
};

export default HomeScreen;