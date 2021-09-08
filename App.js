import 'react-native-gesture-handler';
import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import RootContainer from './src/navigators';
import store from './src/redux/store';


export class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

render() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
  }
}

export default App