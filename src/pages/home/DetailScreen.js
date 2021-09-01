import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions';



function DetailScreen({ navigation }) {

    const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "def", image: require('../../assets/02-tile.png') }, { title: "ghi", image: require('../../assets/03-tile.png') },{ title: "ghi", image: require('../../assets/01-tile.png') },{ title: "ghi", image: require('../../assets/02-tile.png') },{ title: "ghi", image: require('../../assets/03-tile.png') }]);


    return (
        <View style={styles.container}>

        </View>
    );
}

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

export default connect(mapStateToProps)(DetailScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    box1: {
        flex: 1,
        // backgroundColor: "green",
    },
    back: {
        height: 17,
        width: 20,
    },
    about: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        paddingHorizontal: 14,
    },
    motivation: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    dots: {
        width: 4, height: 16,
    },
    box2: {
        flex: 3.5,
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap"
    },
    box3: {
        flex: 1.5,
        paddingTop: 10,
    },
    motivation2: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10,
    },
    downsec: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    rating: {
        flexDirection: "row",
        paddingHorizontal: 3,
    },
    rats: {
        color: "#ffffff",
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 12,
    },
    hdsc: {
        color: "#ffffff",
        fontSize: 10,
        borderWidth:1,
        borderColor:"#ffffff"
    },
    list: {
        width: 18,
        height: 18,
        marginVertical: 10,
    },
    star: {
        width: 12,
        height: 12,
        marginTop: 2,
    },
    download: {
        width: 20,
        height: 20,
        marginVertical: 10,
    },
    box4: {
        flex: 2.5,
    },
    para: {
        color: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    box5: {
        flex: 1.5,
        paddingTop: 20,
    },
    btn: {
        color: "#ffffff",
    },
    box6: {
        flex: 3,
        paddingTop:30
    },
    video: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        paddingVertical:10
    },
    tile: {
        width: 85,
        height: 110,
        resizeMode: "cover",
        marginVertical: 6,
        marginHorizontal: 4,
    },
    related: {
        color: "#ffffff",
    },
    viewall: {
        color: "#1971b8",
    }
})

