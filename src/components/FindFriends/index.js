import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles"

const FindFriendsComponent = (props) => {
    const friend = props.friend;
    const [added, setAdded] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: friend.image }}
            //source={require('../../../assets/images/sampleProfilePic.jpeg')}
            />
            <Text style={styles.name}>{friend.name}</Text>
            <Pressable
                onPress={() => {
                    setAdded(!added);
                    // friend.friend = !friend.friend;
                }}
                style={({ pressed }) => [
                    { borderWidth: added ? 2 : 0 },
                    // { borderWidth: friend.friend ? 2 : 0 },
                    { backgroundColor: added ? '#FFFFFF' : '#93A8E1' },
                    // { backgroundColor: friend.friend ? '#FFFFFF' : '#93A8E1' },
                    { borderColor: added ? '#93A8E1' : '#FFFFFF' },
                    // { borderColor: friend.friend ? '#93A8E1' : '#FFFFFF' },
                    styles.button]}>
                <Text style={styles.buttonText}>
                    {added ? 'Added' : 'Add'}
                    {/* {friend.friend ? "Added" : "Add"} */}
                </Text>
            </Pressable>
        </View>
    );
};

export default FindFriendsComponent;