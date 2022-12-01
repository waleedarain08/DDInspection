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
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { ButtonView } from '../../components';
export default function InteriorMain({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [quality, setQuality] = useState(true);
  const [quality1, setQuality1] = useState(true);
  const [quality2, setQuality2] = useState(true);
  const [quality3, setQuality3] = useState(true);

  return (
    <ScrollView
      contentContainerStyle={{height: 850, backgroundColor: '#ffffff'}}>
      <Text
        style={{paddingHorizontal: 10, paddingVertical: 20,paddingLeft:20, color: '#5a5d62',fontWeight:"700",fontFamily:"OpenSans-bold"}}>
        Please Confirm You Are Wearing Booties Before Entering The Interior.
      </Text>

      <View style={styles.bathroom}>
      <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality(!quality)}
            style={quality ? styles.TabDropDown : styles.TabDropDown2}>
            <Image
              style={quality ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 4,paddingTop:2,fontFamily:"OpenSans-Regular"}}>
          Bathroom 1
        </Text>
        <View style={{flex: 0.5}}>
          <Image
            style={styles.plus}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.4}}>
          <View
            style={{backgroundColor: '#e8e9eb', width: 1, height: 25}}></View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top:15, bottom:15, right:20, left:20}}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.delete}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bathroom}>
      <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality1(!quality1)}
            style={quality1? styles.TabDropDown : styles.TabDropDown2}>
            <Image
              style={quality1 ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 4,paddingTop:2,fontFamily:"OpenSans-Regular"}}>
          Bathroom 2
        </Text>
        <View style={{flex: 0.5}}>
          <Image
            style={styles.plus}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.4}}>
          <View
            style={{backgroundColor: '#e8e9eb', width: 1, height: 25}}></View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top:15, bottom:15, right:20, left:20}}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.delete}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Kitchen}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:10,paddingVertical:10,alignItems:"center"}}>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality2(!quality2)}
            style={quality2 ? styles.TabDropDown : styles.TabDropDown2}>
            <Image
              style={quality2 ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 4,paddingTop:2,fontFamily:"OpenSans-Regular"}}>
            Kitchen
          </Text>
          <View style={{flex: 0.5}}>
            <Image
              style={styles.plus}
              source={require('../../assets/group740.png')}
            />
          </View>
          <View style={{flex: 0.4}}>
            <View
              style={{backgroundColor: '#e8e9eb', width: 1, height: 25}}></View>
          </View>
          <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top:15, bottom:15, right:20, left:20}}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.delete}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
        </View>
        {/* {&& */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#ffffff',
            paddingHorizontal:10
          }}>
          <Text style={{flex: 3.5, color: '#797b7f',fontFamily:"OpenSans-Regular"}}>Square Footage</Text>
          <Text style={{flex: 1,fontFamily:"OpenSans-Regular"}}>$0.00</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('ExteriorBack')}
            style={styles.editButtom}>
            <Image
              style={styles.editIcon}
              source={require('../../assets/edit.png')}
            />
            <Text
              style={{color: '#33ae46', textAlign: 'center', paddingTop: 3,fontSize:12,fontFamily:"OpenSans-Regular"}}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#ffffff',
            paddingHorizontal:10
          }}>
          <Text style={{flex: 3.5, color: '#797b7f',fontFamily:"OpenSans-Regular"}}>Exhaust Fan</Text>
          <Text style={{flex: 1,fontFamily:"OpenSans-Regular"}}>$0.00</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('ExteriorBack')}
            style={styles.editButtom}>
            <Image
              style={styles.editIcon}
              source={require('../../assets/edit.png')}
            />
            <Text
              style={{color: '#33ae46', textAlign: 'center', paddingTop: 2,fontSize:12,fontFamily:"OpenSans-Regular"}}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#ffffff',
            paddingHorizontal:10
          }}>
          <Text style={{flex: 3.5, color: '#797b7f',fontFamily:"OpenSans-Regular"}}>Garbage Disposal</Text>
          <Text style={{flex: 1,fontFamily:"OpenSans-Regular"}}>$0.00</Text>
          <View style={styles.inspectButtom}>
            <Text
              style={{color: '#ff5454', textAlign: 'center', paddingTop: 2,fontSize:12}}>
              Inspect
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#ffffff',
            paddingHorizontal:10
          }}>
          <Text style={{flex: 3.5, color: '#797b7f',fontFamily:"OpenSans-Regular"}}>Sink</Text>
          <Text style={{flex: 1,fontFamily:"OpenSans-Regular"}}>$0.00</Text>
          <View style={styles.inspectButtom}>
            <Text
              style={{color: '#ff5454', textAlign: 'center', paddingTop: 2,fontSize:12,fontFamily:"OpenSans-Regular"}}>
              Inspect
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bathroom}>
      <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality3(!quality3)}
            style={quality3 ? styles.TabDropDown : styles.TabDropDown2}>
            <Image
              style={quality3 ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 4,paddingTop:2,fontFamily:"OpenSans-Regular"}}>
          Bathroom 2
        </Text>
        <View style={{flex: 0.5}}>
          <Image
            style={styles.plus}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.4}}>
          <View
            style={{backgroundColor: '#e8e9eb', width: 1, height: 25}}></View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top:15, bottom:15, right:20, left:20}}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.delete}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dotted}>
        <Text style={{textAlign: 'center', color: '#17324f',fontFamily:  "OpenSans-Regular"}}>
          Add New Area +
        </Text>
      </View>
      <View style={styles.total}>
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18,fontFamily:"OpenSans-Regular"}}>
          Total
        </Text>
        <View style={styles.line2}></View>
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18,fontFamily:"OpenSans-Regular"}}>
          $1,070,00
        </Text>
      </View>
      <ButtonView activeOpacity={0.9} style={styles.completeButton}>
        <Text style={{textAlign: 'center', color: '#ffffff',fontFamily:"OpenSans-Regular",}}>Complete</Text>
      </ButtonView>

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
            source={require('../../assets/remove1.png')}
          />
          <Text
            style={{fontFamily:"OpenSans-Bold", fontSize: 20, marginVertical: '2%', fontFamily:"OpenSans-Regular",fontWeight:"bold"}}>
            Delete File?
          </Text>
          <Text style={{color: '#74777e', fontFamily:"OpenSans-Regular"}}>
            If you proceed, the file will be
          </Text>
          <Text style={{color: '#74777e', fontFamily:"OpenSans-Regular", paddingBottom: 15}}>
            permanently deleted.
          </Text>

          <View style={styles.modalButtons}>
            <ButtonView
              activeOpacity={0.8}
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#c9ccd3',
                paddingVertical: 8.5,
                paddingHorizontal: '18%',
                margin: '3%',
                borderRadius: 25,
                fontFamily:"OpenSans-Regular",
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 6,
              }}>
              <Text style={{color: '#193250',fontFamily:  "OpenSans-Regular"}}>No</Text>
            </ButtonView>

            <ButtonView
             onPress={() => setModalVisible(!modalVisible)}
              activeOpacity={0.8}
              style={{
                backgroundColor: '#193250',
                paddingVertical: 10,
                paddingHorizontal: '18%',
                margin: '3%',
                fontFamily:"OpenSans-Regular",
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
              <Text style={{color: '#fff', fontFamily:"OpenSans-SemiBold"}}>Yes</Text>
            </ButtonView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  bathroom: {
    flexDirection: 'row',
    backgroundColor: '#f2f3f5',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems:"center"
  },
  editButtom: {
    backgroundColor: '#ebf7ed',
    width: 60,
    height: 24 ,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Kitchen: {
    backgroundColor: '#f8f9fb',
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#eeedfb',
    borderRadius: 10,
  },
  TabDropDown: {
    flex: 0,
    alignItems: 'center',
    backgroundColor:"#193250",
    borderRadius:10,
    width:20,
    height:20,
    marginRight:10,
    marginTop:3,
    justifyContent:"center"
  },
  TabDropDown2:{
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#909090',
    borderRadius:10,
    width:20,
    height:20,
    marginRight:10,
    marginTop:4,
    justifyContent:"center"
  },
  dropdown: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    tintColor: '#ffffff',
    transform: [{rotate: '270deg'}],
  },
  transform: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  delete: {
    width: 14,
    height: 14,
    marginRight:10
  },
  plus:{
    width: 14,
    height: 14,
  },
  inspectButtom: {
    backgroundColor: '#ffeeee',
    width: 60,
    height: 24,
  },
  dotted: {
    borderWidth: 0.8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginVertical: 8,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor:"#909090"
  },
  line2: {
    width: 2,
    height: 35,
    backgroundColor: '#0b1723',
    marginLeft: '38%',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#193250',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  completeButton: {
    backgroundColor: '#909090',
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  editIcon: {
    width: 12,
    height: 12,
    marginTop: 5,
  },

  modalView: {
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:30
  },

  modalLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  modalButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
