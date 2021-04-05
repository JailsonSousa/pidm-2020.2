import React from 'react';
import { ButtonProps } from 'react-native';
import { Container, Title } from './styles';

const Button: React.FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
