import React, { Component } from 'react';
import { View, Text, ImageBackground, Pressable, StyleSheet, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';


//import * as data from './data.json'
/*
const word = data.name;
console.log(word);
//const customData = require('./data.json');
*/

const BillCategoriesScreen = (props) => {
    const navigation = useNavigation();
    const widthAndHeight = 180;
    const series = [100, 250, 200, 350];
    // Misc, Food, Rent, Fun
    const sliceColor = ['blue', 'red', 'orange', 'green'];
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
                <Text style={{ color: 'white', fontSize: 36, fontFamily: 'Helvetica bold' }}>Bill Categories</Text>
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

                <View style={styles.keyList}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.misc} />
                        <Text style={styles.keyStyle}>Misc</Text>
                    </View>
                   <View style={{ flexDirection: 'row' }}>
                        <View style={styles.food} />
                        <Text style={styles.keyStyle}>Food</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.rent} />
                        <Text style={styles.keyStyle}>Rent</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.fun} />
                        <Text style={styles.keyStyle}>Fun</Text>
                    </View>
                </View>
                <View>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Text style={styles.title}>Categories</Text>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                                doughnut={true}
                                coverRadius={0.45}
                                coverFill={'#FFF'}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>











        </ImageBackground>
    );
};

export default BillCategoriesScreen;