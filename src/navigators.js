import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import BeginTrip from './pages/BeginTrip/BeginTrip';
import Account from './pages/Account/Account';
import profile, {Profile} from './pages/profile/profile';
import list, {List} from './pages/list/list';
import {NavigationContainer,DefaultTheme, DrawerActions} from '@react-navigation/native';
import React from 'react';
import CheckProperty from './pages/profile/CheckProperty';
import InspectionOverview from './pages/profile/InspectionOverview';
import HomeOverview from './pages/profile/HomeOverview';
import EstimateScope from './pages/profile/EstimateScope';
import InteriorMain from './pages/profile/InteriorMain';
import ExteriorBack from './pages/profile/ExteriorBack';
import EstimateItem from './pages/profile/EstimateItem';
import DoNotBuy from './pages/profile/DoNotBuy';
import DoNotBuy2 from './pages/profile/DoNotBuy2';
import DetailPage from './pages/list/DetailPage';
import Download from './pages/list/Download';
import EndInspection from './pages/list/EndInspection';
import CustomDrawer from './CustomDrawer';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const drawerButton = navigation => {
  console.log("navigation", navigation )
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      navigation.dispatch(DrawerActions.toggleDrawer())
    }}
    style={{marginLeft: 10, color: '#fff'}}
    >
    <Image 
    source={require('./assets/menuIcon.png')}
    style={{width: 40, height: 34, resizeMode: 'contain'}}
  />
  </TouchableOpacity>
  );
};
const drawerButton2 = navigation => {
  console.log("navigation", navigation )
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      navigation.dispatch(DrawerActions.toggleDrawer())
    }}
    style={{marginLeft: 10, color: '#fff',backgroundColor:"#e7ebee",paddingHorizontal:8,paddingVertical:6,borderRadius:6}}
    >
    <Image 
    source={require('./assets/back.png')}
    style={{width: 16, height: 18, resizeMode: 'contain',tintColor: '#192550',}}
  />
  </TouchableOpacity>
  );
};
const drawerIcon = navigation => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigation.goBack()}
    style={{marginLeft: 12, color: '#fff',}}>
    <Image
      source={require('./assets/grouparrow.png')}
      style={{width: 40, height: 34, resizeMode: 'contain'}}
    />
  </TouchableOpacity>
    
  );
};

const headerRightIcon = navigation => {
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Account')}
    activeOpacity={0.8}
      style={{marginRight: 12, color: '#fff'}}>
      <Image
        source={require('./assets/group.png')}
        style={{width: 40, height: 40, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};
const headerRightIcon2 = navigation => {
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Account')}
    activeOpacity={0.8}
      style={{marginRight: 12, color: '#fff'}}>
      <Image
        source={require('./assets/editIcon.png')}
        style={{width: 36, height: 36, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return(
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#aeaeae',
        itemStyle: {marginVertical: 8, marginHorizontal: 8},
      }}
      initialRouteName="Home"      
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#193250',
        opacity: 1,
      }}
      // screenOptions={{gestureEnabled: user.loggedin}}
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#5a6778',
        headerTitleStyle: {
          fontFamily:"SpectralSC-Bold",
          fontSize: 16,
        },
      }}
      >
        <Drawer.Screen  
           options={({navigation}) => ({
            headerShown: true,
            headerLeft: () => drawerButton(navigation),
            headerTitle:"PRE-INSPECTION CHECKLIST",
            headerRight: () => headerRightIcon(navigation),
          })}
          name="PRE-INPECTION CHECKLIST" 
          component={BeginTrip}/>
        <Drawer.Screen 
          options={({navigation}) => ({
            headerShown: true,  
            headerLeft: () => drawerButton(navigation),
              headerTitle:"INSPECTIONS",
              headerRight: () => headerRightIcon(navigation),
            })}
          name="List" component={List} />
        <Drawer.Screen options={({navigation}) => ({
            headerShown: true,
            headerLeft: () => drawerButton2(navigation),
            headerTitle:"MY PROFILE",
            headerRight: () => headerRightIcon2(navigation),
          })} name="Account" component={Account} />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator()

const LoginStackNav = createStackNavigator();
function LoginStack() {
  return (
    <LoginStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <LoginStackNav.Screen name="Login"  component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
    </LoginStackNav.Navigator>
  );
}


const HomeBeginTripStackNav = createStackNavigator();
function HomeBeginTripStack() {
  return (
    <HomeBeginTripStackNav.Navigator
      initialRouteName="BeginTrip"
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: '#5a6778',
        headerTitleStyle: {
          fontFamily:"SpectralSC-Bold",
          fontSize: 16,
        },
      }}>
             
      <HomeBeginTripStackNav.Screen
        name="PRE-INPECTION CHECKLIST"
        component={DrawerNavigator}
        options={({navigation}) => ({
          headerShown: false
        })}
      />
        <HomeBeginTripStackNav.Screen
        name="DetailPage"
        component={DetailPage}
        options={({navigation}) => ({
          headerShown: false,
        })}
      />
      <HomeBeginTripStackNav.Screen
        name="EndInspection"
        component={EndInspection}
        options={({navigation}) => ({
          headerTitle:"INSPECTION COMPLETE",
          headerLeft: () => drawerIcon(navigation),
    
        })}
      />
        <HomeBeginTripStackNav.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitle:"CONFIRM PROPERTY IS ACCESSIBLE",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
         <HomeBeginTripStackNav.Screen
        name="CheckProperty"
        component={CheckProperty}
        options={({navigation}) => ({
           headerTitle:"BEGIN INSPECTION",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
            <HomeBeginTripStackNav.Screen
        name="EstimateScope"
        component={EstimateScope}
        options={({navigation}) => ({
          headerTitle:"ESTIMATE SCOPE",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
            <HomeBeginTripStackNav.Screen
        name="InspectionOverview"
        component={InspectionOverview}
        options={({navigation}) => ({
          headerLeft: () => drawerIcon(navigation),
          headerTitle:"INSPECTION OVERVIEW",
        })}
      />
            <HomeBeginTripStackNav.Screen
        name="HomeOverview"
        component={HomeOverview}
        options={({navigation}) => ({
          headerTitle:"HOME OVERVIEW",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
       <HomeBeginTripStackNav.Screen
        name="InteriorMain"
        component={InteriorMain}
        options={({navigation}) => ({
                headerTitle:"INTERIOR MAIN",
               headerLeft: () => drawerIcon(navigation),
        })}
      />
      <HomeBeginTripStackNav.Screen
        name="DoNotBuy"
        component={DoNotBuy}
        options={({navigation}) => ({
          headerTitle:"Do Not Buy",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
      <HomeBeginTripStackNav.Screen
        name="DoNotBuy2"
        component={DoNotBuy2}
        options={({navigation}) => ({
          headerTitle:"Do Not Buy",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
      <HomeBeginTripStackNav.Screen
        name="ExteriorBack"
        component={ExteriorBack}
        options={({navigation}) => ({
          headerTitle:"EXTERIOR BACK",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
      <HomeBeginTripStackNav.Screen
        name="EstimateItem"
        component={EstimateItem}
        options={({navigation}) => ({
          headerTitle:"ESTIMATE ITEM",
          headerLeft: () => drawerIcon(navigation),
        })}
      />
         <HomeBeginTripStackNav.Screen
        name="Download"
        component={Download}
        options={({navigation}) => ({
          headerShown: false,
        })}
      />
       <HomeBeginTripStackNav.Screen 
       name="Account" 
        component={Account} 
        options={({navigation}) => ({
          headerTitle:"MY PROFILE",
          headerLeft: () => drawerIcon(navigation),
        })}
        />

    </HomeBeginTripStackNav.Navigator>
  );
}



function RootContainer({user}) {
  return (
    <NavigationContainer theme={{...DefaultTheme,dark:true,colors:{'background':'#fff'}}}>
      {/* <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        drawerContentOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#aeaeae',
          itemStyle: {marginVertical: 8, marginHorizontal: 8},
        }}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#193250',
          opacity: 0.9,
        }}
        screenOptions={{gestureEnabled:user.loggedin}}
        drawerType="front">
        <Drawer.Screen name="main" >
          {() => (user?.loggedin ? HomeBeginTripStack() : <LoginStack />)}
        </Drawer.Screen>
      </Drawer.Navigator> */}
      <Stack.Navigator 
       screenOptions={{
        headerShown: false,
      }}>
          <Stack.Screen 
            name="main"
          >
            {() => (user?.loggedin ? HomeBeginTripStack() : <LoginStack />)}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => {
  return {user: state?.user};
};
export default connect(mapStateToProps)(RootContainer);