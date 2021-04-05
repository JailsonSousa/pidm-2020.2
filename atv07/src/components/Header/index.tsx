/* eslint-disable react/require-default-props */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Title, ActionAdd } from './styles';

interface HeaderProps {
  hasBackAction?: boolean;
  hasAddAction?: boolean;
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  hasBackAction,
  hasAddAction,
}: HeaderProps) => {
  const { goBack, navigate } = useNavigation();
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

      <Title>{title}</Title>

      {hasAddAction && (
        <ActionAdd>
          <FontAwesome5
            name="user-plus"
            size={18}
            color="#fff"
            onPress={() => navigate('student')}
          />
        </ActionAdd>
      )}
    </Container>
  );
};

export default Header;
