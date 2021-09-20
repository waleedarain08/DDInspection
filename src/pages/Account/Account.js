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


  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileLogoContainer}>
        <View>
          <View
            style={{
              backgroundColor:"#fff",
              height:98,
              width:98,
              borderRadius:49,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 20,

              margin:5,
            }}>
            <Image
              source={require('../../assets/group.png')}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontFamily:"OpenSans-Bold"}}>LUKE SHAW</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileSection}>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 18, fontFamily:"OpenSans-Bold",}}>15</Text>
            <Text style={{color: '#dddddd', fontFamily:"OpenSans-SemiBold",fontSize:12}}>Job Posts</Text>
          </View>
          <View style={styles.ratingLineView}></View>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 18, fontFamily:"OpenSans-Bold",}}>45</Text>
            <Text style={{color: '#dddddd',fontFamily:"OpenSans-SemiBold",fontSize:12}}>Completed</Text>
          </View>
          <View style={styles.ratingLineView}></View>
          <View style={styles.ratingView}>
            <Text style={{fontSize: 18, fontFamily:"OpenSans-Bold",}}>56</Text>
            <Text style={{color: '#dddddd', fontFamily:"OpenSans-SemiBold",fontSize:12}}>Remaining</Text>
          </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a', fontFamily:"OpenSans-Regular"}}>John Snow</Text>
          </View>
          <View
            style={{flex: .5, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/profile.png')}
              style={{width: 16, height: 16, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a', fontFamily:"OpenSans-Regular"}}>johnsnow@gmail.com</Text>
          </View>
          <View
            style={{flex: .5, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/message.png')}
              style={{width: 16, height: 16, resizeMode: 'contain'}}
            />
          </View>
        </View>
        <View style={styles.inputFields}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: '#8a8a8a', fontFamily:"OpenSans-Regular",}}>202-555-0186</Text>
          </View>
          <View
            style={{flex: .5, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/calling.png')}
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
    flex: .2,
    flexDirection: 'row',
    justifyContent:"center"
  },
  ratingView: {
    paddingHorizontal: '6%',
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
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  inputFields: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    padding: 12,
    marginVertical: 12,
  },
});
