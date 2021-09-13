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
import { ButtonView } from './components';

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

    // const BASE_PATH =
    //    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    // const proileImage = 'react_logo.png';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex:1.3,backgroundColor:"#193250",justifyContent:"center",alignItems:"center"}}>
            <Image style={styles.logo} source={require('./assets/sylvanRoad.png')} />
            </View>
            <View style={styles.manu}>
                <ButtonView activeOpacity={0.8} style={{flex:0.5,flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.homeicon} source={require('./assets/homeIcon2.png')} style={{height:18, width:18, resizeMode:"contain"}} />
                <Text style={styles.home}>Home</Text>
                </ButtonView>
                <View style={styles.borderline}></View>
                <ButtonView activeOpacity={0.8} style={{flex:0.5,flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.homeicon} source={require('./assets/group669.png')} style={{height:18, width:18, resizeMode:"contain"}}/>
                <Text style={styles.home}>Setting</Text>
                </ButtonView>
                <View style={styles.borderline}></View>
                <ButtonView activeOpacity={0.8} style={{flex:0.5,flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.homeicon} source={require('./assets/profile.png')} style={{height:18, width:18, resizeMode:"contain"}}/>
                <Text onPress={()=> navigation.navigate("Account")} style={styles.home}>Account</Text>
                </ButtonView>
                <View style={styles.borderline}></View>
                <ButtonView activeOpacity={0.8} style={{flex:0.5,flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.homeicon} source={require('./assets/info.png')} style={{height:18, width:18, resizeMode:"contain"}}/>
                <Text style={styles.home}>About</Text>
                </ButtonView>
                <View style={styles.borderline}></View>
                <ButtonView activeOpacity={0.8} style={{flex:0.5,flexDirection:"row",alignItems:"center"}}>
                <Image style={styles.homeicon} source={require('./assets/login.png')} style={{height:18, width:18, resizeMode:"contain"}}/>
                <Text onPress={()=>logout()} style={styles.home}>Logout</Text>
                </ButtonView>
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
        color:"#666666",
        fontSize:15,
        fontWeight:"500",
        paddingLeft:20,
        fontFamily:"OpenSans-Bold"

    },
    borderline:{
        backgroundColor:"#e5e5e5",
        height:1,
        marginVertical:18
    },
    groupPng:{
        width:20
    },
    homeicon:{
        width:18,
        height:20,
        tintColor:"#666666"
    }
});

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogout }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);