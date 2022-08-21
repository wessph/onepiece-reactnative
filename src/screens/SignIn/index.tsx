import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';

import {SignInView, SignInImage} from './styles';
import {useAuth} from '../../contexts/Auth';

export const SignIn = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <SignInView>
      {loading ? (
        <ActivityIndicator color={'#ffb300'} animating={true} size="large" />
      ) : (
        <View>
          <SignInImage source={require('../../../assets/logo.png')} />

          <Button title="Sign In" onPress={signIn} />
        </View>
      )}
    </SignInView>
  );
};
