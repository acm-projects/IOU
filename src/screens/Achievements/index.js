import React from 'react';
import { View, Text, ImageBackground, Pressable, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import achievementData from '../../../assets/data/achievements';
import AchievementsComponent from '../../components/Achievement';
import { useNavigation } from '@react-navigation/native';


const AchievementsScreen = (props) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.ImageBackground}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => navigation.navigate('Profile')}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"white"} />
                </Pressable>
                {/* <Text style={styles.heading}>Achievements</Text> */}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/IOULogo_white.png')} style={styles.logo} />
                <Text style={styles.points}>2,334 Points</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FlatList
                        data={achievementData}
                        renderItem={({ item }) => <AchievementsComponent achievement={item} />}
                        numColumns={1}
                    />
                </View>

            </View>
        </ImageBackground>
    );
};

export default AchievementsScreen;