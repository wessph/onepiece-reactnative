import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Characters} from '../screens/Characters';

const {Screen, Navigator} = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Página Inicial',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />

      <Screen
        name="Characters"
        component={Characters}
        options={{
          title: 'Personagens',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </Navigator>
  );
};
