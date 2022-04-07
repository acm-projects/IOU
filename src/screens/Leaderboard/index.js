import React from 'react';
import { View, Text, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import friendsData from '../../../assets/data/friends';
import LeaderboardComponent from '../../components/Leaderboard';
import { useNavigation } from '@react-navigation/native';

const LeaderboardScreen = (props) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.ImageBackground}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"white"} />
                </Pressable>
                <Text style={styles.heading}>Leaderboard</Text>
            </View>

            <View style={styles.middleContainer}>
                <View style={styles.second}>
                    <Image
                        source={{ uri: friendsData[1].image }}
                        styles={styles.image}
                    />
                    <View style={styles.secondBar}>
                        <Text style={{ fontSize: 16, marginTop: 10, padding: 5, }}>{friendsData[1].name}</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>200</Text>
                    </View>
                </View>
                <View style={styles.first}>
                    <Image
                        source={{ uri: friendsData[0].image }}
                        styles={styles.image}
                    />
                    <View style={styles.firstBar}>
                        <Text style={{ fontSize: 16, marginTop: 10, padding: 5, }}>{friendsData[0].name}</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>300</Text>
                    </View>
                </View>
                <View style={styles.third}>
                    <Image
                        source={{ uri: friendsData[3].image }}
                        styles={styles.image}
                    />
                    <View style={styles.thirdBar}>
                        <Text style={{ fontSize: 16, marginTop: 10, padding: 5 }}>{friendsData[3].name}</Text>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>100</Text>
                    </View>
                </View>

            </View>

            <View style={styles.bottomContainer}>
                <View style={{ height: 15, }}></View>
                <FlatList
                    data={friendsData}
                    renderItem={({ item }) => <LeaderboardComponent friend={item} />}
                />
            </View>
        </ImageBackground >
    );
};

export default LeaderboardScreen;
