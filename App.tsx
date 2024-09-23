import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  LogBox
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HeaderToDo from './src/screen/headerToDo.js';
import BottomTabNav from './src/screen/BottomTabNav.js';
import Splash from './src/screen/SplashScreen.js';
import SplashScreen from './src/screen/SplashScreen.js';
import { persistor, store } from './src/redux/store.js';

// console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderToDo />
        <BottomTabNav />
      </SafeAreaView>
    </PersistGate>
  </Provider>
  );
}

export default App;

