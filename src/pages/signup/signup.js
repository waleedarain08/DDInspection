import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import * as Animatable from 'react-native-animatable';

function Signup({navigation, userInfo, userLogin}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.header}>
        <Animatable.Text animation="fadeInDownBig" style={{color: '#fff', fontSize: 20, fontWeight: "bold"}}>
          SIGN UP
        </Animatable.Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <KeyboardAwareScrollView showVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>
            <FloatingLabelInput
              label="First Name"
              value={firstname}
              containerStyles={styles.inputContainer}
              inputStyles={styles.inputText}
              onChangeText={value => setFirstname(value)}
            />
            <FloatingLabelInput
              label="Last Name"
              value={lastname}
              containerStyles={styles.inputContainer}
              inputStyles={styles.inputText}
              onChangeText={value => setLastname(value)}
            />

            <FloatingLabelInput
              label="Phone No."
              value={phonenum}
              containerStyles={styles.inputContainer}
              inputStyles={styles.inputText}
              keyboardType="numeric"
              onChangeText={value => setPhonenum(value)}
            />
            <FloatingLabelInput
              label="Password"
              value={password}
              isPassword
              togglePassword={show}
              containerStyles={styles.inputContainer}
              inputStyles={styles.inputText}
              onChangeText={value => setPassword(value)}
              customShowPasswordComponent={
                <Text style={{fontSize: 12, marginRight: 8}}>Show</Text>
              }
              customHidePasswordComponent={
                <Text style={{fontSize: 12, marginRight: 8}}>Hide</Text>
              }
            />
            <FloatingLabelInput
              label="Confirm Password"
              value={confirmpassword}
              isPassword
              togglePassword={show}
              containerStyles={styles.inputContainer}
              inputStyles={styles.inputText} 
              onChangeText={value => setConfirmpassword(value)}
              customShowPasswordComponent={
                <Text style={{fontSize: 12, marginRight: 8}}>Show</Text>
              }
              customHidePasswordComponent={
                <Text style={{fontSize: 12, marginRight: 8}}>Hide</Text>
              }
            />
          </View>

          <View style={styles.ButtonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.LoginButton}>
              <Text style={styles.LoginButtonInside}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12}}>
              I have an account?
              <Text onPress={() => navigation.goBack()} style={{fontSize: 12, color: '#5b53ff',paddingLeft:5,}}>Login now</Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </Animatable.View>
    </View>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogin}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#5b53ff',
  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    paddingTop: 30,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  inputContainer: {
    paddingLeft: 10,
    fontSize: 12,
    marginVertical: 20,
    borderBottomWidth: 0.8,
  },
  inputLabel: {
    color: '#5b6777',
    paddingLeft: 20,
    fontSize: 12,
  },
  inputText:{
    fontSize:14,
    color:"#000",
    marginBottom:10
  },

  LoginButton: {
    alignItems: 'center',
    backgroundColor: '#5b53ff',
    width: 320,
    padding: 18,
    borderRadius: 35,
    marginBottom: 80,
    elevation: 4,
   
  },
  LoginButtonInside: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
});

