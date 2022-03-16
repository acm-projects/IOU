import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
    Pressable
} from "react-native";

import styles from './styles';

const MyProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => console.warn('home button clicked')}
                        style={styles.homeButton}>
                        <AntDesign name={"home"} size={30} color='white' />
                    </Pressable>
                    <Pressable onPress={() => console.warn('setting button clicked')}
                        style={styles.settingButton}>
                        <AntDesign name={"setting"} size={30} color='white' />
                    </Pressable>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.name}>John Doe</Text>
                    <View style={styles.friends}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>300</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>Friends</Text>
                    </View>
                    <View style={styles.requests}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>20</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>Requests</Text>
                    </View>
                    <Text style={styles.payments}>Payments to make</Text>
                    <Text style={styles.paymentPrice}>$12.34</Text>
                    <Text style={styles.owed}>Owed to me</Text>
                    <Text style={styles.owedPrice}>$56.78</Text>
                    <Pressable
                        style={styles.achievementsButton}
                        onPress={() => console.warn('Achievements button clicked')}
                    >
                        <Text style={styles.achievements}>Achievements</Text>
                    </Pressable>
                </View>
                <Image source={require('../../../assets/images/sampleProfilePic.jpeg')}
                    style={styles.profilePicture} />
            </ImageBackground>
        </View >
    );
};

export default MyProfileScreen;