import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native';

function HomeScreen({navigation, user, userLogout}) {
  const [reason, setReason] = useState([
    {title: 'abc', image: require('../../assets/vedio.png')},
    {title: 'def', image: require('../../assets/vedio.png')},
    {title: 'ghi', image: require('../../assets/vedio.png')},
  ]);
  const [reason1, setReason1] = useState([
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
  ]);
  const [reason2, setReason2] = useState([
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
  ]);
  const [reason3, setReason3] = useState([
    {title: 'abc', image: require('../../assets/serial1.jpg')},
    {title: 'abc', image: require('../../assets/serial2.jpg')},
    {title: 'abc', image: require('../../assets/serial1.jpg')},
    {title: 'abc', image: require('../../assets/serial2.jpg')},
  ]);

  goNext = () => {
    navigation.navigate('DetailScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileLogoContainer}>
        <View>
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 10,
            }}>
            <Image
              source={require('../../assets/group.png')}
              style={{width: 120, height: 120, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>LUKE SHAW</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileSection}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>15</Text>
            <Text style={{color: '#dddddd'}}>Job Posts</Text>
          </View>
          <View style={styles.ratingLineView}></View>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>45</Text>
            <Text style={{color: '#dddddd'}}>Completed</Text>
          </View>
          <View style={styles.ratingLineView}></View>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>56</Text>
            <Text style={{color: '#dddddd'}}>Remaining</Text>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a'}}>John Snow</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/user.png')}
              style={{width: 16, height: 16, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a'}}>johnsnow@gmail.com</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/email.png')}
              style={{width: 16, height: 16, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a'}}>202-555-0186</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/phone.png')}
              style={{width: 16, height: 16, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {user: state?.user};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileLogoContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    flex: 0.2,
    alignItems: 'center',
  },
  ratingView: {
    paddingHorizontal: '8%',
    paddingVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingLineView: {
    width: 2,
    height: 45,
    backgroundColor: '#dddddd',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: 15,
  },
  inputFields: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    padding: '3%',
    marginVertical: '6%',
  },
});
