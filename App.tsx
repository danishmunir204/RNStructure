/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import Navigation from './src/routing';
import {Provider} from 'react-redux';
import {persister, store} from './src/redux/app/store';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BASE_URL} from '@env';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, marginVertical: 40}}>
      <View>
        <Text style={{paddingLeft: 20}}>{process.env.NODE_ENV}</Text>
        <Text style={{paddingLeft: 20}}>{BASE_URL} this is baseURL.</Text>
      </View>
      <View style={{flex: 1, paddingVertical: 10}}>
        <Provider store={store}>
          <PersistGate persistor={persister}>
            <Navigation />
          </PersistGate>
        </Provider>
      </View>
    </SafeAreaView>
  );
}

export default App;
