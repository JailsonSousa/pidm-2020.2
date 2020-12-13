import React from "react";
import { ViewProps } from "react-native";

import { Container } from "./styles";

interface ItemProps extends ViewProps {
  direction?: string;
}

const Item: React.FC<ItemProps> = ({ direction, children, ...rest }) => {
  return (
    <Container {...rest} flexDirection={direction}>
      {children}
    </Container>
  );
};

export default Item;
