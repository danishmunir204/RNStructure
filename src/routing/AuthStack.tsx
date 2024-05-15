import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import FirstComponent from '../screens/c1';
import SecondComponent from '../screens/c2';
import {TAuthStack, TScreen} from './navTypes';

const Stack = createStackNavigator<TAuthStack>();

const screenNames = [FirstComponent, SecondComponent]

const screens: TScreen<TAuthStack>[] = [
  {key: 'FirstComponent', name: 'FirstComponent', component: FirstComponent},
  {key: 'SecondComponent', name: 'SecondComponent', component: SecondComponent},
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="FirstComponent">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
