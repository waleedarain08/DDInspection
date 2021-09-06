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
import {Input, Button, Card, CheckBox} from 'react-native-elements';

export default function ExteriorBack({ navigation }) {
    const [quality, setQuality] = useState(false);
    const [checked, setChecked] = useState(false);

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
              
<CheckBox
checkedColor={"red"}
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={checked}
/>
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
                <View style={{backgroundColor:"#f9f9f9",paddingVertical:10,paddingHorizontal:20}}>
                    <Text style={{color:"#52575d",fontWeight:"bold",paddingBottom:20}}>Dose the deck have rot which makes it unsafe</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>Yes (Add Dry Rot Repair</Text>
                    </View>
                    <View style={{flexDirection:"row",paddingBottom:20,paddingTop:20}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>No</Text>
                    </View>
                    <View style={{backgroundColor:"#f4f4f4",width:"100%",height:2,marginVertical:20}}></View>
                    <Text style={{color:"#52575d",fontWeight:"bold",paddingBottom:20}}>Dose the deck appear weathered</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>Yes (Add Dry Rot Repair</Text>
                    </View>
                    <View style={{flexDirection:"row",paddingBottom:20,paddingTop:20}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>No</Text>
                    </View>
                    <View style={{backgroundColor:"#f4f4f4",width:"100%",height:2,marginVertical:20}}></View>
                    <Text style={{color:"#52575d",fontWeight:"bold",paddingBottom:20}}>Dose each deck support have a footer under it</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>Yes (Add Dry Rot Repair</Text>
                    </View>
                    <View style={{flexDirection:"row",paddingBottom:20,paddingTop:20}}>
                    <View style={styles.circle}></View>
                        <Text style={{color:"#7c8089",paddingLeft:15}}>No</Text>
                    </View>
                </View>
                <View>
                    <View style={{backgroundColor:"#f4f4f4",paddingVertical:20,paddingHorizontal:20}}>
                        <Text onPress={()=> navigation.navigate("EstimateItem")} style={{color:"#2b2f38"}}>Estimate Item</Text>
                    </View>
                    <View style={{backgroundColor:"#f9f9f9"}}>
                        <View style={{flexDirection:"row",paddingHorizontal:20}}>
                        <View style={{flex:1.5}}>
                        <Text style={{flex:1,color:"#f38550",fontSize:12,}}>Repair Dry Rot, 2 Photos</Text>
                        <View style={{backgroundColor:"#f38550",width:130,height:2,marginBottom:20}}></View>
                        </View>
                        <View style={{flexDirection:"row",flex:1,justifyContent:"space-between"}}>
                        <Text style={{color:"#868991"}}>$0.00</Text>
                        <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:10}}>
                        <View style={{flex:1.5}}>
                        <Text style={{flex:1,color:"#f38550",fontSize:12,}}>Power Wash, Stain/Seal,1 Photo</Text>
                        <View style={{backgroundColor:"#f38550",width:170,height:2,marginBottom:20}}></View>
                        </View>
                        <View style={{flexDirection:"row",flex:1,justifyContent:"space-between"}}>
                        <Text style={{color:"#868991"}}>$0.00</Text>
                        <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <Text style={{color:"#425871",paddingHorizontal:20,fontWeight:"bold"}}>Add New Item  +</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20,backgroundColor:"#fcfcfc"}}>
                    <Text style={{color:"#3e434a",fontWeight:"bold"}}>Total Items</Text>
                    <Text style={{color:"#3e434a",fontWeight:"bold"}}>$744.95</Text>
                </View>
                <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => setQuality(!quality)}
                        // style={styles.continueButton}
                        style={quality ? styles.continueButton : styles.continueButton2}
                    >
                        <Text style={{color:"#e3e3e3"}}>Continue</Text>
                    </TouchableOpacity>
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
    },
    editButtom2: {
        backgroundColor: "#ebf7ed",
        width: 70,
        height: 26,
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    continueButton2:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#909090",
        padding: 18,
        marginHorizontal: 12,
        marginVertical:30,
        borderRadius: 35,
    },
    continueButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#193250",
        padding: 18,
        marginHorizontal: 12,
        marginVertical:30,
        borderRadius: 35,
    },
})