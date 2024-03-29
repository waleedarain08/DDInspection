import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput, ScrollView,
  TouchableOpacity,
  Flatlist,
} from 'react-native';
import { ButtonView } from '../../components';
import { imagePicker } from '../../helper/utils';


export default function DoNotBuy({ navigation }) {

  const [quality, setQuality] = useState(true);
  const [quality2, setQuality2] = useState(false);
  const [selected, setSelected] = useState(false);
  const [button, setButton] = useState(0);
  const [reason, setReason] = useState([{ title: "abc", path: require('../../assets/table.jpg') }, { title: "abc", path: require('../../assets/table2.jpg') },])
  const imageSelector = async () => {
    try {
      const url = await imagePicker(true)
      setReason([...reason, ...url])
      console.log("url", url)
    } catch (error) {

    }
  }
  const[loop, setLoop] = useState (null)
  // <===LOCATION DATA ARRAY===>  
  const [locationDataSource, setLocationDataSource] = useState([
    {
      id: 1,
      title: 'Adjacent to gas stations or automotive service',
      isSelect: 0,
    },
    {
      id: 2,
      title: 'Adjacent to dry cleaners or retail centers',
      isSelect: 0,
    },
    {
      id: 3,
      title:
        'Adjacent to burned, dilapidated, boarded, abandoned or condemned housing stock',
      isSelect: 0,
    },
    {
      id: 4,
      title:
        'Adjacent properties have asurplus of trash/debris covering the property/lotto an extent it will interfere with leasing',
      isSelect: 0,
    },
    {
      id: 5,
      title: 'Area is not safe enough to perform the diligence inspection',
      isSelect: 0,
    },
    {
      id: 6,
      title: 'Not Applicable',
      isSelect: 0,
    },
  ]);

  // <===PROPERTY DATA ARRAY===>
  const [propertyDataSource, setPropertyDataSource] = useState([
    {
      id: 1,
      title: 'Adjacent to gas stations or automotive service',
      isSelect: 0,
    },
    {
      id: 2,
      title: 'Adjacent to dry cleaners or retail centers',
      isSelect: 0,
    },
    {
      id: 3,
      title:
        'Adjacent to burned, dilapidated, boarded, abandoned or condemned housing stock',
      isSelect: 0,
    },
    {
      id: 4,
      title:
        'Adjacent properties have asurplus of trash/debris covering the property/lotto an extent it will interfere with leasing',
      isSelect: 0,
    },
    {
      id: 5,
      title: 'Area is not safe enough to perform the diligence inspection',
      isSelect: 0,
    },
    {
      id: 6,
      title: 'Not Applicable',
      isSelect: 0,
    },
  ]);


  // <===LOCATION DATA SOURCE===>

  const selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = locationDataSource.findIndex(item => data.item.id === item.id);

    locationDataSource[index] = data.item;

    setLocationDataSource(locationDataSource);
    setSelected(!selected);
    checkButtonStatus();
  };

  const checkButtonStatus = () => {
    var locationObj = locationDataSource.find(o => o.isSelect == 1);
    var propertyObj = propertyDataSource.find(o => o.isSelect == 1);

    typeof (locationObj) === "undefined" && typeof (propertyObj) === "undefined" ? setButton(0) : setButton(1);
  }

  const renderItem = data => {
    return (

      <ButtonView isRound={1} activeOpacity={0.8} onPress={() => selectItem(data)} style={styles.fieldsContainer}>
        <View style={[styles.list, data.item.selectedClass]}>
          <Image source={require('../../assets/tick.png')} style={data.item.isSelect ? styles.imageSelected : styles.imageUnSelected}></Image>
        </View>
        <View>
          <Text style={styles.textFields}>{data.item.title}</Text>
        </View>
      </ButtonView>
    );
  };


  // <===PROPERTY DATA SOURCE===>

  const selectItem2 = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = propertyDataSource.findIndex(item => data.item.id === item.id);

    propertyDataSource[index] = data.item;

    setPropertyDataSource(propertyDataSource);
    setSelected(!selected);
    checkButtonStatus();
  };

  const goAhead = () => {
    if (button) {
      navigation.navigate("")
    } else {
      alert("Please select atleast one option.")
    }
  }

  const renderItem2 = data => {
    return (

      <ButtonView isRound={1} activeOpacity={0.8} onPress={() => selectItem2(data)} style={styles.fieldsContainer}>
        <View style={[styles.list, data.item.selectedClass]}>
          <Image source={require('../../assets/tick.png')} style={data.item.isSelect ? styles.imageSelected : styles.imageUnSelected}></Image>
        </View>
        <View>
          <Text style={styles.textFields}>{data.item.title}</Text>
        </View>
      </ButtonView>

    );
  };

  console.log("reason image", reason)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.mainContainer}>
        <View style={{ padding: '5%', paddingBottom: 30 }}>
          <Text
            style={{
              color: '#3c434d',
              fontFamily: "OpenSans-Bold",
              fontSize: 17
            }}>
            Please confirm the property above, then select at least one do
            buy reason and click on "Do Not Buy" to continue.
          </Text>
        </View>

        {/* 1ST LOCATION TAB SECTIONE */}

        <View style={styles.locationTabContainer}>
          <View style={styles.locationTabText}>
            <Text style={{ fontFamily: "OpenSans-Bold", color: '#293036' }}>
              Location Issue
            </Text>
          </View>

          <View style={styles.ratingLineView}></View>

          <ButtonView
            activeOpacity={0.5}
            isRound={0}
            onPress={() => setQuality(!quality)}
            style={styles.TabDropDown}>
            <Image
              style={quality ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </ButtonView>
        </View>
        {quality && (
          <View style={{ paddingVertical: "3%", backgroundColor: '#f9f8fd' }}>
            <FlatList
              data={locationDataSource}
              renderItem={item => renderItem(item)}
              keyExtractor={item => item.id}
              extraData={locationDataSource}
            />
          </View>
        )}

        {/* 2ND PROPERTY TAB SECTIONE */}

        <View style={styles.propertyTabContainer}>
          <View style={styles.locationTabText}>
            <Text style={{ fontFamily: "OpenSans-Bold", color: '#293036' }}>
              Property Issue
            </Text>
          </View>

          <View style={styles.ratingLineView}></View>

          <ButtonView
            activeOpacity={0.5}
            isRound={0}
            onPress={() => setQuality2(!quality2)}
            style={styles.TabDropDown}>
            <Image
              style={quality2 ? styles.transform : styles.dropdown}
              source={require('../../assets/down-arrow.png')}
            />
          </ButtonView>
        </View>
        {quality2 && (
          <View style={{ paddingVertical: 10, backgroundColor: '#f9f8fd' }}>
            <FlatList
              data={propertyDataSource}
              renderItem={item => renderItem2(item)}
              keyExtractor={item => item.id}
              extraData={propertyDataSource}
            />
          </View>
        )}

        {/* 3RD UPLOAD SECTIONE */}

        <View style={styles.uploadSecContainer}>
          <View style={styles.imageCard}>
            <Text style={{ fontFamily: "OpenSans-Bold", paddingLeft: "2.5%" }}>Do Not Buy Photos</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 10,
              }}>
              <FlatList
                data={reason}
                keyExtractor={(item, index) => index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  console.log("item image", item)
                  var type = typeof item.path
                  return (
                    <>
                      <View>
                        <Image
                          style={styles.cross}
                          source={require('../../assets/group743.png')}
                        />
                        <Image
                          style={styles.table}
                          source={type == "string" ? { uri: item.path } : item.path}
                        />
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ paddingVertical: 10, flex: 1, }}>

                            {index == loop  ? (
                              <TextInput
                                style={styles.textArea1}
                                underlineColorAndroid="transparent"
                                placeholder="Note:repair-specific photos / video"
                                placeholderTextColor="#c7c8cc"
                                numberOfLines={10}
                                multiline={true}
                              />
                            ) :
                              (
                                <>
                                  <Text
                                    style={{
                                      color: '#c7c8cc',
                                      fontSize: 12,
                                      fontFamily: 'OpenSans-Regular',
                                      width: 105
                                    }}>
                                    Note:repair-specific photos / video
                                  </Text>
                                </>
                              )}
                            {index == loop ? (
                              <TouchableOpacity activeOpacity={0.9} onPress={() => setLoop(null)} style={styles.doneButton}>
                                <Text style={{ textAlign: 'center', fontFamily: "OpenSans-SemiBold", color: '#5d5b66' }}>
                                  Done
                                </Text>
                              </TouchableOpacity>

                            ) : (
                              <ButtonView
                                onPress={() => setLoop(index)}
                                activeOpacity={0.9}
                                style={styles.editButtom}>
                                <Image
                                  style={styles.editIcon}
                                  source={require('../../assets/edit.png')}
                                />
                                <Text
                                  style={{
                                    color: '#33ae46',
                                    fontFamily: "OpenSans-SemiBold",
                                    textAlign: 'center',
                                    paddingTop: 3,
                                  }}>
                                  Edit
                                </Text>
                              </ButtonView>
                            )}

                          </View>

                          <View style={{ flex: 1 }}></View>
                        </View>
                      </View>

                    </>
                  )
                }}
              >
              </FlatList>
              <TouchableOpacity
                onPress={imageSelector}
                activeOpacity={0.9}
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
                    fontFamily: "OpenSans-SemiBold",
                    fontSize: 12,
                    paddingVertical: 4,
                  }}>
                  Add Photo
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonView
            onPress={() => goAhead()}
            activeOpacity={0.8}
            style={button ? styles.DoNotButtonEnable : styles.DoNotButtonDisable}>
            <Text style={{ color: '#fff', fontFamily: "OpenSans-Bold", fontSize: 14 }}>
              Do Not Buy
            </Text>
          </ButtonView>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  propertyTabContainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    paddingVertical: '3%',
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
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
    transform: [{ rotate: '270deg' }],
  },
  transform: {
    width: 14,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#193251',
  },
  fieldsContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: 15,
  },
  textFields: {
    paddingHorizontal: '5%',
    color: '#7c8089',
    fontFamily: "OpenSans-Regular",
    fontSize: 12,
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
    marginHorizontal: 5.5
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
  textArea: {
    height: 60,
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#b3bbc6"
  },
  textArea1: {
    height: 60,
    fontSize: 12,
    width: 105
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
    marginVertical: 10,
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

  DoNotButtonEnable: {
    backgroundColor: '#193250',
    paddingVertical: '4%',
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
  DoNotButtonDisable: {
    backgroundColor: '#909090',
    paddingVertical: '4%',
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
  list: {
    flexDirection: 'row',
    backgroundColor: '#cacacb',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    width: 19,
    height: 19,
    borderRadius: 9.5,
    backgroundColor: "#f5f6f8",
    borderWidth: 0.5,
    borderColor: "#c7c7c7",
  },
  selected: {
    backgroundColor: '#32d24c',
    borderWidth: 0,
  },

  imageSelected: {
    width: 10,
    height: 10,
    tintColor: "#fff"
  },
  imageUnSelected: {
    width: 10,
    height: 10,
    tintColor: "#c7c7c7",
  }
});





