
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
                            <Text style={{color:"#ffffff",fontSize:10,textAlign:"center",paddingTop:3,fontSize:9,fontFamily: "OpenSans-Regular"}}>{item.title}</Text>
                        </View>
                        <Text style={{color:"#2b3036",fontFamily: "OpenSans-Bold",lineHeight:20,fontFamily: "OpenSans-Regular"}}>Deck/Porch</Text>
                        <Text style={{color:"#abaeb3",fontSize:10,fontFamily: "OpenSans-Regular"}}>Repair Dry Rot</Text>
                        </View>
                        <Text style={{flex:1, color:"#4a4e59",fontFamily: "OpenSans-Bold",paddingRight:8,fontSize:12,fontFamily: "OpenSans-Regular"}}>$444.95</Text>
                        <View style={{flex:0}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ExteriorBack')} style={styles.editButtom}>
                        <Image  style={styles.editIcon} source={require("../../assets/edit.png")} />
                            <Text style={{color:"#33ae46",textAlign:"center",paddingTop:2,fontSize:12,fontFamily: "OpenSans-Regular"}}>Edit</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                )
              }}>
            </FlatList>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#193250",paddingVertical:20,paddingHorizontal:20,alignItems:"center"}}>
                <Text style={{color:"#ffffff",fontWeight:"bold",fontFamily: "OpenSans-Bold",}}>Total</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <View style={styles.line}></View>
                <Text style={{color:"#ffffff",fontWeight:"bold",fontFamily: "OpenSans-Bold",}}>$2594.95</Text>
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
        height:20,
        borderRadius:3
    },
    editButtom:{
        backgroundColor:"#ebf7ed",
        width:64,
        height:24,
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
        width:12,
        height:12,
        marginTop:5
    },
    line:{
        width:1,
        height:24,
        backgroundColor:"#243e59",
        marginBottom:2,
        marginRight:8
    }
})