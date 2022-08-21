import styled from 'styled-components/native';

export const SignInView = styled.View`
  background-color: #fffbfb;
  display: flex;
  flex: 1;
`;

export const BackgroundImage = styled.Image`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 75%;
  bottom: 0;
`;

export const SignInImage = styled.Image`
  width: 285px;
  height: 277px;
  margin-bottom: 35px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SignInInput = styled.TextInput`
  background: #f6f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 17px;
  width: 350px;
  height: 50px;
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: #e2ac3f;
  border: none;
  border-radius: 15px;
  padding: 10px;
  margin-top: 17px;
  margin-bottom: 20px;
  width: 250px;
  height: 50px;
`;

export const SignInButtonText = styled.Text`
  color: #110905;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  background-color: #f6f5f5;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const ImageIcon = styled.Image`
  width: 44px;
  height: 41px;
`;

export const LinksContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  padding: 0 40px;
`;

export const LinkText = styled.Text`
  color: #110905;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
