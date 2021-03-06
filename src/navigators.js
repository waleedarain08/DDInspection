import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import search, { Search } from './pages/search/search';
import Account from './pages/Account/Account';
import profile, { Profile } from './pages/profile/profile';
import list, { List } from './pages/list/list';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './pages/home/HomeScreen';
import DetailScreen from './pages/home/DetailScreen';
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
import EndInspection from './pages/list/EndInspection';
import TabADetails from './pages/home/tabADetails';
import CustomDrawer from './CustomDrawer';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const drawerButton = navigation => {
  return (
    <Icon
      name="menu"
      size={24}
      style={{ marginLeft: 10, color: "#fff" }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const Drawer = createDrawerNavigator();

const LoginStackNav = createStackNavigator();
function LoginStack() {
  return (
    <LoginStackNav.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Login">
      <LoginStackNav.Screen name="Login" component={Login} />
      <LoginStackNav.Screen name="Signup" component={Signup} />
    </LoginStackNav.Navigator>
  );
}

const HomeTabAStackNav = createStackNavigator();
function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerStyle: {
        backgroundColor: '#0e101f',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeTabAStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation)
        })}
      />
      <HomeAccountStackNav.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
      <HomeTabAStackNav.Screen name="DetailScreen" component={DetailScreen} />
    </HomeTabAStackNav.Navigator>
  );
}

const HomeSearchStackNav = createStackNavigator();
function HomeSearchStack() {
  return (
    <HomeSearchStackNav.Navigator initialRouteName="search" screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      headerTintColor: '#5a6778',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
    }}>
      <HomeSearchStackNav.Screen
        name="PRE-INPECTION CHECKLIST"
        component={Search}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
    </HomeSearchStackNav.Navigator>
  );
}
const HomeAccountStackNav = createStackNavigator();
function HomeAccountStack() {
  return (
    <HomeAccountStackNav.Navigator initialRouteName="Account" screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      headerTintColor: '#5a6778',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
    }}>
      <HomeAccountStackNav.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
    </HomeAccountStackNav.Navigator>
  );
}
const HomeProfileStackNav = createStackNavigator();
function HomeProfileStack() {
  return (
    <HomeProfileStackNav.Navigator initialRouteName="profile" screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      headerTintColor: '#5a6778',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
    }}>
      <HomeProfileStackNav.Screen
        name="CONFIRM PROPERTY IS ACCESSIBLE "
        component={Profile}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
      <HomeProfileStackNav.Screen name="CheckProperty"

        component={CheckProperty}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="InspectionOverview"

        component={InspectionOverview}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="HomeOverview"

        component={HomeOverview}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="EstimateScope"

        component={EstimateScope}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="InteriorMain"

        component={InteriorMain}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="DoNotBuy"

        component={DoNotBuy}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="DoNotBuy2"

        component={DoNotBuy2}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="ExteriorBack"

        component={ExteriorBack}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="EstimateItem"

        component={EstimateItem}
        options={({ navigation }) => ({
          headerShown: false,
        })} />

    </HomeProfileStackNav.Navigator>

  );
}
const HomeListStackNav = createStackNavigator();
function HomeListStack() {
  return (
    <HomeListStackNav.Navigator initialRouteName="list" screenOptions={{
      headerStyle: {
        backgroundColor: '#0e101f',
        shadowOpacity: 0.85,
        shadowRadius: 0,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeListStackNav.Screen
        name="List"
        component={List}
        options={({ navigation }) => ({
          headerLeft: () => drawerButton(navigation),
        })}
      />
      <HomeProfileStackNav.Screen name="DetailPage"

        component={DetailPage}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
      <HomeProfileStackNav.Screen name="EndInspection"

        component={EndInspection}
        options={({ navigation }) => ({
          headerShown: false,
        })} />
    </HomeListStackNav.Navigator>
  );
}



const HomeTabNav = createBottomTabNavigator();

function HomeTab() {
  return (
    <HomeTabNav.Navigator
      tabBarOptions={{
        tabStyle: { //Add this 
          // borderTopRightRadius:10,
          // borderTopLeftRadius:10,
          paddingVertical: 3,
          borderRadius: 8
        },
        style: {
          backgroundColor: '#0e101f98',
          position: 'absolute',
          borderTopWidth: 0.1,
          elevation: 0,

        },
        activeTintColor: "#fff",
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#1a72b9',
        inactiveBackgroundColor: '#0e101f',
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Search':
              return <Image style={{ height: 18, width: 18, resizeMode: "contain" }} />
              break;
            case 'Home':
              return <Image style={{ height: 18, width: 18, resizeMode: "contain" }} />
              break;
            case 'List':
              return <Image style={{ height: 18, width: 18, resizeMode: "contain" }} />
              break;
            case 'Profile':
              return <Image style={{ height: 18, width: 18, resizeMode: "contain" }} />
              break;
            default:
              break;
          }
          // return <Icon name={iconName} size={size} color={color} />;  
        },
      })}>
      <HomeTabNav.Screen name="Search" component={HomeSearchStack} />
      <HomeTabNav.Screen name="Home" component={HomeTabAStack} />
      <HomeTabNav.Screen name="List" component={HomeListStack} />
      <HomeTabNav.Screen name="Profile" component={HomeProfileStack} />

    </HomeTabNav.Navigator>
  );
}



function RootContainer({ user }) {

  return (
    <NavigationContainer >
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        drawerContentOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#aeaeae',
          itemStyle: { marginVertical: 8, marginHorizontal: 8 },
        }}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#193250',
          opacity: 0.9
        }}
        drawerType="front"
      >
        <Drawer.Screen name="main">
          {() =>
            user?.loggedin ? HomeTab() : (
              <LoginStack />

            )
          }
        </Drawer.Screen>
      </Drawer.Navigator>

    </NavigationContainer>
  )

}

const mapStateToProps = state => {
  return { user: state?.user };
};
export default connect(mapStateToProps)(RootContainer);
