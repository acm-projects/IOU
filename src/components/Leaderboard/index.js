import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LeaderboardComponent = (props) => {
    const friend = props.friend;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{friend.place}. </Text>
            <Image source={{ uri: friend.image }} style={styles.image} />
            <Text style={styles.text}>{friend.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 100,
    },
    text: {
        margin: 10,
        fontSize: 20,
    }
});


export default LeaderboardComponent;