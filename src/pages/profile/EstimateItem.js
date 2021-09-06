import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';

export default function EstimateItem({ navigation }) {

  return (
    <ScrollView style={styles.MainContainer}>
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <Text>Estimate Item Photos/Video</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 }}>
          <View>
            <Image style={styles.cross} source={require("../../assets/group743.png")} />
            <Image style={styles.table} source={require("../../assets/table.jpg")} />
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ color: "#7b7e83", fontSize: 12 }}>Note:repair-specific </Text>
              <Text style={{ color: "#7b7e83", fontSize: 12 }}> photos / video</Text>
            </View>
          </View>
          <View>
            <Image style={styles.cross} source={require("../../assets/group743.png")} />
            <Image style={styles.table} source={require("../../assets/table2.jpg")} />
            <View>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: "#c7c8cc", fontSize: 12 }}>Note:repair-specific </Text>
                <Text style={{ color: "#c7c8cc", fontSize: 12 }}> photos / video</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ borderStyle: 'dashed', borderRadius: 10, width: 100, height: 100, borderWidth: 1, borderColor: "#b0aeb9" }}>
              <Image style={styles.delete} source={require("../../assets/group740.png")} />
              <Text style={{ textAlign: "center", color: "#435971", fontSize: 12, paddingVertical: 4 }}>Add Photo</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:"#f6f5fa",paddingHorizontal:20,paddingVertical:20}}>
        <Text>Estimate</Text>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20}}>
        <Text style={{flex:1,color:"#abacb0",fontSize:13}}>Replace 4 Planks On Deck. Use Matching Screws</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{flex:1,color:"#abacb0",fontSize:13}}>Amt Tax Inc</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{flex:1,color:"#abacb0",fontSize:13}}>2 In. X 4 In.X 8 Ft #2 Ground Contact Pressure</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{flex:1,color:"#abacb0",fontSize:13}}>Amt Tax Inc</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{flex:1,color:"#abacb0",fontSize:13}}>Additional Material-Screws, Brackets,Etc.SKU N/A</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:20}}>
      <Text style={{flex:1,color:"#abacb0",fontSize:13}}>Amt Tax Inc</Text>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
          <Text style={{color:"#4a4e59"}}>#400.00</Text>
          <TouchableOpacity
                     activeOpacity={0.9}
                    style={styles.editButtom2}>
                        <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 3 }}>Edit</Text>
                    </TouchableOpacity>
                    <Image  style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <Text style={{color:"#425871",paddingHorizontal:20,fontWeight:"bold",paddingVertical:20}}>Add New Item  +</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20}}>
        <Text style={{color:"#293036",fontWeight:"bold"}}>Labor Total</Text>
        <Text style={{color:"#2b2f38",fontWeight:"bold"}}>$44.95</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:20}}>
        <Text style={{color:"#293036",fontWeight:"bold"}}>Material Total</Text>
        <Text style={{color:"#2b2f38",fontWeight:"bold"}}>$400.95</Text>
      </View>
      <View style={{backgroundColor:"#193250",flexDirection:"row",justifyContent:"space-between",paddingVertical:20,paddingHorizontal:20,marginVertical:20}}>
        <Text style={{color:"#ffffff",fontWeight:"bold"}}>Labor and Material Total</Text>
        <Text style={{color:"#ffffff",fontWeight:"bold"}}>$400.95</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexGrow:1,
    backgroundColor:"#ffffff"
  },
  table: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cross: {
    width: 22,
    height: 22,
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 70
  },
  delete: {
    width: 12,
    height: 12,
    marginTop: "30%",
    marginLeft: "40%"
  },
  editButtom2: {
    backgroundColor: "#ebf7ed",
    width: 70,
    height: 26,
    flexDirection:"row",
    justifyContent:"space-evenly",
},
deleteLogo:{
  width:16,
  height:18
}
});

