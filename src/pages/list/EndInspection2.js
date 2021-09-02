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
import {Input, Button, Card, SearchBar} from 'react-native-elements';

export default function EndInspection({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          padding: '5%',
          elevation: 5,
          paddingBottom: 30,
          backgroundColor: '#fff',
        }}>
        <Text style={{color: '#7c8089', fontSize: 12}}>
          Thank you for handling the due diligence for this property.
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          A couple of reminders as
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          you exit the property:
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 40}}>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off A/C. Set the thermostate to 55 to prevent pipes from
              freezing
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Close and lock all windows. Close all window shades or curtains
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off all lights. Double check all appliances are off.
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Lock all doors. Return keys to lockboxes (if any).
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Properly dispose of any used booties and gloves.
            </Text>
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off A/C. Set the thermostate to 55 to prevent pipes from
              freezing
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off A/C. Set the thermostate to 55 to prevent pipes from
              freezing
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off A/C. Set the thermostate to 55 to prevent pipes from
              freezing
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
            <Image
              source={require('../../assets/arrow03.png')}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off A/C. Set the thermostate to 55 to prevent pipes from
              freezing
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EndInspection')}
          activeOpacity={0.8}
          style={styles.inspectButton}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            End Inspection
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fieldsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f8fd',
    alignItems: 'center',
    padding: '6%',
    marginVertical: '1.5%',
  },
  textFields: {
    paddingHorizontal: '5%',
    color: '#7c8089',
  },
  buttonContainer: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },

  inspectButton: {
    backgroundColor: '#909090',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 10,
  },
});
