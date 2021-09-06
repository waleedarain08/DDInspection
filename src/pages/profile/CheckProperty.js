import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, Modal, Button, Pressable, Dimensions, ScrollView } from 'react-native';
import {CheckBox} from 'react-native-elements';

export default function CheckProperty({ navigation }) {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.begin}>BEGIN INSPECTION</Text>
            </View>
            <ScrollView contentContainerStyle={{ height:700 }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingVertical: 10, flex: 1}}>
                    <Text style={{ color: "#8f949a" }}>Thank you for handling the due diligance the property</Text>
                    <View style={{paddingVertical:10}}>
                    <Text style={styles.confirmation}>Kindly confirm / do the following:</Text>
                    </View>
                </View>
                <View style={{ flex: 4.3,paddingTop:30}}>
                    <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15, paddingBottom: 20,backgroundColor:"#f6f6f6" }}>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.logo} source={require('../../assets/downloadded.png')} />
                            {/* <CheckBox
                            style={styles.logo} 
  checkedIcon={<Image source={require('../../assets/downloadded.png')} />}
  uncheckedIcon={<Image source={require('../../assets/arrow03.png')} />}
  checked={checked}
  onPress={() => setChecked({checked: !useState.checked})}
/> */}
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.textService}>Electric service is activated</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15, paddingBottom: 20,backgroundColor:"#f6f6f6" }}>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.logo} source={require('../../assets/arrow03.png')} />
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.textService}>water service is activated</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15, paddingBottom: 20,backgroundColor:"#f6f6f6" }}>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.logo} source={require('../../assets/arrow03.png')} />
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.textService}>Gas service is activated if aplicable</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15, paddingBottom: 20,backgroundColor:"#f6f6f6" }}>
                        <View style={{ flex: 1 }}>
                            <Image style={styles.logo} source={require('../../assets/arrow03.png')} />
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.textService}>Turn on HVAC and leave it running during the inspection</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2,marginTop:20 }}>
                <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.continueButton}
                        onPress={() => navigation.navigate("CheckProperty2")}
                    >
                        <Text style={{color:"#e3e3e3"}}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.stopButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{color:"#17324f",fontWeight:"bold"}}>Stop <Text style={{color:"#53657d",fontWeight:"400"}}>- Utilities Not Activated</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
    },
    header:{
        flexDirection:"row",
        paddingVertical:20,
        justifyContent:"space-evenly"
    },
    begin:{
        color:"#5a6577",
        paddingTop:12,
        fontSize:16,
    },
    confirmation: {
        color: "#3c434d",
        fontWeight: "bold",
        fontSize: 24
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    textService: {
        color: "#a2a5ab",
        fontWeight: "500",
    },
    continueButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#909090",
        padding: 18,
        marginHorizontal: 12,
        marginVertical:15,
        borderRadius: 35,
    },
    stopButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#ffffff",
        padding: 16,
        marginHorizontal: 12,
        borderRadius: 35,
        borderWidth:1,
        borderColor:"#193250",
    }
})
