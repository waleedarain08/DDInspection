
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import  { Component, useState,useEffect } from 'react';



export default function Download({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('List')
        }, 3000);
      }, []);
      
    return(
        <View style={styles.mainContainer}>
            <Animatable.View animation="bounceIn" style={{flex:1,justifyContent:"flex-end", alignItems:"center"}}>           
                <Image source={require('../../assets/group919.png')}
                style={{height:"42%", width:"42%", resizeMode:"contain" }}/>
            </Animatable.View>
            <View style={{flex:1,justifyContent:"flex-start", alignItems:"center",paddingTop:"8%"}}>
                <Text style={{color:"#d1d6dc", fontFamily:"OpenSans-SemiBold", fontSize:16,}}>Data Downloaded</Text>
                <Text style={{color:"#ffffff", fontFamily:"SpectralSC-Bold", fontSize:30,}}>SUCCESSFULLY!</Text>
            </View>
        </View>

    );
}



const styles = StyleSheet.create ({
    mainContainer:{
        flex:1,
        backgroundColor:"#193250",
    }
})