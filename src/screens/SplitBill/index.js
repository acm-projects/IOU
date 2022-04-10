import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, Pressable, TextInput, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FindFriendsComponent from "../../components/FindFriends";
import friendsData from '../../../assets/data/friends'
import { useNavigation } from '@react-navigation/native';

const SplitBillScreen = (props) => {
    const [amount, setAmount] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const navigation = useNavigation();
    const[filterdData,setFilteredData]=useState([]);
    const[masterData,setMasterData]=useState([]);
    const[search,setsearch]=useState('');

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
        <ImageBackground source={require('../../../assets/images/backgroundImage.jpeg')}
            style={styles.backgroundImage}>
            <View style={{ flexDirection: 'row', }}>
                <Pressable onPress={() => navigation.navigate('Home')}
                    style={styles.backButton}>
                    <AntDesign name={"arrowleft"} size={30} color={"white"} />
                </Pressable>
                <Text style={styles.heading}>Split Bill</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.valueInput}>
                    <Text style={{ marginLeft: 20, }}>Enter Amount: $</Text>
                    <TextInput
                        placeholder="0"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.friendsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#d3d3d3', borderBottomWidth: 1 }}>
                        <AntDesign name={"search1"} size={20} style={{ marginLeft: 20, marginTop: 15, marginBottom: 15, }}></AntDesign>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={search}
                            onChangeText={(text)=>searchFilter(text)}
                        />
                    </View>
                    <FlatList
                        data={filterdData}
                        keyExtractor={(item,index)=>index.toString()}
                        ItemSeperatorComponent={ItemSeperatorView}
                        renderItem={({ item }) => <FindFriendsComponent friend={item} />}
                    />
                </View>
                <Pressable style={styles.submitButton}>
                    <Text style={{ color: 'white', margin: 10, fontSize: 20, }}>Submit</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default SplitBillScreen;