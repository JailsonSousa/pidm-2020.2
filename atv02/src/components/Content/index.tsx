import React from "react";
import { ViewProps } from "react-native";
import { Wrapper } from "./styles";

const Content: React.FC<ViewProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Content;
