import React from "react";
import { ButtonProps } from "react-native";

import { Container, TextButton } from "./styles";

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <TextButton>{title}</TextButton>
    </Container>
  );
};

export default Button;
