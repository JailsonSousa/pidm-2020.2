/* eslint-disable react/require-default-props */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Title } from './styles';

interface HeaderProps {
  hasBackAction?: boolean;
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  hasBackAction,
}: HeaderProps) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      {hasBackAction && (
        <FontAwesome5
          name="chevron-left"
          size={18}
          color="#fff"
          onPress={goBack}
        />
      )}

      <Title hasBackAction>{title}</Title>
    </Container>
  );
};

export default Header;
