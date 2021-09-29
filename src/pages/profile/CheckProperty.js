import React, {Component, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {ButtonView} from '../../components';
import Modal from 'react-native-modal';

export default function CheckProperty({navigation}) {
  const [selected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [button, setButton] = useState(0);
  const goAhead = () => {
    if (button) {
      navigation.navigate('');
    } else {
      alert('Please select atleast one option.');
    }
  };
  const checkList = () => {
    goAhead(true)
     navigation.navigate('InspectionOverview');
  };
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      title: 'Electric service is activated',
      isSelect: 0,
    },
    {
      id: 2,
      title: 'Water service is activated',
      isSelect: 0,
    },
    {
      id: 3,
      title: 'Gas service is activated if applicable',
      isSelect: 0,
    },
    {
      id: 4,
      title: 'Turn on HVAC and leave it running during the inspection.',
      isSelect: 0,
    },
    // {
    //   id: 5,
    //   title: 'Electric service is activated',
    //   isSelect: 0,
    // },
    // {
    //   id: 6,
    //   title: 'water service is activated',
    //   isSelect: 0,
    // },
    // {
    //   id: 7,
    //   title:
    //     'Gas service is activated if aplicable',
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
    // this.setState({
    //   dataSource: this.state.dataSource,
    // });
  };

  const checkButtonStatus = () => {
    dataSource.length == dataSource.filter(obj => obj.isSelect == 1).length
      ? setButton(1)
      : setButton(0);
  };

  const renderItem = data => {
    // console.log(typeof(data.item.selectedClass));
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => selectItem(data)}
        style={styles.fieldsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.list, data.item.selectedClass]}
          onPress={() => selectItem(data)}>
          <Image
            source={require('../../assets/tick.png')}
            style={
              data.item.isSelect ? styles.imageSelected : styles.imageUnSelected
            }></Image>
        </TouchableOpacity>
        <View>
          <Text style={styles.textFields}>{data.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{ height:700 }} showsVerticalScrollIndicator={false}> */}
      <View style={{paddingVertical: 20, flex: 1}}>
        <Text style={{color: '#8f949a', fontFamily: 'OpenSans-Regular'}}>
          Thank you for handling this inspection.
        </Text>
        <View style={{paddingVertical: 4}}>
          <Text style={styles.confirmation}>
            Please confirm / do the following:
          </Text>
        </View>
      </View>
      <View style={{flex: 3.5, paddingTop: 10}}>
        <FlatList
          data={dataSource}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id}
          extraData={dataSource}
        />
      </View>
      <View style={{flex: 2, marginTop:"32%"}}>
        <ButtonView
          activeOpacity={0.9}
          onPress={() => checkList()}
          style={button ? styles.inspectButton : styles.inspectButtonUnSelected}
          >
          <Text style={{color: '#e3e3e3',fontFamily: 'OpenSans-Regular',}}>Continue</Text>
        </ButtonView>
        <ButtonView
          activeOpacity={0.9}
          style={styles.stopButton}
          onPress={() => setModalVisible(true)}
          >
          <Text style={{color: '#17324f', fontWeight: 'bold',fontFamily: 'OpenSans-Regular',}}>Cancel </Text>
        </ButtonView>
      </View>
      {/* </ScrollView> */}
      <Modal
          animationType="slideInUp"
          transparent={true}
          isVisible={modalVisible}
          swipeDirection="down"
          style={styles.view}
          onSwipeComplete={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(!modalVisible)}
          onBackdropPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={0.9}
              hitSlop={{top: 20, bottom: 20, left: 40, right: 40}}>
              {/* // onPress={() => setModalVisible(!modalVisible)}> */}
              <View style={styles.modalLineView}></View>
            </TouchableOpacity>

            <View style={{marginVertical: 25}}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Cannot Access Property</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Utilities Not Activated</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('DoNotBuy2')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Do Not Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('')}
                style={styles.modalButtons}>
                <Text style={{color: '#fff', fontFamily:"OpenSans-Regular"}}>Pause Inspection</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  begin: {
    color: '#5a6577',
    paddingTop: 12,
    fontSize: 16,
  },
  confirmation: {
    color: '#3c434d',
    // fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',

  },
  logo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textService: {
    color: '#a2a5ab',
    fontWeight: '500',
  },
  list: {
    paddingVertical: 5,
    marginTop: 1,
    flexDirection: 'row',
    backgroundColor: '#cacacb',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#f5f6f8',
    borderWidth: 0.5,
    borderColor: '#c7c7c7',
  },
  selected: {backgroundColor: '#32d24c'},
  imageSelected: {
    width: 10,
    height: 10,
    tintColor: '#fff',
  },
  imageUnSelected: {
    width: 10,
    height: 10,
    tintColor: '#c7c7c7',
  },
  buttonContainer: {
    marginVertical: '15%',
    paddingHorizontal: '6%',
  },
  fieldsContainer: {
    // flexDirection: 'row',
    // paddingHorizontal: '5%',
    // paddingVertical: 15,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#f7f7f7',
  },
  textFields: {
    paddingHorizontal: '5%',
    color: '#7c8089',
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
  },
  inspectButton: {
    backgroundColor: '#193250',
    paddingVertical: '5%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 25,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 4,
  },
  inspectButtonUnSelected: {
    backgroundColor: '#909090',
    paddingVertical: '5%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 25,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

  },
  stopButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 6,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    // elevation: 2,
    borderColor: '#193250',
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalLineView: {
    width: 35,
    height: 2,
    backgroundColor: '#8b98a8',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  modalButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#193250',
    margin: '3%',
    borderRadius: 25,
    width:330,
    height:56
  },
});
