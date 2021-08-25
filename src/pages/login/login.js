import { Text, View, StyleSheet, Image, TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { FloatingLabelInput } from 'react-native-floating-label-input';


function Login({ navigation, userInfo, userLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hide, setHide] = useState(false);

  return (
    <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : null} keyboardVerticalOffset={Platform.select({ ios: -250, android: -100 })}
      style={styles.MainContainer}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/juggling.png')} />
      </View>
      <View style={styles.field}>
        <View style={{ flex: 1.5, alignItems: "center", justifyContent: "flex-end" }}>
          <Text style={styles.logintx}>Login</Text>
          <View style={styles.borderline}></View>
        </View>
        <View style={{ flex: 2.5, paddingHorizontal: 30, }}>
        <FloatingLabelInput
        label="Email"
        containerStyles={styles.email}
        value={email}
        onChangeText={value => setEmail(value)}
      />
              <FloatingLabelInput
        label="Password"
        containerStyles={styles.email}
        value={password}
        onChangeText={value => setPassword(value)}
        isPassword
        togglePassword={hide}
      />
        <View style={{ flexDirection: "row", justifyContent: "space-around",paddingHorizontal:10,paddingTop:10 }}>
          <Text style={{ color: "#c2c2c2",fontSize:10 }}>Remember me</Text>
          <Text style={{ color: "#c2c2c2",fontSize:10 }}>Forget Password</Text>
        </View>
        </View>
        <View style={{ flex: 2,}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.LoginButton}
          >
            <Text style={styles.LoginButtonInside}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            activeOpacity={0.8}
            style={styles.LoginButton2}
          >
            <Text style={styles.LoginButtonInside2}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5,justifyContent:"center",alignItems:"center" }}>
          <Text>Dont have an account?<Text style={{color:"#5b53ff"}}>Join free today</Text> </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}


const mapStateToProps = state => {
  return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#5b53ff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 200,
  },
  field: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5
  },
  logintx: {
    color: "#5a6577",
    fontSize: 30,
    fontWeight: "bold"
  },
  borderline: {
    width: 34,
    height: 2,
    backgroundColor: "#5a6577",
    marginTop: 10,
    marginBottom: 10,
  },
  email: {
    paddingLeft: 30,
    fontSize: 12,
    color: "#c2c2c2",
    borderBottomWidth:2,
    padding:15,
    borderColor:"#e3e4e8",
  },
  LoginButton: {
    alignItems: "center",
    backgroundColor: "#5b53ff",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 35,
    marginBottom:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  LoginButtonInside: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  LoginButton2: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 18,
    marginHorizontal: 30,
    borderRadius: 35,
    borderWidth:1,
    borderColor:"#5b53ff",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  LoginButtonInside2: {
    color: "#5b53ff",
    fontWeight: "bold",
    fontSize: 12,
  },
})
