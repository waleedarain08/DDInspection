import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export function List({ navigation }) {

  return (
    <View style={styles.container}>
                <View style={styles.list}>
                <Text style={styles.mylist}>My List</Text>
                </View>
                <View style={styles.searchopt}>
                <Image style={styles.search} source={require('../../assets/search.png')} />
                <Input style={styles.vlogers}  placeholder="Vlogers" />
                </View>
                <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:20, }}>
                    <View style={styles.movie}>
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                    </View>
                    <View style={styles.movie}>
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    </View>
                    <View style={styles.movie}>
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                    </View>
                    <View style={styles.movie}>
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    </View>
                    <View style={styles.movie}>
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                    </View>
                </ScrollView>
                <View style={{height:70,}}></View>
            </View>
  );
}

export function TabBDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab B Details</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    list: {
        height: 55
    },
    mylist:{
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 26,
        paddingLeft: 6,
    },
    searchopt: {
        height: 68
    },
    vlogers: {
        paddingTop: 12,
        paddingLeft: 15,
        paddingBottom:12,
        marginTop:12,
        borderWidth:1,
        borderColor:"#495058",
        fontSize:12,
        color:"white"
    },
    search:{
        width:18,
        height:18,
        position:"absolute",
        top:25,
        left:"85%",
    },
    movie: {
        flexDirection:"row",
    },
    moviepng:{
        flex:1,
        height:130,
        resizeMode: "stretch",
        marginHorizontal:6,
        marginVertical:8,
    }
})
