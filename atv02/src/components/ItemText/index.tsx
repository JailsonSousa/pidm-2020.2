import React from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

const Item: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default Item;
