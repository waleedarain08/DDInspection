import React, { useEffect, useState } from 'react';
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


function CustomDrawer({navigation,userLogout,route, state}) {

    useEffect(() => {
        getFocused()
    }, [state.index])
    
    const [currRoute, setCurrRoute] = useState('')

    logout = () => {
        navigation.closeDrawer();
        userLogout(null);
    }

    const getFocused = () => {
        state.routes.map((route, index) => {
           
            const isFocused = state.index === index;
            if(isFocused) {
                setCurrRoute(route.name)
            }
        })
    }

    // console.log(route)
    console.log("state",currRoute)

    return (
        <View style={{ flex: 1, backgroundColor:"#fff"}}>
            <View style={{flex:1.3,backgroundColor:"#193250",justifyContent:"center",alignItems:"center", paddingVertical:15}}>
            <Image style={styles.logo} source={require('./assets/sylvanRoad.png')} />
            </View>
            <View style={styles.manu}>

                <ButtonView  style={styles.ButtonDropDown} onPress={() => navigation.navigate("List")} activeOpacity={0.8} isRound={0}>
                <Image style={currRoute === "List" ? styles.homeIconEnable : styles.homeIconDisable} source={require('./assets/homeIcon2.png')}/>
                <Text style={currRoute === "List" ? styles.homeTextDisable : styles.homeTextEnable}>Home</Text>
                </ButtonView>
                <View style={currRoute === "List" ? styles.borderLineDisable : styles.borderLineEnable}></View>


                <ButtonView style={styles.ButtonDropDown}  onPress={() => navigation.navigate("PRE-INPECTION CHECKLIST")} activeOpacity={0.8} isRound={0}>
                    <Image style={currRoute === "PRE-INPECTION CHECKLIST" ? styles.homeIconEnable : styles.homeIconDisable} source={require('./assets/group669.png')}/>
                    <Text style={currRoute === "PRE-INPECTION CHECKLIST" ? styles.homeTextDisable : styles.homeTextEnable}>Setting</Text>
                    <View style={{ flex:1,alignItems:"flex-end", marginRight:5}}>
                        <Image
                        style={currRoute === "PRE-INPECTION CHECKLIST" ? styles.dropdownIconEnable : styles.dropdownIconDisable}
                        source={require('./assets/down-arrow.png')}/>                            
                    </View>
                </ButtonView>
                <View style={currRoute === "List" ? styles.borderLineDisable : styles.borderLineEnable}></View>
                    
                    <ButtonView style={styles.ButtonDropDown} onPress={() => navigation.navigate("Account")} activeOpacity={0.8} isRound={0}>
                    <Image style={currRoute === "Account" ? styles.homeIconEnable : styles.homeIconDisable} source={require('./assets/profile.png')}/>
                    <Text style={currRoute === "Account" ? styles.homeTextDisable : styles.homeTextEnable}>Account</Text>
                    <View style={{ flex:1,alignItems:"flex-end", marginRight:5}}>
                        <Image
                        style={currRoute === "Account" ? styles.dropdownIconEnable : styles.dropdownIconDisable}
                        source={require('./assets/down-arrow.png')}/>                            
                    </View>
                </ButtonView>
                <View style={currRoute === "Account" ? styles.borderLineDisable : styles.borderLineEnable}></View>

                <ButtonView onPress={() => navigation.navigate("DetailPage")} activeOpacity={0.8} isRound={0} style={styles.ButtonDropDown}>
                <Image style={currRoute === "DetailPage" ? styles.homeIconEnable : styles.homeIconDisable} source={require('./assets/info.png')}/>
                <Text style={currRoute === "DetailPage" ? styles.homeTextDisable : styles.homeTextEnable}>About</Text>
                </ButtonView>
                <View style={currRoute === "DetailPage" ? styles.borderLineDisable : styles.borderLineEnable}></View>


                <ButtonView onPress={() => navigation.navigate("EndInspection")} activeOpacity={0.8} isRound={0} style={styles.ButtonDropDown}>
                <Image style={currRoute === "EndInspection" ? styles.homeIconEnable : styles.homeIconDisable} source={require('./assets/login.png')}/>
                <Text onPress={()=>logout()} style={currRoute === "EndInspection" ? styles.homeTextDisable : styles.homeTextEnable}>Logout</Text>
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
    homeTextEnable:{
        color:"#666666",
        fontSize:16,
        fontWeight:"500",
        paddingLeft:20,
        fontFamily:"OpenSans-Bold"
    },
    homeTextDisable:{
        color:"#193250",
        fontSize:16,
        fontWeight:"500",
        paddingLeft:20,
        fontFamily:"OpenSans-Bold"
    },
    borderLineEnable:{
        backgroundColor:"#666666",
        height:.3,
    },
    borderLineDisable:{
        backgroundColor:"#193250",
        height:.3,
    },
    groupPng:{
        width:20
    },
    homeIconEnable:{
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