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

export default function ExteriorBack({ navigation }) {
    return(
        <ScrollView >
            <View style={styles.container}> 
                <Text style={{color:"#3c434d",fontWeight:"bold",fontSize:20,paddingHorizontal:15,paddingVertical:20}}>Dack / Porch</Text>
                <Text style={{color:"#173250",fontWeight:"bold",paddingHorizontal:20}}>Photos / Video</Text>
                <Text style={{color:"#a7abae",paddingHorizontal:20,paddingVertical:10}}>Note:repair-specific photos / video should be added in the estimate itself.</Text>
                <View style={styles.imageCard}>
                    <Text>Top of deck, wide angle<Text style={{color:"#d91614"}}>*</Text></Text>
                    <View style={{flexDirection:"row",justifyContent:"space-around",paddingVertical:10}}>
                    <View>
                    <Image  style={styles.cross} source={require("../../assets/group743.png")} />
                    <Image  style={styles.table} source={require("../../assets/table.jpg")} />
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:"#7b7e83",fontSize:12}}>Note:repair-specific </Text>
                    <Text style={{color:"#7b7e83",fontSize:12}}> photos / video</Text>
                    <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom}>
                    <Image  style={styles.editIcon} source={require("../../assets/edit.png")} />
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View>
                    <Image  style={styles.cross} source={require("../../assets/group743.png")} />
                    <Image  style={styles.table} source={require("../../assets/table2.jpg")} />
                    <View>
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:"#c7c8cc",fontSize:12}}>Note:repair-specific </Text>
                    <Text style={{color:"#c7c8cc",fontSize:12}}> photos / video</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.doneButton}>
                        <Text style={{textAlign:"center",color:"#5d5b66"}}>Done</Text>
                    </View>
                    </View>
                    </View>
                    <View>
                    <View style={{borderStyle: 'dashed',borderRadius: 10,width:100, height:100,borderWidth: 1,borderColor:"#b0aeb9"}}>
                    <Image  style={styles.delete} source={require("../../assets/group740.png")} />
                    <Text style={{textAlign:"center",color:"#435971",fontSize:12,paddingVertical:4}}>Add Photo</Text>
                    </View> 
                    </View>
                    </View>
                </View>
                <View style={styles.imageCard}>
                    <Text>Top of deck, wide angle<Text style={{color:"#d91614"}}>*</Text></Text>
                    <View style={{flexDirection:"row",justifyContent:"space-around",paddingVertical:10}}>
                    <View>
                    <Image  style={styles.cross} source={require("../../assets/group743.png")} />
                    <Image  style={styles.table} source={require("../../assets/table.jpg")} />
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:"#7b7e83",fontSize:12}}>Note:repair-specific </Text>
                    <Text style={{color:"#7b7e83",fontSize:12}}> photos / video</Text>
                    <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom}>
                    <Image  style={styles.editIcon} source={require("../../assets/edit.png")} />
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View>
                    <Image  style={styles.cross} source={require("../../assets/group743.png")} />
                    <Image  style={styles.table} source={require("../../assets/table2.jpg")} />
                    <View>
                    <View style={{paddingVertical:10}}>
                    <Text style={{color:"#c7c8cc",fontSize:12}}>Note:repair-specific </Text>
                    <Text style={{color:"#c7c8cc",fontSize:12}}> photos / video</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.doneButton}>
                        <Text style={{textAlign:"center",color:"#5d5b66"}}>Done</Text>
                    </View>
                    </View>
                    </View>
                    <View>
                    <View style={{borderStyle: 'dashed',borderRadius: 10,width:100, height:100,borderWidth: 1,borderColor:"#cdccd2"}}>
                    <Image  style={styles.delete} source={require("../../assets/group740.png")} />
                    <Text style={{textAlign:"center",color:"#435971",fontSize:12,paddingVertical:4}}>Add Photo</Text>
                    </View> 
                    </View>
                    </View>
                </View>
                <View style={styles.uploadImage}>
                <Image  style={styles.upload} source={require("../../assets/upload.png")} />
                <Text style={{color:"#868990",paddingVertical:10}}>Deck button / structure <Text style={{color:"#d91614"}}>*</Text></Text>
                <View style={styles.imageButton}>
                    <Text style={{color:"#ffffff",fontSize:13}}>Upload Image +</Text>
                </View>
                </View>
                <View style={{backgroundColor:"#f9f9f9",marginVertical:20}}>
                <View style={{backgroundColor:"#f4f4f4",paddingVertical:20,paddingHorizontal:20,}}>
                    <Text>Deck Material</Text>
                    <Text style={{color:"#6a707c"}}>Select one</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Wood</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Vinyl</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Composite</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Other enter text</Text>
                    <View style={styles.circle}></View>
                </View>
                </View>
                <View style={{backgroundColor:"#f9f9f9",marginVertical:20}}>
                <View style={{backgroundColor:"#f4f4f4",paddingVertical:20,paddingHorizontal:20,}}>
                    <Text>Deck Material</Text>
                    <Text style={{color:"#6a707c"}}>Select All the apply</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Railing</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>No Railing</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Composite</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Covered</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Uncovered</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>Star</Text>
                    <View style={styles.circle}></View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
                    <Text style={{color:"#6a707c"}}>No Star</Text>
                    <View style={styles.circle}></View>
                </View>
                </View>
                <View style={{backgroundColor:"#f4f4f4",paddingVertical:20,paddingHorizontal:20}}>
                <Text style={{color:"#000000"}}>Note: <Text style={{color:"#8e9196"}}>Certain answer choices will promp you to add an estimate. As you add an estimate please pay close attention and added as needed</Text></Text>
                </View>
                <View style={{backgroundColor:"#f9f9f9",paddingVertical:10,paddingHorizontal:10}}>
                    <Text>Dose the deck have rot which makes it unsafe</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={styles.circle}></View>
                        <Text>Yes (Add Dry Rot Repair</Text>
                    </View>
                </View>
                <Text style={{color:"#173250",fontWeight:"bold",paddingHorizontal:20}}>Photos / Video</Text>
                <Text style={{color:"#a7abae",paddingHorizontal:20,paddingVertical:10}}>Note:repair-specific photos / video should be added in the estimate itself.</Text>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create ({
    container:{
        flex:1,
        flexGrow:1,
        backgroundColor:"#ffffff",
    },
    imageCard:{
        backgroundColor:"#fcfcfe",
        borderColor:"#f2f3f5",
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        marginHorizontal:10
    },
    table:{
        width:100,
        height:100,
        borderRadius:10,
    },
    delete:{
        width:12,
        height:12,
        marginTop:"30%",
        marginLeft:"40%"
    },
    cross:{
        width:22,
        height:22,
        position:"absolute",
        zIndex: 10,
        top:10,
        left:70
    },
    line:{
        backgroundColor:"#c3cad4",
        width:"90%",
        height:2
    },
    doneButton:{
        backgroundColor:"#ededef",
        width:65,
        height:25,
        marginVertical:10
    },
    editButtom: {
        backgroundColor: "#ebf7ed",
        width: 70,
        height: 26,
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginVertical:20
    },
    editIcon:{
        width:12,
        height:12,
        marginTop:5
    },
    uploadImage:{
        borderStyle: 'dashed',borderRadius: 10,
        borderWidth: 1.5,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20,
        marginHorizontal:20,
        borderColor:"#cdccd2"
    },
    upload:{
        width:50,
        height:50,
        transform: [{rotate: '180deg'}],
        marginVertical:10,
        tintColor:"#9d9ba6"
    },
    imageButton:{
        backgroundColor:"#193250",
        paddingVertical:8,
        paddingHorizontal:24,
        borderRadius:30,
        marginVertical:10
    },
    circle:{
        width:20,
        height:20,
        borderWidth:2,
        borderColor:"#c3c3c3",
        borderRadius:20
    }
})