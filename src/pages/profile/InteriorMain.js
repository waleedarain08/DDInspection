
import React, { Component, useEffect, useState } from 'react';
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
import { Input, Button, Card, SearchBar } from 'react-native-elements';

export default function InteriorMain({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ height: 900, backgroundColor: "#ffffff" }}>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 20, color: "#5a5d62" }}>Please Confirm You Are Weraing Booties Before Intering The Interior.</Text>
            <View style={styles.bathroom}>
                <Text style={{ color: "#2b3036", fontWeight: "bold" }}>Bathroom 1</Text>
                <Text>+</Text>
            </View>
            <View style={styles.bathroom}>
                <Text style={{ color: "#2b3036", fontWeight: "bold" }}>Bathroom 2</Text>
                <Text>+</Text>
            </View>
            <View style={styles.Kitchen}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{ color: "#2b3036", fontWeight: "bold" }} >Kitchen</Text>
                <Text>+</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#ffffff" }}>
                    <Text style={{ flex: 3.5, color: "#797b7f" }}>Suqure Footage</Text>
                    <Text style={{ flex: 1 }}>$0.00</Text>
                    <View style={styles.editButtom}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#ffffff" }}>
                    <Text style={{ flex: 3.5, color: "#797b7f" }}>Exhaust Fan</Text>
                    <Text style={{ flex: 1 }}>$0.00</Text>
                    <View style={styles.editButtom}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#ffffff" }}>
                    <Text style={{ flex: 3.5, color: "#797b7f" }}>Garbage Disposal</Text>
                    <Text style={{ flex: 1 }}>$0.00</Text>
                    <View style={styles.editButtom}>
                        <Text style={{ color: "#ff5454", textAlign: "center", paddingTop: 3 }}>Inspect</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#ffffff" }}>
                    <Text style={{ flex: 3.5, color: "#797b7f" }}>Sink</Text>
                    <Text style={{ flex: 1 }}>$0.00</Text>
                    <View style={styles.inspectButtom}>
                        <Text style={{ color: "#ff5454", textAlign: "center", paddingTop: 3 }}>Inspect</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bathroom}>
                <Text style={{ color: "#2b3036", fontWeight: "bold" }}>Bathroom 2</Text>
                <Text>+</Text>
            </View>
            <View style={styles.dotted}>
                <Text style={{ textAlign: "center", color: "#17324f" }}>Add New Area +</Text>
            </View>
            <View style={styles.total}>
                <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>Tolat </Text>
                <View style={styles.line2}></View>
                <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 18, }}>$1,070,00</Text>
            </View>
            <View style={styles.completeButton}>
                <Text style={{textAlign:"center",color:"#ffffff"}}>Complete</Text>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#ffffff",
    },
    bathroom: {
        flexDirection:"row",
        backgroundColor: "#f2f3f5",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 8, borderRadius: 10,
        justifyContent:"space-between"
    },
    editButtom: {
        backgroundColor: "#ebf7ed",
        width: 70,
        height: 26
    },
    Kitchen: {
        backgroundColor: "#f8f9fb",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 8,
        borderWidth: 2, borderColor: "#eeedfb", borderRadius: 10,
    },
    inspectButtom: {
        backgroundColor: "#ffeeee",
        width: 70,
        height: 26,
    },
    dotted: {
        borderWidth: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 18,
        marginHorizontal: 20,
        marginVertical: 8,
        borderStyle: 'dotted',
        borderRadius: 10

    },
    line2: {
        width: 2,
        height: 35,
        backgroundColor: "#0b1723",
        marginLeft: "38%"
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#193250",
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 20
    },
    completeButton:{
        backgroundColor:"#909090",
        paddingVertical:18,
        paddingHorizontal:10,
        marginVertical:20,
        marginHorizontal:20,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 2,
    }

})