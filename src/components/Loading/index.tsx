import React from 'react';
import {ActivityIndicator} from 'react-native';

import {LoadingView} from './styles';

export const Loading = () => {
  return (
    <LoadingView>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </LoadingView>
  );
};
