import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet,ImageBackground, FlatList, Image, Modal, Pressable, ScrollView } from 'react-native';


export default function CheckProperty({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={{flex:1.5,}}>
            <ImageBackground style={styles.housePng} source={require('../../assets/house4.jpg')} >
            </ImageBackground>
            </View>
            <View style={styles.detail}>
                <ScrollView contentContainerStyle={{ height: 500 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, flexGrow: 1 }}>
                <View style={{flex:0,alignItems:"center"}}>
                <View style={styles.line}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                    <Text style={{color:"#484c53",fontSize:18,fontWeight:"bold"}}>Nacary Banglow</Text>
                    <Text style={{color:"#838d99"}}>4317 Masonic Drive Fort</Text>
                    </View>
                    <View style={styles.saleButton}>
                        <Text style={{textAlign:"center",paddingTop:4,color:"#193250",fontWeight:"bold"}}>For Sale</Text>
                    </View>
                </View>
                <Text style={styles.read}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <Text style={{color:"#193250"}}>Read more...</Text>
                </Text>
                <Text style={{color:"#37383d",fontSize:16,fontWeight:"bold"}}>Contact Person</Text>
                <View style={{flexDirection:"row",paddingVertical:20,justifyContent:"space-between"}}>
                <Image style={styles.logo} source={require('../../assets/group.png')} />
                <View style={{paddingHorizontal:14,paddingVertical:5,flex:1}}>
                    <Text style={{color:"#596677"}}>Marty Mccormick</Text>
                    <Text style={{color:"#a7aeb8",fontSize:13}}>Owner</Text>
                </View>
                <View style={{flex:0.3}}>
                <View style={styles.vector}>
                <Image style={styles.vectorLogo} source={require('../../assets/vector1.png')} />
                </View>
                </View>
                <View style={{flex:0}}>
                <View style={styles.vector}>
                <Image style={styles.vectorLogo} source={require('../../assets/call.png')} />
                </View>
                </View>
                </View>
                <Text style={{color:"#505357",paddingBottom:10}}>Specification</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}}>
                 <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Image style={styles.frameLogo} source={require('../../assets/vector.png')} />
                <Text style={{color:"#2d3238",fontSize:25,fontWeight:"bold"}}>03</Text>
                </View>
                <Text  style={{color:"#a3adb9",}}>Bathrooms</Text>
                </View>
                <View >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Image style={styles.frameLogo} source={require('../../assets/frame.png')} />
                    <Text  style={{color:"#2d3238",fontSize:25,fontWeight:"bold"}}>05</Text>   
                </View>
                <Text  style={{color:"#a3adb9"}}>Badrooms</Text>
                </View>
                <View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Image style={styles.frameLogo} source={require('../../assets/groupicon.png')} />
                    <Text  style={{color:"#2d3238",fontSize:24,fontWeight:"bold",paddingLeft:6}}>350</Text>
                    
                </View>
                <Text style={{color:"#a3adb9"}}>Squre feet</Text>
                </View>
                </View>
                <View style={{flexDirection:"row", paddingVertical:35,marginHorizontal:5}}>
                <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.getButton}
                    >
                        <Text style={{color:"#193250"}}>Get Direction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.inspectButton}
                    >
                        <Text style={{color:"#ffffff"}}>Inspect Now</Text>
                    </TouchableOpacity>
                </View>
                </View>
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        color: "#ffffff",
    },
    housePng:{
        width:"100%",
        height:"105%",
    },
    detail:{
        flex:3,
        backgroundColor:"#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal:16,
    },
    line:{
        backgroundColor:"#e1e1e1",
        height:3,width:40,
        marginVertical:10
    },
    saleButton:{
        backgroundColor:"#e7ebee",
        marginRight:16,
        height:30,
        width:84
    },
    read:{
        color:"#9c9fa4",
        paddingVertical:20,
        fontSize:13
    },
    getButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#ffffff",
        borderRadius: 35,
        width:155,
        height:45,
        borderWidth:1,
        borderColor:"#193250",
        marginRight:4
    },
    inspectButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#193250",
        width:155,
        height:45,
        borderRadius: 35,
        marginLeft:8
    },
    vector:{
        backgroundColor:"#ffffff",
        width:40,
        height:40,
        borderRadius:40,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 10,
    },
    vectorLogo:{
        width:20,
        height:20,
        marginLeft:10,marginTop:10
    },
    frameLogo:{
        width:24,
        height:22,
        resizeMode:"contain",
        marginTop:10
    }
})