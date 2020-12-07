import React from "react";

import { Container, Title, SubTitle } from "./styles";

interface HeaderProps {
  name: string;
  course: string;
}

const Header: React.FC<{ headerInfo: HeaderProps }> = ({ headerInfo }) => {
  return (
    <Container>
      <Title>{headerInfo.name}</Title>
      <SubTitle>{headerInfo.course}</SubTitle>
    </Container>
  );
};

export default Header;
