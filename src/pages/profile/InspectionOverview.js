
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

export default function InspectionOverview({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",paddingVertical:20}}>
                <TouchableOpacity 
              onPress={() => navigation.goBack()}
                activeOpacity={0.9}>
            <Image  style={styles.arrowlogo} source={require("../../assets/grouparrow.png")} />
            </TouchableOpacity>
            <Text style={styles.overview}>INSPECTION OVERVIEW</Text>
            </View>
            <ScrollView contentContainerStyle={{height:800}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:6,paddingBottom:"15%",paddingVertical:10}}>
                <View>
                    <Text style={{color:"#4f5359",fontWeight:"bold",textAlign:"center"}}>Inspected</Text>
                    <Text style={{color:"#c1c3c7",textAlign:"center"}}>Items</Text>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#fb739b",textAlign:"center"}}>04</Text>
                </View>
                <View>
                <Text  style={{color:"#4f5359",fontWeight:"bold",textAlign:"center"}}>Remaining</Text>
                    <Text style={{color:"#c1c3c7",textAlign:"center"}}>Items</Text>
                    <Text style={{fontSize:24,fontWeight:"bold",color:"#5bd2f3",textAlign:"center"}}>88</Text>
                </View>
                <View>
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={()=> navigation.navigate("HomeOverview")}
                    >
                <Text style={{color:"#4f5359",fontWeight:"bold",textAlign:"center"}}>Home</Text>
                    <Text style={{color:"#c1c3c7",textAlign:"center"}}>Overview</Text>
                    </TouchableOpacity>
                    <Image style={styles.homelogo} source={require("../../assets/home.png")} />
                </View>
                <View>
                    <TouchableOpacity 
                        activeOpacity={0.9}
                        onPress={()=> navigation.navigate("EstimateScope")}
                    >
                <Text >Estimate</Text>
                    <Text style={{color:"#c1c3c7",textAlign:"center"}}>Scope</Text>
                    </TouchableOpacity>
                    <Image style={styles.homelogo} source={require("../../assets/chart.png")} />
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                <Text style={styles.location}>Location</Text>
                <Text style={styles.item}>Items</Text>
            </View>
            <View>
                <View style={styles.front}>
                <Text style={{flex:2.5,color:"#84868a"}}>Exterior Front</Text>
                <Text style={{flex:1,color:"#86888c"}}>2</Text>
                <Image style={styles.download} source={require('../../assets/downloadded.png')} />
                </View>
                <View style={styles.interior}>
                    <Text style={{color:"#818387"}}>Interior Main</Text>
                </View>
                <View style={styles.interior}>
                    <Text style={{color:"#818387"}}>Interior 2nd Ievel</Text>
                </View>
                <View style={styles.interior}>
                    <Text style={{color:"#818387"}}>Interior Basement</Text>
                </View>
                <View style={styles.interior}>
                    <Text style={{color:"#818387"}}>Interior Crawl Space</Text>
                </View>
                <View style={styles.interior}>
                    <Text style={{color:"#818387"}}>Interior Attic</Text>
                </View>
            </View>
            <View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:"20%"}}>
                <TouchableOpacity 
                activeOpacity={0.9}
                style={styles.canelButton}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                activeOpacity={0.9}
                style={styles.completeButton}
                >
                    <Text>Complete</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        paddingHorizontal:20
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
    homelogo:{
        width:22,
        height:22,
        marginTop:8,
        marginLeft:16
    },
    location:{
        color:"#32373d",fontWeight:"bold",
        flex:1.5
    },
    item:{
        color:"#32373d",fontWeight:"bold",
        flex:1
    },
    front:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#efefef",
        paddingVertical:20,
        paddingHorizontal:14,
        marginVertical:6
    },
    download:{
        width:22,
        height:22,
        flex:0
    },
    interior:{
        backgroundColor:"#fefefe",
        paddingVertical:18,
        paddingHorizontal:14,
        marginVertical:6,
        borderWidth:2,
        borderColor:"#c8cccf"
    },
    canelButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#ffffff",
        borderRadius: 35,
        width:165,
        height:55,
        borderWidth:1,
        borderColor:"#7c94b0",
    },
    completeButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#909090",
        width:165,
        height:55,
        borderRadius: 35,
    }
})