import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';

const CustomStatusBar: React.FC = () => {
  return (
    <Container>
      <StatusBar translucent barStyle="light-content" />
    </Container>
  );
};

export default CustomStatusBar;
