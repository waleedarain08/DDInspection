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
import {Input, Button, Card, SearchBar} from 'react-native-elements';

export default function InteriorMain({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{height: 900, backgroundColor: '#ffffff'}}>
      <Text
        style={{paddingHorizontal: 10, paddingVertical: 20, color: '#5a5d62'}}>
        Please Confirm You Are Weraing Booties Before Intering The Interior.
      </Text>

      <View style={styles.bathroom}>
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 3}}>
          Bathroom 1
        </Text>
        <View style={{flex: 1}}>
          <Image
            style={styles.delete}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.5}}>
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
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 3}}>
          Bathroom 1
        </Text>
        <View style={{flex: 1}}>
          <Image
            style={styles.delete}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.5}}>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 3}}>
            Kitchen
          </Text>
          <View style={{flex: 1}}>
            <Image
              style={styles.delete}
              source={require('../../assets/group740.png')}
            />
          </View>
          <View style={{flex: 0.5}}>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#ffffff',
          }}>
          <Text style={{flex: 3.5, color: '#797b7f'}}>Suqure Footage</Text>
          <Text style={{flex: 1}}>$0.00</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('ExteriorBack')}
            style={styles.editButtom}>
            <Image
              style={styles.editIcon}
              source={require('../../assets/edit.png')}
            />
            <Text
              style={{color: '#33ae46', textAlign: 'center', paddingTop: 3}}>
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
          }}>
          <Text style={{flex: 3.5, color: '#797b7f'}}>Exhaust Fan</Text>
          <Text style={{flex: 1}}>$0.00</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('ExteriorBack')}
            style={styles.editButtom}>
            <Image
              style={styles.editIcon}
              source={require('../../assets/edit.png')}
            />
            <Text
              style={{color: '#33ae46', textAlign: 'center', paddingTop: 3}}>
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
          }}>
          <Text style={{flex: 3.5, color: '#797b7f'}}>Garbage Disposal</Text>
          <Text style={{flex: 1}}>$0.00</Text>
          <View style={styles.editButtom}>
            <Text
              style={{color: '#ff5454', textAlign: 'center', paddingTop: 3}}>
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
          }}>
          <Text style={{flex: 3.5, color: '#797b7f'}}>Sink</Text>
          <Text style={{flex: 1}}>$0.00</Text>
          <View style={styles.inspectButtom}>
            <Text
              style={{color: '#ff5454', textAlign: 'center', paddingTop: 3}}>
              Inspect
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bathroom}>
        <Text style={{color: '#2b3036', fontWeight: 'bold', flex: 3}}>
          Bathroom 1
        </Text>
        <View style={{flex: 1}}>
          <Image
            style={styles.delete}
            source={require('../../assets/group740.png')}
          />
        </View>
        <View style={{flex: 0.5}}>
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
        <Text style={{textAlign: 'center', color: '#17324f'}}>
          Add New Area +
        </Text>
      </View>
      <View style={styles.total}>
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>
          Tolat{' '}
        </Text>
        <View style={styles.line2}></View>
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>
          $1,070,00
        </Text>
      </View>
      <View style={styles.completeButton}>
        <Text style={{textAlign: 'center', color: '#ffffff'}}>Complete</Text>
      </View>

      <Modal
        // animationIn="slideInUp"
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={600}
        animationOutTiming={600}
        transparent={true}
        isVisible={modalVisible}

        //   onSwipeComplete={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(!modalVisible)}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <Image
            style={styles.modalLogo}
            source={require('../../assets/remove1.png')}
          />
          <Text
            style={{fontWeight: 'bold', fontSize: 20, marginVertical: '2%'}}>
            Delete File?
          </Text>
          <Text style={{color: '#74777e'}}>
            If you proceed, the file will be
          </Text>
          <Text style={{color: '#74777e', paddingBottom: 15}}>
            permanently deleted.
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity
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
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 6,
              }}>
              <Text style={{color: '#193250'}}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: '#193250',
                paddingVertical: 10,
                paddingHorizontal: '18%',
                margin: '3%',
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
              <Text style={{color: '#fff'}}>Yes</Text>
            </TouchableOpacity>
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
  },
  editButtom: {
    backgroundColor: '#ebf7ed',
    width: 70,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Kitchen: {
    backgroundColor: '#f8f9fb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#eeedfb',
    borderRadius: 10,
  },
  delete: {
    width: 14,
    height: 14,
  },
  inspectButtom: {
    backgroundColor: '#ffeeee',
    width: 70,
    height: 26,
  },
  dotted: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginVertical: 8,
    borderStyle: 'dotted',
    borderRadius: 10,
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
    flex: 0.6,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  modalLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  modalButtons: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
