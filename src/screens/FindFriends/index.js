import React, { useState,useEffect } from "react";
import { View, Text, FlatList, ImageBackground, Image, Pressable, TextInput } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'

const FindFriendsScreen = (props) => {
    /*const [inputText, setInputText] = useState('');*/
    const[filterdData,setFilteredData]=useState([]);
    const[masterData,setMasterData]=useState([]);
    const[search,setsearch]=useState('');
    {/*fetchPosts algo*/}
    useEffect(()=>{
        fetchPosts();
        return ()=>{
    
        }
    },[])

    const fetchPosts= () =>{
        setMasterData(friendsData);
        setFilteredData(friendsData);
    }

    const searchFilter=(text)=>{
        if(text){
          const newData=masterData.filter((item)=>{
            const itemData=item.name ? item.name.toUpperCase() 
              : ''.toUpperCase();
            const textData=text.toUpperCase();
            return itemData.indexOf(textData)>-1;
    
          });
          setFilteredData(newData);
          setsearch(text);
        }else{
          setFilteredData(masterData);
          setsearch(text);
        }
    }

    
    const ItemSeperatorView=()=>{
        return(
          <View
            style={{height:0.5, width:'100%',backgroundColor:'#c8c8c8'}}
          />
        )
    }
      

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
                style={styles.backgroundImage} >
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => console.warn('home button pressed')}
                        style={styles.homeButton}>
                        <AntDesign name={"home"} size={30} style={{ color: 'white' }}></AntDesign>
                    </Pressable>
                    <Pressable onPress={() => console.warn('profile button pressed')}
                        style={styles.profileButton}>
                        <AntDesign name={"user"} size={30} style={{ color: 'white' }}></AntDesign>
                    </Pressable>
                </View>
                <View style={styles.search}>
                    <AntDesign name={"search1"} size={20} style={styles.searchIcon}></AntDesign>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={search}
                        onChangeText={(text)=>searchFilter(text)}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.recommended}>Recommended</Text>
                    <FlatList
                        data={filterdData}
                        keyExtractor={(item,index)=>index.toString()}
                        ItemSeperatorComponent={ItemSeperatorView}
                        renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default FindFriendsScreen;