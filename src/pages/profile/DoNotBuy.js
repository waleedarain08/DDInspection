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

export default function DoNotBuy({navigation}) {
  const [quality, setQuality] = useState(true);
  const [quality2, setQuality2] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={styles.mainContainer}>
        <View style={{padding: '5%', paddingBottom: 30}}>
          <Text
            style={{
              color: '#3c434d',
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 25,
            }}>
            Please confirm the property above, then select at least one do
            buy reason and click on "Do Not Buy" to continue.
          </Text>
        </View>

        {/* 1ST LOCATION TAB SECTIONE */}

        <View style={styles.locationTabContainer}>
          <View style={styles.locationTabText}>
            <Text style={{fontWeight: 'bold', color: '#293036'}}>
              Location Issue
            </Text>
          </View>

          <View style={styles.ratingLineView}></View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality(!quality)}
            style={styles.TabDropDown}>
            <Image
              style={quality ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
        </View>
        {quality && (
          <View style={{paddingVertical: 10, backgroundColor: '#f9f8fd'}}>
            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to gas stations or automotive service
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to dry cleaners or retail centers
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to burned, dilapidated, boarded, abandoned or
                  condemned housing stock
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent properties have asurplus of trash/debris covering the
                  property/lotto an extent it will interfere with leasing
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Area is not safe enough to perform the diligence inspection
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>Not Applicable</Text>
              </View>
            </View>
          </View>
        )}

        {/* 2ND PROPERTY TAB SECTIONE */}

        <View style={styles.propertyTabContainer}>
          <View style={styles.locationTabText}>
            <Text style={{fontWeight: 'bold', color: '#293036'}}>
              Property Issue
            </Text>
          </View>

          <View style={styles.ratingLineView}></View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setQuality2(!quality2)}
            style={styles.TabDropDown}>
            <Image
              style={quality2 ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </TouchableOpacity>
        </View>
        {quality2 && (
          <View style={{paddingVertical: 10, backgroundColor: '#f9f8fd'}}>
            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to gas stations or automotive service
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to dry cleaners or retail centers
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to burned, dilapidated, boarded, abandoned or
                  condemned housing stock
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent properties have asurplus of trash/debris covering the
                  property/lotto an extent it will interfere with leasing
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Area is not safe enough to perform the diligence inspection
                </Text>
              </View>
            </View>

            <View style={styles.fieldsContainer}>
              <View>
                <Image
                  source={require('../../assets/arrow03.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>Not Applicable</Text>
              </View>
            </View>
          </View>
        )}

        {/* 3RD UPLOAD SECTIONE */}

        <View style={styles.uploadSecContainer}>
          <View style={styles.uploadImage}>
            <Image
              style={styles.upload}
              source={require('../../assets/upload.png')}
            />
            <Text style={{color: '#3c434d', paddingVertical: 10}}>
              Deck button / structure <Text style={{color: '#d91614'}}>*</Text>
            </Text>
            <View style={styles.imageButton}>
              <Text style={{color: '#ffffff', fontSize: 13}}>
                Upload Image +
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DoNotBuy')}
            activeOpacity={0.8}
            style={styles.inspectButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
              Do Not Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationTabContainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  propertyTabContainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    paddingVertical: '3%',
    marginTop: '5%',
  },
  locationTabText: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: '8%',
  },
  TabDropDown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingLineView: {
    width: 1.5,
    height: 35,
    backgroundColor: '#dddddd',
  },
  dropdown: {
    width: 14,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#193251',
    transform: [{rotate: '270deg'}],
  },
  transform: {
    width: 14,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#193251',
  },
  fieldsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  textFields: {
    paddingHorizontal: '5%',
    color: '#7c8089',
    fontSize: 13,
  },

  uploadSecContainer: {
    flex: 1,
    marginTop: '5%',
    justifyContent: 'center',
  },

  uploadImage: {
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#909090',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  upload: {
    width: 50,
    height: 50,
    transform: [{rotate: '180deg'}],
    marginVertical: 10,
    tintColor: '#909090',
  },
  imageButton: {
    backgroundColor: '#193250',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: '15%',
    paddingHorizontal: '6%',
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

    elevation: 4,
  },
});
