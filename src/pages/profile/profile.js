import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, Modal, Button, Pressable, Dimensions, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

export function Profile({ navigation }) {
   
    return (
        // <View style={styles.container}>
            <ScrollView style={{ flex:1,flexGrow:1,paddingHorizontal: 20,color:"#ffffff"}} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, flexGrow: 1 }}>
                <View style={{ paddingVertical: 25 }}>
                    <Text style={{ fontSize: 10, color: "#989da3", paddingBottom: 2 }}>Thank you for handling the due diligance for this property.</Text>
                    <Text style={{ fontSize: 18, fontWeight: "#3f434e", fontWeight: "bold", }}>Confirm Property Is Accessible / Ok To Inspect</Text>
                </View>
                <Text style={styles.textFollow}>Please Confirm The Following:</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Image style={styles.logo} source={require('../../assets/downloadded.png')} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.textProperty}>You are at the correct property.101 main street Atlanta GA 12345</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 30 }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Image style={styles.logo} source={require('../../assets/downloadded.png')} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.textProperty}>Your car is parked in safe location. if not please make sure it is and then proceed</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.locationDetail}>This property is in an acceptable location and safe to inspect. if not,please use the "DoNot Buy" Button below. "Do Not Buy" reasons include:</Text>
                </View>
                <View style={styles.services}>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Adjacent to gas stations or automative service</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Adjacent to dry cleaners or retail centers</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Adjacent to burned, dilapidate, boarded,aband oned,or condemned housing stock</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Adjacent property have a surplus of trash/ debris covering the property/lot to an extent it well interface with leasing</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Property/ area is not safe enougt to perform the diligance inspection</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: "#666b71" }}> this property is accessible using the provided instructions. if it is not accessible please contact (in the order):</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>The tenant, if the tenant information is in access instruction (above)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>The selling agent, Sue Smith at 606-556-1212</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.adjacent}>Middle office, at 404-522-1956 ext 1516 </Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingVertical:20}}>
                    <View >
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.pouseButton}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    </View>
                    <View >
                    <TouchableOpacity
                       activeOpacity={0.9} activeOpacity={0.9} 
                       onPress={() => navigation.navigate("CheckProperty")}
                        style={styles.continueButton}>
                        <Text style={{color:"#fff"}}>Continue</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
            </ScrollView>
        // </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#ffffff",
        paddingHorizontal: 20
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    textFollow: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#5c626e",
        paddingBottom: 30
    },
    textProperty: {
        color: "#a8abb0",
        fontSize: 11,
    },
    locationDetail: {
        color: "#676a71", fontWeight: "600",
    },
    circle: {
        backgroundColor: "#183150",
        padding: 2,
        width: 5,
        height: 1,
        borderRadius: 20
    },
    adjacent: {
        color: "#919eaf"
    },
    pouseButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        paddingVertical:16,
        borderWidth: 1,
        borderRadius:30,
        borderColor: "#193250",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    continueButton:{
            alignItems: "center",
            backgroundColor: "#193250",
            marginBottom:10,
            paddingVertical:18,
            marginVertical:14,
            borderRadius:30,
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    }
})