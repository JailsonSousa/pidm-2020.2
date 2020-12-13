import React from "react";
import { ViewProps } from "react-native";

import { Container, Text, Divider } from "./styles";

const Subtitle: React.FC<ViewProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
      <Divider />
    </Container>
  );
};

export default Subtitle;
