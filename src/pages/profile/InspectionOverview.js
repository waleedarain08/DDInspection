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
        contentContainerStyle={{ height: 800 }}
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
                // fontWeight: '700',
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
          <View style={styles.card3}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('HomeOverview')}>
              <Text
                style={{
                  color: '#4f5359',
                  textAlign: 'center',
                  fontSize: 10,
                  fontFamily: "OpenSans-Bold"
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
          </View>
          <View style={styles.card4}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('EstimateScope')}>
              <Text
                style={{
                  color: '#4f5359',
                  textAlign: 'center',
                  fontSize: 10,
                  fontFamily: "OpenSans-Bold"
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
          </View>
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
              <Text style={{ flex: 2.5, color: '#84868a',  fontFamily:  "OpenSans-Regular" }}>Exterior Front</Text>
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
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={600}
          animationOutTiming={600}
          transparent={true}
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(!modalVisible)}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <Image
              style={styles.modalLogo}
              source={require('../../assets/group921.png')}
            />
            <Text
              style={{ fontFamily: "OpenSans-Bold", fontSize: 20, marginVertical: '2%' }}>
              Pause Inspection?
            </Text>
            <View>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                maxLength={300}
                placeholder={'Type your reason here'}
                placeholderTextColor={'#a6a9ae'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={styles.modalButtons}>
              <ButtonView
                activeOpacity={0.8}
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  backgroundColor: '#193250',
                  paddingVertical: 10,
                  paddingHorizontal: '25%',
                  marginTop: '3%',
                  borderRadius: 25,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 8,
                }}>
                <Text style={{ color: '#fff', fontFamily: "OpenSans-SemiBold" }}>Done</Text>
              </ButtonView>
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
    fontFamily: "OpenSans-Bold"
  },
  item: {
    color: '#32373d',
    fontFamily: "OpenSans-Bold",    
    flex: 1,
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
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
  },

  modalLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },


  modalButtons: {
    // backgroundColor:"red",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textareaContainer: {
    width: 280,
    height: 100,
    padding: 5,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    marginVertical: '5%',
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 90,
    fontSize: 14,
    color: '#333',
    fontFamily: "OpenSans-Regular"
  },
});
