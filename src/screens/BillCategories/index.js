import React, { Component } from 'react';
import { View, Text, ImageBackground, Pressable, StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import PieChart from 'react-native-pie-chart';
import { BarChart } from 'react-native-chart-kit';


const BillCategoriesScreen = (props) => {
    const navigation = useNavigation();
    const widthAndHeight = 220;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];


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
                

                <BarChart
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May'],
                    datasets: [{ data: [10, 20, 50, 40, 20] }],
                }}
                width={Dimensions.get('window').width - 10}
                height={150}
                yAxisLabel={'$ - '}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#458336',
                    backgroundGradientTo: '#458336',
                    decimalPlaces: 2,
                    color: (opacity = 255) => '#ECEFF1',
                    style: {
                        borderRadius: 12, padding: 10
                    },
                }}
            />

            </View>




          

        </ImageBackground>
    );
};


const styleSheet = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});



export default BillCategoriesScreen;