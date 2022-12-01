import 'react-native-gesture-handler';
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import RootContainer from './src/navigators';
import store from './src/redux/store';
import { Platform } from 'react-native';


export class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, Platform.OS == "ios" ? 3000 : 800);
  }

render() {
  return (
    <Provider store={store}>
      <RootContainer  />
    </Provider>
  );
  }
}

export default App