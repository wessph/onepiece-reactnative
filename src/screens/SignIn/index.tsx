import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  SignInView,
  Content,
  SignInImage,
  SignInInput,
  SignInButton,
  SignInButtonText,
  BackgroundImage,
  ButtonsContainer,
  ButtonIcon,
  ImageIcon,
  LinksContainer,
  LinkText,
} from './styles';

import {useAuth} from '../../contexts/Auth';

export const SignIn = () => {
  const [loading, isLoading] = useState(false);
  const [user, setUser] = useState({email: '', password: ''});
  const auth = useAuth();

  const signIn = async () => {
    isLoading(true);
    await auth.signIn(user);
  };

  const test = async () => {
    console.log('test');
  };

  return (
    <SignInView>
      {loading ? (
        <ActivityIndicator color={'#ffb300'} animating={true} size="large" />
      ) : (
        <Content>
          <SignInImage source={require('../../../assets/logo.png')} />

          <BackgroundImage
            resizeMode="stretch"
            source={require('../../../assets/background/wave.png')}
          />

          <SignInInput
            placeholder="Email"
            placeholderTextColor="#868686"
            onChangeText={(text: string) => setUser({...user, email: text})}
            value={user.email}
          />
          <SignInInput
            placeholder="Password"
            placeholderTextColor="#868686"
            secureTextEntry={true}
            onChangeText={(text: string) => setUser({...user, password: text})}
            value={user.password}
          />

          <SignInButton onPress={signIn}>
            <SignInButtonText>Entrar</SignInButtonText>
          </SignInButton>

          <ButtonsContainer>
            <ButtonIcon onPress={test}>
              <ImageIcon source={require('../../../assets/icons/google.png')} />
            </ButtonIcon>

            <ButtonIcon onPress={test}>
              <ImageIcon source={require('../../../assets/icons/fb.png')} />
            </ButtonIcon>
          </ButtonsContainer>

          <LinksContainer>
            <LinkText> Criar Conta </LinkText>
            <LinkText>Esqueci minha senha?</LinkText>
          </LinksContainer>
        </Content>
      )}
    </SignInView>
  );
};
