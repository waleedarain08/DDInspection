
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Input, Button, Card, SearchBar} from 'react-native-elements';

export default function EstimateScope({ navigation }) {
    const [reason, setReason] = useState([{ title: "abc",title:"Esterior-Back" },{title: "abc",title:"Esterior-Back"},{title: "abc",title:"Esterior-Left" },{title: "abc",title:"Bedroom #1" },
    {title: "abc",title:"Bedroom #2" },{title: "abc",title:"Bedroom #2" },{title: "abc",title:"Hallway" },{title: "abc",title:"Bedroom #3" },{title: "abc",title:"Bedroom #4" },{title: "abc",title:"Bedroom #4" },{title: "abc",title:"Bedroom #5" },{title: "abc",title:"Bedroom #6" }]);
    return(
        <View style={styles.container}>
                    <View style={{flexDirection:"row",paddingVertical:20,paddingHorizontal:20}}>
                <TouchableOpacity 
              onPress={() => navigation.goBack()}
                activeOpacity={0.9}>
            <Image  style={styles.arrowlogo} source={require("../../assets/grouparrow.png")} />
            </TouchableOpacity>
            <Text style={styles.overview}>Estimate Scope</Text>
            </View>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              renderItem={({ item }) => {
                return (
                    <View style={{paddingHorizontal:25}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:12}}>
                        <View style={{flex:2.5}}>
                        <View style={styles.buttonEster}>
                            <Text style={{color:"#ffffff",fontSize:10,textAlign:"center",paddingTop:3}}>{item.title}</Text>
                        </View>
                        <Text style={{color:"#2b3036",fontWeight:"bold"}}>Deck/Porch</Text>
                        <Text style={{color:"#abaeb3",fontSize:10}}>Repair Dry Rot</Text>
                        </View>
                        <Text style={{flex:1, color:"#4a4e59",fontWeight:"bold",paddingRight:8}}>$444.95</Text>
                        <View style={{flex:0}}>
                        <View style={styles.editButtom}>
                            <Text style={{color:"#33ae46",textAlign:"center",paddingTop:3}}>Edit</Text>
                        </View>
                        </View>
                    </View>
                    </View>
                )
              }}>
            </FlatList>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#193250",paddingVertical:20,paddingHorizontal:10}}>
                <Text>Listed as 3 Bedroom, 2 Full Baths. 1 Half Bath</Text>
                <View style={styles.line2}></View>
                <Text>1,310</Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    arrowlogo:{
        width:34,
        height:34,
    },
    overview:{
        paddingLeft:12,
        paddingTop:6,
        color:"#5a6577",
    },
    buttonEster:{
        backgroundColor:"#18314f",
        width:85,
        height:24
    },
    editButtom:{
        backgroundColor:"#ebf7ed",
        width:70,
        height:26
    },
    line2:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    }
})