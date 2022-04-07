import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const AchievementsComponent = (props) => {
    const achievement = props.achievement;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{achievement.achievementName}</Text>
            <Image source={{ uri: achievement.image }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 175,
        width: 175,
        backgroundColor: '#f6cfd2',
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
    },
    text: {
        color: 'grey',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    image: {
        height: 50,
        width: 50,
    }
});

export default AchievementsComponent;
