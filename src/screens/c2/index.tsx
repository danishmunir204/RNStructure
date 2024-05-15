import React from 'react';
import {Text, View} from 'react-native';
import Design from './design';

// @ts-ignore
import {StackNavigationProp} from '@react-navigation/native-stack';

export default function SecondComponent({navigation}: { navigation: StackNavigationProp}) {
  return <Design nav={navigation}/>;
}
