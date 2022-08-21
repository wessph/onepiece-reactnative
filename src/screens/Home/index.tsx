import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../contexts/Auth';

export const Home = () => {
  const auth = useAuth();
  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut();
  };

  const navigationToCharacters = () => {
    navigation.navigate('Characters');
  };

  return (
    <View>
      <Text>Pagina inicial</Text>
      <Button title="Go to Characters" onPress={navigationToCharacters} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
