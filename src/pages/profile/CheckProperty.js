import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, Modal, Button, Pressable, Dimensions, ScrollView } from 'react-native';
import {CheckBox} from 'react-native-elements';

export default function CheckProperty({ navigation }) {
    const [selected, setSelected] = useState(false);
    const [button, setButton] = useState(0);
    const goAhead = () =>{
      if(button){
        navigation.navigate("")
      }else{
        alert("Please select atleast one option.")
      }
    }
    const [dataSource, setDataSource] = useState([
      {
        id: 1,
        title: 'Electric service is activated',
        isSelect: 0,
      },
      {
        id: 2,
        title: 'water service is activated',
        isSelect: 0,
      },
      {
        id: 3,
        title:
          'Gas service is activated if aplicable',
        isSelect: 0,
      },
      {
        id: 4,
        title:
          'Turn on HVAC and leave it running during the inspection',
        isSelect: 0,
      },
      {
        id: 5,
        title: 'Electric service is activated',
        isSelect: 0,
      },
      {
        id: 6,
        title: 'water service is activated',
        isSelect: 0,
      },
      {
        id: 7,
        title:
          'Gas service is activated if aplicable',
        isSelect: 0,
      },
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
        // this.setState({
        //   dataSource: this.state.dataSource,
        // });
      };
    
      const checkButtonStatus = () => {
        dataSource.length==dataSource.filter((obj) => obj.isSelect == 1).length?setButton(1):setButton(0);
      }
    
      const renderItem = data => {
       // console.log(typeof(data.item.selectedClass));
        return (
          <View style={styles.fieldsContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.list, data.item.selectedClass]}
                onPress={() => selectItem(data)}>
                <Image  source={require('../../assets/tick.png')} style={data.item.isSelect?styles.imageSelected:styles.imageUnSelected}></Image>
              </TouchableOpacity>
            <View>
              <Text style={styles.textFields}>{data.item.title}</Text>
            </View>
          </View>
        );
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.begin}>BEGIN INSPECTION</Text>
            </View>
            {/* <ScrollView contentContainerStyle={{ height:700 }} showsVerticalScrollIndicator={false}> */}
                <View style={{ paddingVertical: 10, flex: 1.5}}>
                    <Text style={{ color: "#8f949a" }}>Thank you for handling the due diligance the property</Text>
                    <View style={{paddingVertical:10}}>
                    <Text style={styles.confirmation}>Kindly confirm / do the following:</Text>
                    </View>
                </View>
                <View style={{ flex: 4,paddingTop:30}}>
                    <FlatList
              data={dataSource}
              renderItem={item => renderItem(item)}
              keyExtractor={item => item.id}
              extraData={dataSource}
            />
                </View>
                <View style={{ flex: 2,marginTop:20 }}>
                <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => checkButtonStatus()}
                        style={button?styles.inspectButton:styles.inspectButtonUnSelected}
                        onPress={() => navigation.navigate("InspectionOverview")}
                    >
                        <Text style={{color:"#e3e3e3"}}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => goAhead()}
                        activeOpacity={0.9}
                        style={styles.stopButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{color:"#17324f",fontWeight:"bold"}}>Stop <Text style={{color:"#53657d",fontWeight:"400"}}>- Utilities Not Activated</Text></Text>
                    </TouchableOpacity>
                </View>
            {/* </ScrollView> */}
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
    },
    header:{
        flexDirection:"row",
        paddingVertical:20,
        justifyContent:"space-evenly"
    },
    begin:{
        color:"#5a6577",
        paddingTop:12,
        fontSize:16,
    },
    confirmation: {
        color: "#3c434d",
        fontWeight: "bold",
        fontSize: 24
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    textService: {
        color: "#a2a5ab",
        fontWeight: "500",
    },
    continueButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#909090",
        padding: 18,
        marginHorizontal: 12,
        marginVertical:15,
        borderRadius: 35,
    },
    stopButton:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#ffffff",
        padding: 16,
        marginHorizontal: 12,
        borderRadius: 35,
        borderWidth:1,
        borderColor:"#193250",
    },
    list: {
        paddingVertical: 5,
        marginTop:1,
        flexDirection: 'row',
        backgroundColor: '#cacacb',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
        width:18,
        height:18,
        borderRadius:9,
        backgroundColor:"#f5f6f8",
        borderWidth:0.5,
        borderColor:"#c7c7c7",
      },
      selected: {backgroundColor: '#32d24c',},
      imageSelected:{
        width:10,
        height:10,
        tintColor:"#fff"
      },
      imageUnSelected:{
        width:10,
        height:10,
        tintColor:"#c7c7c7",
      },
      buttonContainer: {
        marginVertical: '15%',
        paddingHorizontal: '6%',
      },
      fieldsContainer: {
        // flexDirection: 'row',
        // paddingHorizontal: '5%',
        // paddingVertical: 15,
        flexDirection: "row", marginTop: 10, paddingHorizontal: 15, paddingBottom: 20,backgroundColor:"#f7f7f7"
      },
      textFields: {
        paddingHorizontal: '5%',
        color: '#7c8089',
        fontSize: 13,
      },
      inspectButton: {
        backgroundColor: '#193250',
        paddingVertical: '5%',
        alignItems: 'center',
        marginVertical:15,
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
      inspectButtonUnSelected: {
        backgroundColor: '#909090',
        paddingVertical: '5%',
        alignItems: 'center',
        marginVertical:15,
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
})
