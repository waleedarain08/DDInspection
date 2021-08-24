import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import {TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

function Signup({navigation, userInfo, userLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.MainContainer}>
      <View style={styles.header}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          SIGN UP
        </Text>
      </View>

      <KeyboardAwareScrollView style={styles.footer}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.inputText}
            labelStyle={styles.inputLabel}
            label="First Name"
            placeholder="First Name"
          />
          <Input
            style={styles.inputText}
            labelStyle={styles.inputLabel}
            label="Last Name"
            placeholder="Last Name"
            
          />

          <Input
            style={styles.inputText}
            labelStyle={styles.inputLabel}
            label="Phone No."
            placeholder="Phone No."
          />
          <Input
            style={styles.inputText}
            labelStyle={styles.inputLabel}
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Input
            style={styles.inputText}
            labelStyle={styles.inputLabel}
            label="Confirm Password"
            placeholder="Confirm Password"
            secureTextEntry={true}
          />

          <View style={styles.ButtonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.LoginButton}>
              <Text style={styles.LoginButtonInside}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 12}}>I have an account? <Text style={{fontSize: 12, color:'#5b53ff'}}>Login now</Text></Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  inputText: {
    paddingLeft: 20,
    fontSize: 12,
  },
  inputLabel: {
    color: '#5b6777',
    paddingLeft: 20,
    fontSize: 12,
  },

  LoginButton: {
    alignItems: 'center',
    backgroundColor: '#5b53ff',
    width: 320,
    padding: 18,
    borderRadius: 35,
    marginBottom: 40,
    elevation: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 10.5,
    // shadowRadius: 5.84,
  },
  LoginButtonInside: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
