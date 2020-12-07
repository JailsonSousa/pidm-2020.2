import React from "react";

import { Container, Avatar } from "./styles";

interface BodyProps {
  avatarURL: string;
}

const Body: React.FC<{ bodyProps: BodyProps }> = ({ bodyProps }) => {
  return (
    <Container>
      <Avatar source={{ uri: bodyProps.avatarURL }} />
    </Container>
  );
};

export default Body;
