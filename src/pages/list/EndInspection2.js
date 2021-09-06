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
  
  const[alternateImage1, setAlternateImage1] = useState(true);  const changeImage1 = () => {setAlternateImage1 (alternateImage => !alternateImage);}
  const[alternateImage2, setAlternateImage2] = useState(true);  const changeImage2 = () => {setAlternateImage2 (alternateImage => !alternateImage);}
  const[alternateImage3, setAlternateImage3] = useState(true);  const changeImage3 = () => {setAlternateImage3 (alternateImage => !alternateImage);}
  const[alternateImage4, setAlternateImage4] = useState(true);  const changeImage4 = () => {setAlternateImage4 (alternateImage => !alternateImage);}
  const[alternateImage5, setAlternateImage5] = useState(true);  const changeImage5 = () => {setAlternateImage5 (alternateImage => !alternateImage);}
  const[alternateImage6, setAlternateImage6] = useState(true);  const changeImage6 = () => {setAlternateImage6 (alternateImage => !alternateImage);}
  const[alternateImage7, setAlternateImage7] = useState(true);  const changeImage7 = () => {setAlternateImage7 (alternateImage => !alternateImage);}
  const[alternateImage8, setAlternateImage8] = useState(true);  const changeImage8 = () => {setAlternateImage8 (alternateImage => !alternateImage);}
  const[alternateImage9, setAlternateImage9] = useState(true);  const changeImage9 = () => {setAlternateImage9 (alternateImage => !alternateImage);}


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
            <TouchableOpacity activeOpacity={0.8} onPress={changeImage1} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage1 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage1 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
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
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage2} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage2 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage2 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textFields}>
              Close and lock all windows. Close all window shades or curtains
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage3} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage3 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage3 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textFields}>
              Turn off all lights. Double check all appliances are off.
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage4} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage4 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage4 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textFields}>
              Lock all doors. Return keys to lockboxes (if any).
            </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View>
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage5} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage5 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage5 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textFields}>
              Properly dispose of any used booties and gloves.
            </Text>
          </View>
        </View>

        <View style={styles.fieldsContainer}>
          <View>
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage6} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage6 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage6 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
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
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage7} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage7 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage7 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
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
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage8} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage8 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage8 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
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
          <TouchableOpacity activeOpacity={0.8} onPress={changeImage9} hitSlop={{top:15, bottom:15, right:20, left:20}}>
              {alternateImage9 && (<Image source={require('../../assets/arrow03.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
              {!alternateImage9 && (<Image source={require('../../assets/downloadded.png')}
                  style={{width: 22, height: 22, resizeMode: 'contain'}}/>)}
            </TouchableOpacity>
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
          style={styles.inspectButtonEnable}>
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

  inspectButtonEnable: {
    backgroundColor: '#193250',
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
