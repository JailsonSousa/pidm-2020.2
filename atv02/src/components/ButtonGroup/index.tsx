import React from 'react';
import { ViewProps } from 'react-native';

import { Container } from './styles';

const ButtonGroup: React.FC<ViewProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ButtonGroup;
