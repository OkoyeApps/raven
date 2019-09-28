
import React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storeConfig from './src/store/config'
import {View, Text} from 'react-native'
import {Root} from 'native-base'
import Rootscreen from './src/navigations'
var {store, persistor} = storeConfig();


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate  loading={<View><Text>Setting up... waiting for store</Text></View>} persistor ={persistor}>
            <Root>
              <Rootscreen />
            </Root>
         </PersistGate>
      </Provider>
    )
  }
}

export default App;


