import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens/SignIn';

const {Navigator, Screen} = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="SignIn" options={{headerShown: false}} component={SignIn} />
    </Navigator>
  );
};
