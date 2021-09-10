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
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EndInspection({navigation}) {
  const [button, setButton] = useState(0);
  const [selected, setSelected] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      title: 'Turn off A/C. Set the thermostate to 55 to prevent pipes from freezing',
      isSelect: 0,
    },
    {
      id: 2,
      title: 'Close and lock all windows. Close all window shades or curtains',
      isSelect: 0,
    },
    {
      id: 3,
      title:
        'Turn off all lights. Double check all appliances are off.',
      isSelect: 0,
    },
    {
      id: 4,
      title:
        'Lock all doors. Return keys to lockboxes (if any).',
      isSelect: 0,
    },
    {
      id: 5,
      title: 'Properly dispose of any used booties and gloves.',
      isSelect: 0,
    },
    // {
    //   id: 6,
    //   title: 'Turn off A/C. Set the thermostate to 55 to prevent pipes from freezing',
    //   isSelect: 0,
    // },
    // {
    //   id: 7,
    //   title: 'Area is not safe enough to perform the diligence inspection',
    //   isSelect: 0,
    // },
  ]);


  const selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = dataSource.findIndex(item => data.item.id === item.id);

    dataSource[index] = data.item;

    setDataSource(dataSource);
    setSelected(!selected);
    checkButtonStatus();
  };

  const checkButtonStatus = () => {
    dataSource.length==dataSource.filter((obj) => obj.isSelect == 1).length?setButton(1):setButton(0);
  }


  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#fff',
        height: 10,
      }}
    />
)
const goAhead = () =>{
  if(button){
    navigation.navigate("")
  }else{
    alert("Please select all fields to continue")
  }
}

  const renderItem = data => {
    return (

        <TouchableOpacity  activeOpacity={0.8} onPress={() => selectItem(data)} style={styles.fieldsContainer}>
          <View style={[styles.list, data.item.selectedClass]}>
            <Image  source={require('../../assets/tick.png')} style={data.item.isSelect?styles.imageSelected:styles.imageUnSelected}></Image>
          </View>
        <View>
          <Text style={styles.textFields}>{data.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };




  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          padding: '5%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,      
          elevation: 1,
          backgroundColor: '#fff',
        }}>
        <Text style={{fontFamily:"OpenSans-Regular",color: '#7c8089', fontSize: 12, }}>
          "Thank you for handling this inspection"
        </Text>       
        <Text style={{fontFamily:"OpenSans-Bold", fontSize: 25, marginVertical:10}}>
          "Reminders as you exit:"
        </Text>
      </View>
          <View style={{backgroundColor: '#f9f8fd', marginBottom: 5, Height:"68%"}}>
              <FlatList
                data={dataSource}
                ItemSeparatorComponent={renderSeparator} 
                showsVerticalScrollIndicator={false}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id}
                extraData={dataSource}
              />
           </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => goAhead()}
          // onPress={() => navigation.navigate('EndInspection2')}
          activeOpacity={0.8}
          style={button?styles.inspectButtonEnable:styles.inspectButtonDisable}>
          <Text style={{color: '#fff', fontFamily:"OpenSans-Bold",  fontSize: 14}}>
            End Inspection
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    padding: 15,
    marginBottom:2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.65,

    elevation: 2,
  },
    textFields: {
    paddingHorizontal: '5%',
    color: '#7c8089',
    fontFamily:"OpenSans-Regular",
    fontSize:14
  },

  buttonContainer: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    marginBottom: '2%',
  },  
  inspectButtonDisable: {
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
  list: {
    flexDirection: 'row',
    backgroundColor: '#cacacb',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    width:22,
    height:22,
    borderRadius:11,
    backgroundColor:"#f5f6f8",
    borderWidth:1,
    borderColor:"#c7c7c7",
  },
  selected: {
    backgroundColor: '#32d24c',
    borderWidth:0,
},

  imageSelected:{
    width:12,
    height:12,
    tintColor:"#fff"
  },
  imageUnSelected:{
    width:12,
    height:12,
    tintColor:"#c7c7c7",
  }
});
