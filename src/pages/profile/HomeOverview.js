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
            <Text style={{color:"#2c3137",fontFamily: "Regular",paddingTop:12,paddingHorizontal:20,}}>Rooms are added as inspected.</Text>
            <Text style={{color:"#4d525c",fontSize:20,fontFamily: "OpenSans-Bold",paddingVertical:10,paddingHorizontal:20,}}>Finished Rooms</Text>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              renderItem={({ item }) => {
                return (
                    <View style={{ paddingHorizontal:20,borderBottomWidth:1,borderColor:"#Eff0f2"}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:15}}>
                        <View >
                        <Text style={{color:"#2c3137",fontFamily: "Regular",}}>{item.title}</Text>
                        <Text style={{color:"#9ba0a6",fontSize:10,fontFamily: "Regular",}}>Interior-Main Level</Text>
                        </View>
                        {/* <View style={styles.line}></View> */}
                        <Text style={{color:"#4e4f61",fontWeight:"bold"}}>100 sq</Text>
                        </View>
                    </View>
                   
                )
              }}>
            </FlatList>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#193250",paddingVertical:10,paddingHorizontal:20}}> 
                <View style={{flex:0.6}}>
                <View style={{paddingTop:30}}></View>
                <Text style={styles.roomText1}>Inspection Results:</Text>
                <Text style={styles.roomText1}>Listed As</Text>
                </View>
                <View>
                <Text style={styles.roomText1}>Bed</Text>
                <Text style={styles.roomText}>5</Text>
                <Text style={styles.roomText}>5</Text>
                </View>
                <View>
                <Text style={styles.roomText1}>Baths</Text>
                <Text style={styles.roomText}>3 / 1</Text>
                <Text style={styles.roomText}>3 / 2</Text>
                </View>
                <View>
                <Text style={styles.roomText1}>Rooms</Text>
                <Text style={styles.roomText}>28</Text>
                </View>
                <View>
                <Text style={styles.roomText1}>Sq.Ft</Text>
                <Text style={styles.roomText}>1,310</Text>
                <Text style={styles.roomText}>1,310</Text>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
      
    },
    line:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    },
    line2:{
        width:3,
        height:30,
        backgroundColor:"#dddddd",
        marginLeft:"30%"
    },
    roomText:{
        color:"#d4d4d4",
        paddingVertical:8,
        textAlign:"right",
        fontSize:12,
        fontFamily: "Regular",
    },
    roomText1:{
        color:"#d4d4d4",
        paddingVertical:8,
        fontSize:12,
        fontWeight:"600",
        fontFamily: "Regular",
    }
})