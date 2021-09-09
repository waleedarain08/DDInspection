
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
    const [reason, setReason] = useState([{ title: "abc",title:"Esterior-Back" },{title: "abc",title:"Esterior-Back"},{title: "abc",title:"Esterior-Left" },{title: "abc",title:"Esterior-Front" },
    {title: "abc",title:"Interior-Main" },{title: "abc",title:"Esterior-Back" },{title: "abc",title:"Esterior-Back" },{title: "abc",title:"Esterior-Left" },{title: "abc",title:"Esterior-Left" },{title: "abc",title:"Esterior-Front" },{title: "abc",title:"Esterior-Front" },{title: "abc",title:"Bedroom #6" }]);
    return(
        <View style={styles.container}>
            <FlatList
            style={{paddingVertical:22}}
              keyExtractor={(item, index) => index}
              data={reason}
              renderItem={({ item }) => {
                return (
                    <View style={{paddingHorizontal:25}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:12}}>
                        <View style={{flex:2.5}}>
                        <View style={styles.buttonEster}>
                            <Text style={{color:"#ffffff",fontSize:10,textAlign:"center",paddingTop:3,fontSize:9}}>{item.title}</Text>
                        </View>
                        <Text style={{color:"#2b3036",fontWeight:"bold",lineHeight:20}}>Deck/Porch</Text>
                        <Text style={{color:"#abaeb3",fontSize:10}}>Repair Dry Rot</Text>
                        </View>
                        <Text style={{flex:1, color:"#4a4e59",fontWeight:"bold",paddingRight:8,fontSize:12}}>$444.95</Text>
                        <View style={{flex:0}}>
                        <View style={styles.editButtom}>
                        <Image  style={styles.editIcon} source={require("../../assets/edit.png")} />
                            <Text style={{color:"#33ae46",textAlign:"center",paddingTop:3,fontSize:12}}>Edit</Text>
                        </View>
                        </View>
                    </View>
                    </View>
                )
              }}>
            </FlatList>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#193250",paddingVertical:20,paddingHorizontal:20}}>
                <Text style={{color:"#ffffff",fontWeight:"bold"}}>Total</Text>
                <View style={{flexDirection:"row"}}>
                <View style={styles.line}></View>
                <Text style={{color:"#ffffff",fontWeight:"bold",}}>$2594.95</Text>
                </View>
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
        width:70,
        height:20
    },
    editButtom:{
        backgroundColor:"#ebf7ed",
        width:64,
        height:22,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    line2:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    },
    editIcon:{
        width:10,
        height:10,
        marginTop:5
    },
    line:{
        width:1,
        height:24,
        backgroundColor:"#243e59",
        marginBottom:10,
        marginRight:8
    }
})