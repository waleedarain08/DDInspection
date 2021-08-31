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

export default function HomeOverview({ navigation }) {
    const [reason, setReason] = useState([{ title: "abc",title:"Entryway" },{title: "abc",title:"Great Room"},{title: "abc",title:"Bedroom #1" },{title: "abc",title:"Bedroom #1" },
    {title: "abc",title:"Bedroom #2" },{title: "abc",title:"Bedroom #2" },{title: "abc",title:"Hallway" },{title: "abc",title:"Bedroom #3" },{title: "abc",title:"Bedroom #4" },{title: "abc",title:"Bedroom #4" },{title: "abc",title:"Bedroom #5" },{title: "abc",title:"Bedroom #6" }]);
    return(
        <View style={styles.container}>
               <View style={{flexDirection:"row",paddingVertical:20,  paddingHorizontal:20}}>
                <TouchableOpacity 
              onPress={() => navigation.goBack()}
                activeOpacity={0.9}>
            <Image  style={styles.arrowlogo} source={require("../../assets/grouparrow.png")} />
            </TouchableOpacity>
            <Text style={styles.overview}>INSPECTION OVERVIEW</Text>
            </View>
            <Text style={{color:"#4d525d",fontSize:22,fontWeight:"bold",paddingVertical:20,paddingHorizontal:20}}>Listing all rooms for the property. Rooms are added tu this as they are inspected.</Text>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              renderItem={({ item }) => {
                return (
                    <View style={{ paddingHorizontal:20}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:15}}>
                        <View >
                        <Text >{item.title}</Text>
                        <Text>Interior-Main Level</Text>
                        </View>
                        <View style={styles.line}></View>
                        <Text>100 sq</Text>
                        </View>
                        <View style={styles.borderline}></View>
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
        backgroundColor:"#ffffff",
      
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
    line:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    },
    borderline:{
        flex:1,
        backgroundColor:"#dddddd",
        marginLeft:"30%",
    },
    line2:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    }
})