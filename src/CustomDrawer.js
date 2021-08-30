import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    TouchableOpacity
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Switch } from 'react-native-elements';
import {userLogout}  from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function CustomDrawer({navigation,userLogout}) {

    logout = () => {
       // navigation.toggleDrawer();
        //navigation.navigate("Login");
        navigation.closeDrawer();
        userLogout(null);
    }

    const BASE_PATH =
       'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex:1,backgroundColor:"#193250",justifyContent:"center",alignItems:"center"}}>
            <Image style={styles.logo} source={require('./assets/sylvanRoad.png')} />
            </View>
            <View style={styles.manu}>
                <View style={{flex:1,}}>
                <Text style={styles.home}>Home</Text>
                <View style={styles.borderline}></View>
                </View>
                <View style={{flex:1,}}>
                <Text style={styles.home}>Setting</Text>
                <View style={styles.borderline}></View>
                </View>
                <View style={{flex:1,}}>
                <Text style={styles.home}>Account</Text>
                <View style={styles.borderline}></View>
                </View>
                <View style={{flex:1,}}>
                <Text style={styles.home}>About</Text>
                <View style={styles.borderline}></View>
                </View>
                <View style={{flex:1,}}>
                <Text onPress={()=>logout()} style={styles.home}>Logout</Text>
                </View>
                <View style={{flex:3.5}}></View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    manu:{
        flex:3,
        backgroundColor:"#ffffff",
        paddingVertical:30,
        paddingHorizontal:20
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode:"contain"
      },
    home:{
        color:"#193250",
        fontSize:15,
        fontWeight:"500"
    },
    borderline:{
        backgroundColor:"#e5e5e5",
        height:1,
        marginVertical:18
    },
    groupPng:{
        width:20
    },
});

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogout }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);