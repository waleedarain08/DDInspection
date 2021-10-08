import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import * as Animatable from 'react-native-animatable';
import { ButtonView } from '../../components';
import styles from '../../assets/stylesheets/styles.js';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'


function Login({ navigation, userInfo, userLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hide, setHide] = useState(false);

  GoogleSignin.configure({
    webClientId: '412045753505-c1kdvqmho4sksn91aq9ccpv7g558qfkv.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    auth().signInWithCredential(googleCredential)
    .then((res) => {
      userLogin(res.user)
    }).catch(error => {
      console.log("google login error", error)
      //console.error(error);
    });
  }
  

  return (
    <View style={styles2.MainContainer}>
      <View style={styles2.header}>
        {/* <Image
          style={styles.logo}
          source={require('../../assets/sylvanRoad.png')}
        /> */}
        <Image source={require('../../assets/01Splash.jpg')} style={styles2.backgroundImage} />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles2.footer}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#5a6577',
              fontSize: 25,
              fontFamily: 'SpectralSC-Bold',
            }}>
            Login
          </Text>
          <View style={styles2.borderline}></View>

          <View style={{ marginTop: 25 }}>
            <ButtonView
              // onPress={() => userLogin(username, password)}
              onPress={() => onGoogleButtonPress()} activeOpacity={0.8}
              isRound={1}
              style={styles2.loginGoogleButton}>
              <Image
                style={styles2.googlelogo}
                source={require('../../assets/google.png')}
              />
              <Text style={styles2.loginButtonInside}>Login with Google</Text>
            </ButtonView>

          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const mapStateToProps = state => {
  return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles2 = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#192a44',
  },
  backgroundImage: {
    width: "100%",
    height: "150%",
  },
  header: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  footer: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  borderline: {
    width: 30,
    height: 2,
    backgroundColor: '#8b98a8',
    marginTop: 10,
    marginBottom: 0,
  },
  loginGoogleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: "22%",
    padding: 12,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#253d57',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginButtonInside: {
    color: '#253d57',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    paddingLeft: 10,
  },
  googlelogo: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
