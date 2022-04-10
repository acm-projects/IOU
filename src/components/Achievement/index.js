import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const AchievementsComponent = (props) => {
    const achievement = props.achievement;
    return (
        <View style={styles.container}>
            <Image source={achievement.image} style={styles.image} />
            <Text style={styles.text}>{achievement.achievementName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '95%',
        backgroundColor: '#f6cfd2',
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 10,
    },
    text: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        width: '70%'
    },
    imageContainer: {
        //justifyContent: 'center'
    },
    image: {
        height: 50,
        width: 50,
    }
});

export default AchievementsComponent;
