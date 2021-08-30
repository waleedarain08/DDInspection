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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions';

export function List({navigation}) {
  const [job, setJob] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [rejected, setRejected] = useState(false);

  handleJob = topBar => {
    setJob(1);
    setCompleted(0);
    setRejected(0);
  };
  handleCompleted = topBar => {
    setJob(0);
    setCompleted(1);
    setRejected(0);
  };
  handleRejected = topBar => {
    setJob(0);
    setCompleted(0);
    setRejected(1);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginHorizontal: 15}}>
        <TouchableOpacity
          onPress={() => handleJob()}
          activeOpacity={0.8}
          style={job ? styles.topBar : styles.topBar2}>
          <Text style={job ? styles.topBarText : styles.topBarText2}>
            All Jobs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCompleted()}
          activeOpacity={0.8}
          style={completed ? styles.topBar : styles.topBar2}>
          <Text style={completed ? styles.topBarText : styles.topBarText2}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRejected()}
          activeOpacity={0.8}
          style={rejected ? styles.topBar : styles.topBar2}>
          <Text style={rejected ? styles.topBarText : styles.topBarText2}>
            Rejected
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 40}}>

        {/* SECTION==1 */}

        <View style={styles.sectionContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/house3.jpg')}
              style={styles.sectionImage}
            />
          </View>
          <View style={{flex: 2, marginLeft:"8%"}}>
            <View
              style={{
                backgroundColor: '#f26521',
                flexDirection: 'row',
                marginRight: "35%",
                padding: "3%",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: '#fff', fontSize: 10}}>
                Feb 16 - 11:30AM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: "4%",
              }}>
              <Image
                source={require('../../assets/location.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                4317 Masonic Drive Fort, 4116 Pike Street San Diego, California
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop:"4%",

              }}>
              <Image
                source={require('../../assets/infoSquare.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                The tenant Sue Smith (415-555-1212) was contacted on 1/22/21.
                She will be there from 9-11AM on 1/26/21.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.resumeButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              Resume
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.detailButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBorder}></View>

        {/* SECTION==2 */}

        <View style={styles.sectionContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/house1.jpg')}
              style={styles.sectionImage}
            />
          </View>
          <View style={{flex: 2, marginLeft:"8%"}}>
            <View
              style={{
                backgroundColor: '#bd0000',
                flexDirection: 'row',
                marginRight: "35%",
                padding: "3%",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: '#fff', fontSize: 10}}>
              Mar 16 - 2:30PM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: "4%",
              }}>
              <Image
                source={require('../../assets/location.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                4317 Masonic Drive Fort, 4116 Pike Street San Diego, California
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop:"4%",

              }}>
              <Image
                source={require('../../assets/infoSquare.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                The tenant Sue Smith (415-555-1212) was contacted on 1/22/21.
                She will be there from 9-11AM on 1/26/21.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.inspectButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
              Inspect Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.detailButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBorder}></View>

        {/* SECTION==3 */}

        <View style={styles.sectionContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/house3.jpg')}
              style={styles.sectionImage}
            />
          </View>
          <View style={{flex: 2, marginLeft:"8%"}}>
            <View
              style={{
                backgroundColor: '#f26521',
                flexDirection: 'row',
                marginRight: "35%",
                padding: "3%",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: '#fff', fontSize: 10}}>
              Feb 17 - 9:00AM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: "4%",
              }}>
              <Image
                source={require('../../assets/location.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                4317 Masonic Drive Fort, 4116 Pike Street San Diego, California
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop:"4%",

              }}>
              <Image
                source={require('../../assets/infoSquare.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                The tenant Sue Smith (415-555-1212) was contacted on 1/22/21.
                She will be there from 9-11AM on 1/26/21.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.inspectButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            Inspect Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.detailButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBorder}></View>

        {/* SECTION==4 */}

       <View style={styles.sectionContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/house1.jpg')}
              style={styles.sectionImage}
            />
          </View>
          <View style={{flex: 2, marginLeft:"8%"}}>
            <View
              style={{
                backgroundColor: '#f26521',
                flexDirection: 'row',
                marginRight: "35%",
                padding: "3%",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: '#fff', fontSize: 10}}>
                Feb 16 - 11:30AM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: "4%",
              }}>
              <Image
                source={require('../../assets/location.png')}
                style={{height:14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                4317 Masonic Drive Fort, 4116 Pike Street San Diego, California
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop:"4%",

              }}>
              <Image
                source={require('../../assets/infoSquare.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                The tenant Sue Smith (415-555-1212) was contacted on 1/22/21.
                She will be there from 9-11AM on 1/26/21.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.inspectButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            Inspect Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.detailButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBorder}></View>

        {/* SECTION==2 */}

        <View style={styles.sectionContainer}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/house3.jpg')}
              style={styles.sectionImage}
            />
          </View>
          <View style={{flex: 2, marginLeft:"8%"}}>
            <View
              style={{
                backgroundColor: '#bd0000',
                flexDirection: 'row',
                marginRight: "35%",
                padding: "3%",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{
                  height: 14,
                  width: 14,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{color: '#fff', fontSize: 10}}>
              Mar 16 - 2:30PM
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: "4%",
              }}>
              <Image
                source={require('../../assets/location.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                4317 Masonic Drive Fort, 4116 Pike Street San Diego, California
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop:"4%",

              }}>
              <Image
                source={require('../../assets/infoSquare.png')}
                style={{height: 14, width: 14, resizeMode: 'contain'}}
              />
              <Text style={{color: '#9ea1aa', fontSize: 10, paddingLeft: "5%"}}>
                The tenant Sue Smith (415-555-1212) was contacted on 1/22/21.
                She will be there from 9-11AM on 1/26/21.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.inspectButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            Inspect Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.detailButton}>
            <Text style={{color: '#193250', fontWeight: 'bold', fontSize: 12}}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBorder}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#193250',
    paddingVertical: "5%",
  },
  topBar2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5eaf0',
    paddingVertical: "5%",
  },
  topBarText: {
    color: '#193250',
    fontSize: 14,
    fontWeight: '700',
  },
  topBarText2: {
    color: '#364b65',
    fontSize: 14,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: "5%",
  },
  imageView: {
    flex: 1.2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionImage: {
    height: 120,
    width: 130,
    borderRadius: 5,
  },
  resumeButton: {
    paddingHorizontal: "16%",
    paddingVertical: "3%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#e5eaf0',
  },

  inspectButton: {
    paddingHorizontal: "12%",
    paddingVertical: "3%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#193250',
  },

  detailButton: {
    paddingHorizontal: "12%",
    paddingVertical: "2.5%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: '#193250',
    backgroundColor: '#ffffff',
  },
  sectionBorder: {
    borderBottomWidth: 3,
    borderBottomColor: '#e5eaf0',
    marginTop: "5%",
    marginBottom: "2%",
  },
});
