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
import { ButtonView } from '../../components';


export default function EstimateItem({ navigation }) {

  return (
    <ScrollView style={styles.MainContainer}>
      <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
        <Text style={{ color: "#464d55", fontWeight: "600", paddingTop: 20, fontFamily: "OpenSans-Bold",paddingLeft:5 }}>Estimate Item Photos/Video</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 10 }}>
          <View>
            <Image style={styles.cross} source={require("../../assets/group743.png")} />
            <Image style={styles.table} source={require("../../assets/table.jpg")} />
            {/* <View style={{ paddingVertical: 10 }}>
              <Text style={{ color: "#7b7e83", fontSize: 12, }}>Note:repair-specific </Text>
              <Text style={{ color: "#7b7e83", fontSize: 12 }}> photos / video</Text>
            </View> */}
          </View>
          <View>
            <Image style={styles.cross} source={require("../../assets/group743.png")} />
            <Image style={styles.table} source={require("../../assets/table2.jpg")} />
            <View>
              {/* <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: "#c7c8cc", fontSize: 12 }}>Note:repair-specific </Text>
                <Text style={{ color: "#c7c8cc", fontSize: 12 }}> photos / video</Text>
              </View> */}
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
      <View style={{ paddingHorizontal: 20, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#f2f3f5', paddingLeft: 25,marginVertical:10 }}>
        <Text style={{ color: "#213b57", fontWeight: "600", fontFamily: "OpenSans-Bold", }}>Repair Dry Rot</Text>
        <View style={styles.editButtom}>
          <Image style={styles.editIcon} source={require("../../assets/edit.png")} />
          <Text style={{ color: "#83838b", textAlign: "center", paddingTop: 2, fontSize: 12 }}>Edit</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", paddingLeft: 25,backgroundColor: '#f2f3f5',  }}>
        <Text style={{ color: "#263f5a", fontWeight: "600", fontFamily: "OpenSans-Bold", }}>6.0 Framing</Text>
        <TouchableOpacity
            activeOpacity={0.5}
            style={ styles.TabDropDown}>
            <Image
              style={styles.transform}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
      </View>
      <Text style={{
        paddingVertical: 10, paddingHorizontal: 20,
        color: "#383d43", fontWeight: "600", fontFamily: "OpenSans-Bold",
      }}
      >Labor Total</Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 20, paddingLeft: 30 }}>
        <Text style={{ flex: 1, color: "#abacb0", fontSize: 12, fontFamily: "OpenSans-Regular", }}>Replace 4 Planks On Deck. Use Matching Screws</Text>
        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
          <Text style={{ color: "#4a4e59", flex: 0.8, paddingLeft: 35, fontWeight: "600", fontSize: 12 }}>$400.00</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.editButtom2}>
            <Image style={styles.editIcon2} source={require("../../assets/edit.png")} />
            <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 2, fontSize: 12 }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#fcfcfc",
        borderWidth:1,
        borderColor:"#f2f3f5"
      }}>
        <Text style={{ color: "#293036", fontWeight: "bold", fontFamily: "OpenSans-Bold", paddingLeft: 15 }}>Labor Total</Text>
        <Text style={{ color: "#2b2f38", fontWeight: "bold", fontFamily: "OpenSans-Regular", }}>$44.95</Text>
      </View>
      <Text style={{ paddingHorizontal: 20, paddingTop: 20,fontFamily: "OpenSans-Bold", }}>Material</Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10, paddingLeft: 30 }}>
        <Text style={{ flex: 1, color: "#abacb0", fontSize: 12 }}>2 In. X 4 In.X 8 Ft #2 Ground Contact Pressure</Text>
        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
          <Text style={{ color: "#4a4e59", paddingLeft: 10, fontWeight: "600", fontSize: 12 }}>$39.96</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.editButtom2}>
            <Image style={styles.editIcon2} source={require("../../assets/edit.png")} />
            <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 2, fontSize: 12 }}>Edit</Text>
          </TouchableOpacity>
          <Image style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10, paddingLeft: 30 }}>
        <Text style={{ flex: 1, color: "#abacb0", fontSize: 12 }}>Additional Material-Screws, Brackets,Etc.SKU N/A</Text>
        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
          <Text style={{ color: "#4a4e59", paddingLeft: 10, fontWeight: "600", fontSize: 12 }}>$4.99</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.editButtom2}>
            <Image style={styles.editIcon2} source={require("../../assets/edit.png")} />
            <Text style={{ color: "#33ae46", textAlign: "center", paddingTop: 2, fontSize: 12 }}>Edit</Text>
          </TouchableOpacity>
          <Image style={styles.deleteLogo} source={require("../../assets/delete2.png")} />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={{paddingHorizontal:20, paddingLeft: 30}}>
        <Text style={{color:"#344c66",fontFamily: "OpenSans-Bold",}}>Add New Item +</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 20, paddingLeft: 30,  borderWidth:1,
        borderColor:"#f2f3f5",marginVertical:10,backgroundColor: "#fcfcfc", }}>
        <Text style={{ color: "#293036", fontWeight: "bold",fontFamily: "OpenSans-Bold", }}>Material Total</Text>
        <Text style={{ color: "#2b2f38", fontWeight: "bold" }}>$400.95</Text>
      </View>
      <View style={{ backgroundColor: "#193250", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 20, marginVertical: 20 }}>
        <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Labor and Material Total</Text>
        <Text style={{ color: "#ffffff", fontWeight: "bold" }}>$400.95</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 10
        }}>
        <ButtonView
          activeOpacity={0.9}
          style={styles.pauseButton}>
          <Text style={{ color: '#193250', fontWeight: 'bold' }}>Pause</Text>
        </ButtonView>
        <ButtonView activeOpacity={0.9} style={styles.completeButton}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Continue</Text>
        </ButtonView>
      </View>
      <View style={{ paddingBottom: 30 }}></View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#ffffff"
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
    width: 56,
    height: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  deleteLogo: {
    width: 14,
    height: 16
  },
  editButtom: {
    backgroundColor: "#efeff1",
    width: 56,
    height: 24,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  TabDropDown: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#909090',    borderRadius:10,
    width:18,
    height:18,
    marginRight:10,
    marginTop:3,
    justifyContent:"center"
  },
  transform: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: '#ffffff',
    transform: [{rotate: '270deg'}],
  },
  editIcon: {
    width: 10,
    height: 10,
    marginTop: 6,
    tintColor: "#83838b"
  },
  editIcon2: {
    width: 10,
    height: 10,
    marginTop: 6,
  },
  pauseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    width: 160,
    height: 44,
    borderWidth: 1,
    borderColor: '#193250',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#193250',
    width: 160,
    height: 44,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 4,
  },
});

