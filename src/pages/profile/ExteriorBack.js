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
import {Input, Button, Card, CheckBox} from 'react-native-elements';
import {ButtonView} from '../../components';

export default function ExteriorBack({navigation}) {
  const [quality, setQuality] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [quality1, setQuality1] = useState(false);
  const [quality2, setQuality2] = useState(false);
  const [quality3, setQuality3] = useState(false);
  const [quality4, setQuality4] = useState(false);
  const [radio, setRadio] = useState(true);

  (handleRadio = circle => {
    setQuality1(1);
    setQuality2(0);
    setQuality3(0);
    setQuality4(0);
  }),
    (handleRadio1 = circle => {
      setQuality1(0);
      setQuality2(1);
      setQuality3(0);
      setQuality4(0);
    }),
    (handleRadio2 = circle => {
      setQuality1(0);
      setQuality2(0);
      setQuality3(1);
      setQuality4(0);
    }),
    (handleRadio3 = circle => {
      setQuality1(0);
      setQuality2(0);
      setQuality3(0);
      setQuality4(1);
    });
  const [tick, setTick] = useState(true);
  const [tick1, setTick1] = useState(true);
  const [tick2, setTick2] = useState(true);
  const [tick3, setTick3] = useState(true);
  const [tick4, setTick4] = useState(true);
  const [tick5, setTick5] = useState(true);
  const [tick6, setTick6] = useState(true);
  const [add1, setAdd1] = useState(false);
  const [add2, setAdd2] = useState(false);
  const [add3, setAdd3] = useState(false);
  const [add4, setAdd4] = useState(false);
  const [add5, setAdd5] = useState(false);
  const [add6, setAdd6] = useState(false);
  handleAdd1 = circle => {
    setAdd1(1);
    setAdd2(0);
  };
  handleAdd2 = circle => {
    setAdd1(0);
    setAdd2(1);
  };
  handleAdd3 = circle => {
    setAdd3(1);
    setAdd4(0);
  };
  handleAdd4 = circle => {
    setAdd3(0);
    setAdd4(1);
  };
  handleAdd5 = circle => {
    setAdd5(1);
    setAdd6(0);
  };
  handleAdd6 = circle => {
    setAdd5(0);
    setAdd6(1);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            color: '#3c434d',
            fontWeight: 'bold',
            fontFamily: 'OpenSans-Regular',
            fontSize: 20,
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}>
          Deck / Porch
        </Text>
        <Text
          style={{
            color: '#173250',
            fontWeight: 'bold',
            paddingHorizontal: 20,
            fontFamily: 'OpenSans-Regular',
          }}>
          Photos / Video
        </Text>
        <Text
          style={{
            color: '#a7abae',
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontFamily: 'OpenSans-Regular',
          }}>
          Note:repair-specific photos / video should be added in the estimate
          itself.
        </Text>
        <View style={styles.imageCard}>
          <Text style={{paddingLeft:20}}>
            Top of deck, wide angle<Text style={{color: '#d91614'}}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
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
                <Text
                  style={{
                    color: '#7b7e83',
                    fontSize: 12,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Note:repair-specific
                </Text>
                <Text
                  style={{
                    color: '#7b7e83',
                    fontSize: 12,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {' '}
                  photos / video
                </Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.editButtom}>
                  <Image
                    style={styles.editIcon}
                    source={require('../../assets/edit.png')}
                  />
                  <Text
                    style={{
                      color: '#33ae46',
                      textAlign: 'center',
                      paddingTop: 3,
                      fontFamily: 'OpenSans-Regular',
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
                  <Text
                    style={{
                      color: '#c7c8cc',
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Note:repair-specific{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#c7c8cc',
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    {' '}
                    photos / video
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.doneButton}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#5d5b66',
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Done
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  width: 100,
                  height: 100,
                  borderWidth: 1,
                  borderColor: '#b0aeb9',
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
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Add Photo
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.imageCard}>
          <Text style={{paddingLeft:20}}>
            Top of deck, close up<Text style={{color: '#d91614'}}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
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
                <Text
                  style={{
                    color: '#7b7e83',
                    fontSize: 12,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Note:repair-specific{' '}
                </Text>
                <Text
                  style={{
                    color: '#7b7e83',
                    fontSize: 12,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {' '}
                  photos / video
                </Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.editButtom}>
                  <Image
                    style={styles.editIcon}
                    source={require('../../assets/edit.png')}
                  />
                  <Text
                    style={{
                      color: '#33ae46',
                      textAlign: 'center',
                      paddingTop: 3,
                      fontFamily: 'OpenSans-Regular',
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
                  <Text
                    style={{
                      color: '#c7c8cc',
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Note:repair-specific{' '}
                  </Text>
                  <Text
                    style={{
                      color: '#c7c8cc',
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    {' '}
                    photos / video
                  </Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.doneButton}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#5d5b66',
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Done
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  width: 100,
                  height: 100,
                  borderWidth: 1,
                  borderColor: '#cdccd2',
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
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Add Photo
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.uploadImage}>
          <Image
            style={styles.upload}
            source={require('../../assets/upload.png')}
          />
          <Text
            style={{
              color: '#868990',
              paddingVertical: 10,
              fontFamily: 'OpenSans-Regular',
            }}>
            Deck button / structure <Text style={{color: '#d91614'}}>*</Text>
          </Text>
          <View style={styles.imageButton}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 13,
                fontFamily: 'OpenSans-Regular',
              }}>
              Upload Image +
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#f9f9f9', marginTop: 20}}>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontFamily: 'OpenSans-Regular'}}>Deck Material</Text>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Select one
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleRadio()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Wood
            </Text>
            <TouchableOpacity style={quality1 ? styles.circle : styles.circle2}>
              <View
                style={
                  quality1 ? styles.radioButton : styles.radioButton2
                }></View>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleRadio1()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Vinyl
            </Text>
            <TouchableOpacity style={quality2 ? styles.circle : styles.circle2}>
              <View
                style={
                  quality2 ? styles.radioButton : styles.radioButton2
                }></View>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleRadio2()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Composite
            </Text>
            <TouchableOpacity style={quality3 ? styles.circle : styles.circle2}>
              <View
                style={
                  quality3 ? styles.radioButton : styles.radioButton2
                }></View>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleRadio3()}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Other enter text
            </Text>
            <TouchableOpacity style={quality4 ? styles.circle : styles.circle2}>
              <View
                style={
                  quality4 ? styles.radioButton : styles.radioButton2
                }></View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#f9f9f9', marginVertical: 20}}>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontFamily: 'OpenSans-Regular'}}>Deck Material</Text>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Select all that apply
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setTick(!tick)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Railing
            </Text>
            <TouchableOpacity
              style={tick ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick(!tick)}
                style={tick ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick1(!tick1)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              No Railing
            </Text>
            <TouchableOpacity
              style={tick1 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick1(!tick1)}
                style={tick1 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick2(!tick2)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Composite
            </Text>
            <TouchableOpacity
              style={tick2 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick2(!tick2)}
                style={tick2 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick3(!tick3)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Covered
            </Text>
            <TouchableOpacity
              style={tick3 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick3(!tick3)}
                style={tick3 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick4(!tick4)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Uncovered
            </Text>
            <TouchableOpacity
              style={tick4 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick4(!tick4)}
                style={tick4 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick5(!tick5)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              Stairs
            </Text>
            <TouchableOpacity
              style={tick5 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick5(!tick5)}
                style={tick5 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTick6(!tick6)}
            activeOpacity={0.9}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderColor:"#f4f4f4",
              borderBottomWidth:2
            }}>
            <Text style={{color: '#6a707c', fontFamily: 'OpenSans-Regular'}}>
              No Stairs
            </Text>
            <TouchableOpacity
              style={tick6 ? styles.circleTick : styles.circleTick1}>
              <Image
                onPress={() => setTick(!tick6)}
                style={tick6 ? styles.tickLogo : styles.tickLogo1}
                source={require('../../assets/tick.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#f4f4f4',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Text style={{color: '#000000', fontFamily: 'OpenSans-Regular'}}>
            Note:{' '}
            <Text style={{color: '#8e9196', fontFamily: 'OpenSans-Regular'}}>
              Certain answer choices will prompt you to add an estimate. As you
              add an estimate please pay close attention and added as needed
            </Text>
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#f9f9f9',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#52575d',
              fontWeight: 'bold',
              paddingBottom: 20,
              fontFamily: 'OpenSans-Regular',
            }}>
            Does the deck have rot which makes it unsafe?
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd1()}
            style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => handleAdd1()}
              style={add1 ? styles.circle : styles.circle2}>
              <View
                style={add1 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7c8089',
                paddingLeft: 15,
                fontFamily: 'OpenSans-Regular',
              }}>
              Yes (
              <Text
                style={{
                  color: '#f38550',
                  fontWeight: '600',
                  fontFamily: 'OpenSans-Regular',
                  textDecorationLine: 'underline',
                }}>
                Add Dry Rot Repair
              </Text>
              )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd2()}
            style={{flexDirection: 'row', paddingBottom: 20, paddingTop: 20}}>
            <TouchableOpacity
              onPress={() => handleAdd2()}
              style={add2 ? styles.circle : styles.circle2}>
              <View
                style={add2 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text style={{color: '#7c8089', paddingLeft: 15}}>No</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              width: '100%',
              height: 2,
              marginVertical: 20,
            }}></View>
          <Text
            style={{
              color: '#52575d',
              fontWeight: 'bold',
              paddingBottom: 20,
              fontFamily: 'OpenSans-Regular',
            }}>
            Does the deck appear weathered?
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd3()}
            style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => handleAdd3()}
              style={add3 ? styles.circle : styles.circle2}>
              <View
                style={add3 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7c8089',
                paddingLeft: 15,
                fontFamily: 'OpenSans-Regular',
              }}>
              Yes (
              <Text
                style={{
                  color: '#f38550',
                  fontWeight: '600',
                  fontFamily: 'OpenSans-Regular',
                  textDecorationLine: 'underline',
                }}>
                Add Power Watch Stain/Seal
              </Text>
              )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd4()}
            style={{flexDirection: 'row', paddingBottom: 20, paddingTop: 20}}>
            <TouchableOpacity
              onPress={() => handleAdd4()}
              style={add4 ? styles.circle : styles.circle2}>
              <View
                style={add4 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7c8089',
                paddingLeft: 15,
                fontFamily: 'OpenSans-Regular',
              }}>
              No
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              width: '100%',
              height: 2,
              marginVertical: 20,
            }}></View>
          <Text
            style={{
              color: '#52575d',
              fontWeight: 'bold',
              paddingBottom: 20,
              fontFamily: 'OpenSans-Regular',
            }}>
            Does each deck support have a footer under it?
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd5()}
            style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => handleAdd5()}
              style={add5 ? styles.circle : styles.circle2}>
              <View
                style={add5 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7c8089',
                paddingLeft: 15,
                fontFamily: 'OpenSans-Regular',
              }}>
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleAdd6()}
            style={{flexDirection: 'row', paddingBottom: 20, paddingTop: 20}}>
            <TouchableOpacity
              onPress={() => handleAdd6()}
              style={add6 ? styles.circle : styles.circle2}>
              <View
                style={add6 ? styles.radioButton : styles.radioButton2}></View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7c8089',
                paddingLeft: 15,
                fontFamily: 'OpenSans-Regular',
              }}>
              No Add Deck (
              <Text
                style={{
                  color: '#f38550',
                  fontWeight: '600',
                  fontFamily: 'OpenSans-Regular',
                  textDecorationLine: 'underline',
                }}>
                Footer Support
              </Text>
              )
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{color: '#2b2f38', fontFamily: 'OpenSans-bold',fontWeight:"700"}}>
              Estimate Item
            </Text>
          </View>
          <View style={{backgroundColor: '#f9f9f9', paddingVertical: 20}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
              <View style={{flex: 1.5}}>
                <Text style={{flex: 1, color: '#868991', fontSize: 12}}>
                  Repair Dry Rot, 2 Photos
                </Text>
                {/* <View style={{backgroundColor:"#f38550",width:130,height:2,marginBottom:20}}></View> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#868991',
                    fontWeight: '600',
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  $0.00
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.editButtom2}>
                  <Text
                    style={{
                      color: '#33ae46',
                      textAlign: 'center',
                      paddingTop: 3,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View style={{flex: 1.5}}>
                <Text
                  style={{
                    flex: 1,
                    color: '#868991',
                    fontSize: 12,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Power Wash, Stain/Seal,1 Photo
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#868991',
                    fontWeight: '600',
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  $0.00
                </Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.editButtom2}>
                  <Text
                    style={{
                      color: '#33ae46',
                      textAlign: 'center',
                      paddingTop: 3,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('EstimateItem')}
            >
            <Text
              style={{
                color: '#425871',
                paddingHorizontal: 20,
                fontWeight: 'bold',
                fontFamily: 'OpenSans-Regular',
              }}>
              Add New Item +
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 24,
            backgroundColor: '#fcfcfc',
          }}>
          <Text
            style={{
              color: '#3e434a',
              fontWeight: 'bold',
              fontFamily: 'OpenSans-Regular',
            }}>
            Total Items
          </Text>
          <Text
            style={{
              color: '#3e434a',
              fontWeight: 'bold',
              fontFamily: 'OpenSans-Regular',
            }}>
            $744.95
          </Text>
        </View>
        <ButtonView
          activeOpacity={0.9}
          onPress={() => setQuality(!quality)}
          // style={styles.continueButton}
          style={quality ? styles.continueButton : styles.continueButton2}>
          <Text style={{color: '#e3e3e3', fontFamily: 'OpenSans-Regular'}}>
            Continue
          </Text>
        </ButtonView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  imageCard: {
    backgroundColor: '#fcfcfe',
    borderColor: '#f2f3f5',
    borderWidth: 1,
    padding: 10,
    margin:10
  },
  table: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft:5
  },
  delete: {
    width: 12,
    height: 12,
    marginTop: '30%',
    marginLeft: '40%',
  },
  cross: {
    width: 22,
    height: 22,
    position: 'absolute',
    zIndex: 10,
    top: 10,
    left: 70,
  },
  line: {
    backgroundColor: '#c3cad4',
    width: '90%',
    height: 2,
  },
  doneButton: {
    backgroundColor: '#ededef',
    width: 65,
    height: 25,
    marginVertical: 10,
  },
  editButtom: {
    backgroundColor: '#ebf7ed',
    width: 70,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  editIcon: {
    width: 12,
    height: 12,
    marginTop: 5,
  },
  uploadImage: {
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderColor: '#cdccd2',
  },
  upload: {
    width: 50,
    height: 50,
    transform: [{rotate: '180deg'}],
    marginVertical: 10,
    tintColor: '#9d9ba6',
  },
  imageButton: {
    backgroundColor: '#193250',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginVertical: 10,
  },
  circle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#c3c3c3',
    borderRadius: 20,
    borderColor: '#193250',
  },
  circle2: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#c3c3c3',
    borderRadius: 20,
  },
  radioButton: {
    backgroundColor: '#193250',
    width: 9,
    height: 9,
    borderRadius: 5,
    marginTop: 2.3,
    marginLeft: 2.4,
  },
  radioButton2: {
    backgroundColor: '#ffffff',
    width: 8,
    height: 8,
    borderRadius: 5,
    marginTop: 3,
    marginLeft: 3,
  },
  tickLogo: {
    width: 9,
    height: 9,
    tintColor: '#909090',
  },
  tickLogo1: {
    width: 9,
    height: 9,
    tintColor: '#ffffff',
  },
  circleTick: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#c3c3c3',
    borderRadius: 20,
    borderColor: '#909090',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTick1: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#c3c3c3',
    borderRadius: 20,
    backgroundColor: '#192550',
    borderColor: '#192550',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtom2: {
    backgroundColor: '#ebf7ed',
    width: 70,
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  continueButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#909090',
    padding: 18,
    marginHorizontal: 12,
    marginVertical: 30,
    borderRadius: 35,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#193250',
    padding: 18,
    marginHorizontal: 12,
    marginVertical: 30,
    borderRadius: 35,
  },
});
