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


function CustomDrawer({navigation,userLogout,route}) {

    logout = () => {
        navigation.closeDrawer();
        userLogout(null);
    }


    console.log(route)
    console.log(navigation)

    return (
        <View style={{ flex: 1, backgroundColor:"#fff"}}>
            <View style={{flex:1.3,backgroundColor:"#193250",justifyContent:"center",alignItems:"center", paddingVertical:15}}>
            <Image style={styles.logo} source={require('./assets/sylvanRoad.png')} />
            </View>
            <View style={styles.manu}>

                <ButtonView activeOpacity={0.8} style={styles.ButtonDropDown} onPress={() => navigation.navigate("List")}>
                <Image style={route === "List" ? styles.homeIcon : styles.homeIconDisable} source={require('./assets/homeIcon2.png')}/>
                <Text style={styles.homeText}>Home</Text>
                </ButtonView>
                <View style={styles.borderLine}></View>


                <ButtonView style={styles.ButtonDropDown}  onPress={() => navigation.navigate("List")} activeOpacity={0.8} isRound={0}>
                    <Image style={route === "List" ? styles.homeIcon : styles.homeIconDisable} source={require('./assets/group669.png')}/>
                    <Text style={styles.homeText}>Setting</Text>
                    <View style={{ flex:1,alignItems:"flex-end", marginRight:5}}>
                        <Image
                        style={styles.dropdownIconEnable}
                        source={require('./assets/down-arrow.png')}/>                            
                    </View>
                </ButtonView>
                <View style={styles.borderLine}></View>
                    
                    <ButtonView style={styles.ButtonDropDown} onPress={() => navigation.navigate("Account")} activeOpacity={0.8} isRound={0}>
                    <Image style={route === "Account" ? styles.homeIcon : styles.homeIconDisable} source={require('./assets/profile.png')}/>
                    <Text style={styles.homeText}>Account</Text>
                    <View style={{ flex:1,alignItems:"flex-end", marginRight:5}}>
                        <Image
                        style={styles.dropdownIconEnable}
                        source={require('./assets/down-arrow.png')}/>                            
                    </View>
                </ButtonView>
                <View style={styles.borderLine}></View>

                <ButtonView activeOpacity={0.8} style={styles.ButtonDropDown}>
                <Image style={styles.homeIcon} source={require('./assets/info.png')}/>
                <Text style={styles.homeText}>About</Text>
                </ButtonView>
                <View style={styles.borderLine}></View>


                <ButtonView activeOpacity={0.8} style={styles.ButtonDropDown}>
                <Image style={styles.homeIcon} source={require('./assets/login.png')}/>
                <Text onPress={()=>logout()} style={styles.homeText}>Logout</Text>
                </ButtonView>
                <View style={{flex:3.5}}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    manu:{
        flex:3,
        backgroundColor:"#ffffff",
        paddingVertical:10,
        paddingHorizontal:20
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode:"contain",
        tintColor:"#fff",
      },
    homeText:{
        color:"#666666",
        fontSize:16,
        fontWeight:"500",
        paddingLeft:20,
        fontFamily:"OpenSans-Bold"
    },
    homeTextDisable:{
        color:"#666666",
        fontSize:16,
        fontWeight:"500",
        paddingLeft:20,
        fontFamily:"OpenSans-Bold"
    },
    borderLine:{
        backgroundColor:"#666666",
        height:.3,
    },
    borderLineDisable:{
        backgroundColor:"#666666",
        height:.3,
    },
    groupPng:{
        width:20
    },
    homeIcon:{
        height:18,
        width:18,
        resizeMode:"contain",
        tintColor:"#193250",        
    },
    homeIconDisable:{
        height:18,
        width:18,
        resizeMode:"contain",
        tintColor:"#666666",        
    },
    TabDropDown: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dropdownIconDisable: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        tintColor: '#666666',
        transform: [{rotate: '270deg'}],
      },
      dropdownIconEnable: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        tintColor: '#193250',
        transform: [{rotate: '270deg'}],
      },
      ButtonDropDown:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
      },
      ButtonDropDown2:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
      }
});

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogout }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);