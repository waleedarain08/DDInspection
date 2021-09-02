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
  const [quality, setQuality] = useState(false);
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
            Please confirmthe property above, then {'\n'}select at least one do
            buy reason and {'\n'}click on "Do Not Buy" to continue.
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
                  source={require('../../assets/downloadded.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to gas stations orautomotive service
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
                  Area is not safe enough toperform the diligence inspection
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
                  source={require('../../assets/downloadded.png')}
                  style={{width: 18, height: 18, resizeMode: 'contain'}}
                />
              </View>
              <View>
                <Text style={styles.textFields}>
                  Adjacent to gas stations orautomotive service
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
                  Area is not safe enough toperform the diligence inspection
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
          <View style={styles.imageCard}>
            <Text style={{fontWeight: '700'}}>Do Not Buy Photos</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View>
                <Image
                  style={styles.cross}
                  source={require('../../assets/group743.png')}
                />
                <Image
                  style={styles.table}
                  source={require('../../assets/table.jpg')}
                />
                <View style={{paddingVertical: 10}}>
                  <Text style={{color: '#7b7e83', fontSize: 12}}>
                    Note:repair-specific
                  </Text>
                  <Text style={{color: '#7b7e83', fontSize: 12}}>
                    photos / video
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('ExteriorBack')}
                    style={styles.editButtom}>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/edit.png')}
                    />
                    <Text
                      style={{
                        color: '#33ae46',
                        textAlign: 'center',
                        paddingTop: 3,
                      }}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Image
                  style={styles.cross}
                  source={require('../../assets/group743.png')}
                />
                <Image
                  style={styles.table}
                  source={require('../../assets/table2.jpg')}
                />
                <View>
                  <View style={{paddingVertical: 10}}>
                    <Text style={{color: '#c7c8cc', fontSize: 12}}>
                      Note:repair-specific{' '}
                    </Text>
                    <Text style={{color: '#c7c8cc', fontSize: 12}}>
                      {' '}
                      photos / video
                    </Text>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.doneButton}>
                    <Text style={{textAlign: 'center', color: '#5d5b66'}}>
                      Done
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View
                  style={{
                    borderStyle: 'dashed',
                    borderRadius: 6,
                    width: 105,
                    height: 100,
                    borderWidth: 1.5,
                    borderColor: '#b0aeb9',
                    backgroundColor: '#fff',
                  }}>
                  <Image
                    style={styles.delete}
                    source={require('../../assets/group740.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#435971',
                      fontSize: 12,
                      paddingVertical: 4,
                    }}>
                    Add Photo
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DoNotBuy')}
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
  imageCard: {
    backgroundColor: '#fcfcfe',
    borderColor: '#f2f3f5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  table: {
    width: 105,
    height: 100,
    borderRadius: 6,
  },
  delete: {
    width: 12,
    height: 12,
    marginTop: '30%',
    marginLeft: '40%',
  },
  cross: {
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 10,
    top: 7,
    left: 80,
  },
  line: {
    backgroundColor: '#c3cad4',
    width: '90%',
    height: 2,
  },
  doneButton: {
    backgroundColor: '#ededef',
    width: 62,
    height: 25,
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  editButtom: {
    backgroundColor: '#ebf7ed',
    width: 72,
    height: 28,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    borderRadius: 5,
  },
  editIcon: {
    width: 12,
    height: 12,
    marginTop: 5,
  },

  buttonContainer: {
    marginVertical: '15%',
    paddingHorizontal: '6%',
  },

  inspectButton: {
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

    elevation: 4,
  },
});
