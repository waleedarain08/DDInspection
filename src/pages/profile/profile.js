import React, {Component, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  Pressable,
  Dimensions,
  ScrollView,
  BackHandler,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal';
import { ButtonView } from '../../components';


export  function Profile({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <View style={styles.container}>
    <ScrollView
      style={{
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#ffffff',
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, flexGrow: 1}}>
        <View style={{paddingVertical: 25, paddingHorizontal: 20,flex:1}}>
          <Text style={{fontSize: 12, color: '#989da3', paddingBottom: 2,fontFamily: "OpenSans-Regular"}}>
            "Thank you for handling this inspection."
          </Text>
          <Text
            style={{fontSize: 20, fontWeight: '#3f434e',paddingVertical:10,fontFamily: "OpenSans-Bold"}}>
           "Please confirm the following:"
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#f4f4f4',
            paddingVertical: 12,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../../assets/downloadded.png')}
            />
          </View>
          <View style={{flex: 9}}>
            <Text style={styles.textProperty}>
              You are at the correct property.101 main street Atlanta GA 12345
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            backgroundColor: '#f4f4f4',
            paddingVertical: 12,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={styles.logo}
              source={require('../../assets/downloadded.png')}
            />
          </View>
          <View style={{flex: 9}}>
            <Text style={styles.textProperty}>
              Your car is parked in safe location. if not please make sure it is
              and then proceed
            </Text>
          </View>
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 20,backgroundColor:"#f4f4f4"}}>
          <Text style={{color: '#666b71',fontSize:12,fontWeight:"600",fontFamily: "OpenSans-Sami-Bold"}}>
            This property is accessible using the provided instructions. if it
            is not accessible please contact (in the order):
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', paddingVertical: 10,backgroundColor:"#F9F9F9"}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.circle}></View>
            </View>
            <View style={{flex: 9}}>
              <Text style={styles.adjacent}>
                The tenant, if the tenant contact information is in the access instruction
                (above)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10,backgroundColor:"#F9F9F9"}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.circle}></View>
            </View>
            <View style={{flex: 9}}>
              <Text style={styles.adjacent}>
                The selling agent, Sue Smith at 606-556-1212
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10,backgroundColor:"#F9F9F9"}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.circle}></View>
            </View>
            <View style={{flex: 9}}>
              <Text style={styles.adjacent}>
                Middle office, at 404-522-1956 ext 1516{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingVertical: 20, paddingHorizontal: 20,marginTop:"28%"}}>
        <View>
            <ButtonView
              activeOpacity={0.9}
              onPress={() => navigation.navigate('CheckProperty')}
              style={styles.continueButton}>
              <Text style={{color: '#fff',fontFamily: "OpenSans-Regular"}}>Continue</Text>
            </ButtonView>
          </View>
          <View>
            <ButtonView
              activeOpacity={0.9}
              onPress={() => setModalVisible(true)}
              style={styles.pouseButton}>
              <Text style={{fontFamily: "OpenSans-Regular"}}>Cancel</Text>
            </ButtonView>
          </View>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textProperty: {
    color: '#7b7f88',fontFamily: "OpenSans-Regular"
  },
  locationDetail: {
    color: '#676a71',
    fontWeight: '600',
  },

  circle: {
    backgroundColor: '#183150',
    padding: 2,
    width: 5,
    height: 1,
    borderRadius: 20,
  },
  adjacent: {
    color: '#919eaf',
    fontSize:12,
    fontWeight:"600",
    fontFamily: "OpenSans-Regular"
  },
  pouseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#193250',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: '#193250',
    marginBottom: 10,
    paddingVertical: 18,
    marginVertical: 14,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  view: {
    justifyContent: 'flex-end',
    margin: 0,
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
    paddingVertical: '4%',
    paddingHorizontal: '25%',
    margin: '3%',
    borderRadius: 25,
  },
});
