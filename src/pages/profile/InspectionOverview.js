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
import Modal from 'react-native-modal';
import Textarea from 'react-native-textarea';
import * as Animatable from 'react-native-animatable';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { ButtonView } from '../../components';

export default function InspectionOverview({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = useState(false);


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ height: 850 }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingBottom: '12%',
            paddingVertical: 30,
          }}>
          <View style={styles.card}>
            <Text
              style={{
                color: '#4f5359',
                fontWeight: '900',
                textAlign: 'center',
                fontFamily: "OpenSans-Bold",
                fontSize: 10,
              }}>
              Inspected
            </Text>
            <Text style={{ color: '#c1c3c7', textAlign: 'center', fontSize: 10,fontFamily: "OpenSans-Regular" }}>
              Items
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "OpenSans-Bold", color: '#fb739b',
                textAlign: 'center',
              }}>
              04
            </Text>
          </View>
          <View style={styles.card2}>
            <Text
              style={{
                color: '#4f5359',
                fontWeight: '900',
                textAlign: 'center',
                fontFamily: "OpenSans-Bold",
                fontSize: 10,
              }}>
              Remaining
            </Text>
            <Text style={{ color: '#c1c3c7', textAlign: 'center', fontSize: 10,fontFamily: "OpenSans-Regular" }}>
              Items
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: '#5bd2f3',
                textAlign: 'center',
                fontFamily: "OpenSans-Bold"
              }}>
              88
            </Text>
          </View>
          <TouchableOpacity 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('HomeOverview')}
          style={styles.card3}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('HomeOverview')}>
              <Text
                style={{
                  color: '#4f5359',
                  fontWeight: '900',
                  textAlign: 'center',
                  fontFamily: "OpenSans-Bold",
                  fontSize: 10,
                }}>
                Home
              </Text>
              <Text
                style={{ color: '#c1c3c7', textAlign: 'center', fontSize: 10,fontFamily: "OpenSans-Regular" }}>
                Overview
              </Text>
            </TouchableOpacity>
            <Image
            
              style={styles.homelogo}
              source={require('../../assets/home.png')}
            />
          </TouchableOpacity >
          <TouchableOpacity 
             activeOpacity={0.9}
             onPress={() => navigation.navigate('EstimateScope')}
           style={styles.card4}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('EstimateScope')}>
              <Text
                style={{
                  color: '#4f5359',
                  fontWeight: '900',
                  textAlign: 'center',
                  fontFamily: "OpenSans-Bold",
                  fontSize: 10,
                }}>
                Estimate
              </Text>
              <Text
                style={{ color: '#c1c3c7', textAlign: 'center', fontSize: 10,fontFamily: "OpenSans-Regular" }}>
                Scope
              </Text>
            </TouchableOpacity>
            <Image
              style={styles.estimatelogo2}
              source={require('../../assets/chart.png')}
            />
          </TouchableOpacity >
        </View>
        <View style={{ backgroundColor: "#f8f8f8", paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 20
            }}>
            <Text style={styles.location}>Location</Text>
            <Text style={styles.item}>Items</Text>
          </View>
          <View>
            <View style={styles.front}>
              <Text style={{ flex: 2.5, color: '#84868a',  fontFamily:  "OpenSans-Regular" }}>Exterior</Text>
              <Text style={{ flex: 1, color: '#86888c',  fontFamily:  "OpenSans-Regular"}}>2</Text>
              <Image
                style={styles.download}
                source={require('../../assets/downloadded.png')}
              />
            </View>
            <View style={styles.interior}>
              <Text
                onPress={() => navigation.navigate('InteriorMain')}
                style={{ color: '#818387',  fontFamily:  "OpenSans-Regular" }}>
                Interior Main
              </Text>
            </View>
            <View style={styles.interior}>
              <Text style={{ color: '#818387',  fontFamily:  "OpenSans-Regular" }}>Interior 2nd Ievel</Text>
            </View>
            <View style={styles.interior}>
              <Text style={{ color: '#818387',  fontFamily:  "OpenSans-Regular"}}>Interior Basement</Text>
            </View>
            <View style={styles.interior}>
              <Text style={{ color: '#818387',  fontFamily:  "OpenSans-Regular"}}>Interior Crawl Space</Text>
            </View>
            <View style={styles.interior}>
              <Text style={{ color: '#818387',  fontFamily:  "OpenSans-Regular" }}>Interior Attic</Text>
            </View>
          </View>
          <View></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            paddingTop: '20%',
          }}>
          <ButtonView
            activeOpacity={0.9}
            onPress={() => setModalVisible(true)}
            style={styles.pauseButton}>
            <Text style={{ color: '#193250',   fontFamily: "OpenSans-Bold"}}>Cancel</Text>
          </ButtonView>
          <ButtonView 
           onPress={() => navigation.navigate('EndInspection')}
           activeOpacity={0.9} style={complete ? styles.completeButton2 : styles.completeButton}>
            <Text style={{ color: '#ffffff',  fontFamily: "OpenSans-Bold" }}>Complete</Text>
          </ButtonView>
        </View>

        <Modal
          animationType="slideInUp"
          transparent={true}
          isVisible={modalVisible}
          swipeDirection="down"
          style={styles.view}
          onSwipeComplete={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(!modalVisible)}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={0.9}
              hitSlop={{top: 20, bottom: 20, left: 40, right: 40}}>
              {/* // onPress={() => setModalVisible(!modalVisible)}> */}
              <View style={styles.modalLineView}></View>
            </TouchableOpacity>

            <View style={{marginVertical: 25}}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Cannot Access Property</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Utilities Not Activated</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('DoNotBuy2')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Do Not Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Pause Inspection</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  arrowlogo: {
    width: 34,
    height: 34,
  },
  overview: {
    paddingLeft: 12,
    paddingTop: 6,
    color: '#5a6577',
  },
  homelogo: {
    width: 22,
    height: 22,
    marginTop: 10,
    marginLeft: 2,
  },
  estimatelogo2: {
    width: 22,
    height: 22,
    marginTop: 8,
    marginLeft: 2,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 10,
  },
  card2: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 10,
  },
  card3: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 10,
  },
  card4: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: "center",
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 10,
    height: 90,
  },
  completeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#909090",
    width: 156,
    height: 48,
    borderRadius: 35,

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  location: {
    color: '#32373d',
    flex: 1.5,
    fontFamily: "OpenSans-Bold"
  },
  completeButton2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192550",
    width: 156,
    height: 48,
    borderRadius: 35,

    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  location: {
    color: '#32373d',
    flex: 1.5,
    fontFamily: "OpenSans-Bold",
    fontWeight:"bold",
    fontSize:16
  },
  item: {
    color: '#32373d',
    fontFamily: "OpenSans-Bold",    
    flex: 1,
    fontWeight:"bold",
    fontSize:16
  },
  front: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efefef',
    paddingVertical: 20,
    paddingHorizontal: 14,
    marginVertical: 6,
    marginHorizontal: 18,
    borderRadius: 10
  },
  download: {
    width: 22,
    height: 22,
    flex: 0,
  },
  interior: {
    backgroundColor: '#fefefe',
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: '#c8cccf',
    borderRadius: 10,
    marginHorizontal: 18,

  },
  pauseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 35,
    width: 156,
    height: 54,
    borderWidth: 1,
    borderColor: '#7c94b0',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#909090',
    width: 156,
    height: 54,
    borderRadius: 35,
  },
  modalView: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalLineView: {
    width: 35,
    height: 2,
    backgroundColor: '#8b98a8',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  modalButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#193250',
    margin: '3%',
    borderRadius: 25,
    width:330,
    height:56
  },
});
