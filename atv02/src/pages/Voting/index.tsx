/* eslint-disable global-require */
import React, { useCallback } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  Title,
  Header,
  ButtonGroup,
  Button,
  Subtitle,
} from '../../components';

import { useVote } from '../../hooks/vote';

import { ImgVote, BackScreen, Wrapper } from './styles';

const Voting: React.FC = () => {
  const { registerVote, cities } = useVote();

  const handleVote = useCallback(
    id => {
      registerVote(id);
      Actions.reset('success');
    },
    [cities, registerVote],
  );

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Votação de cidades</Title>
          <ImgVote source={require('../../assets/undraw_destinations.png')} />
        </Header>
        <Subtitle>Escolha uma cidade</Subtitle>

        <ButtonGroup>
          {cities.map(city => (
            <Button
              key={city.id}
              title={city.name}
              onPress={() => handleVote(city.id)}
            />
          ))}
        </ButtonGroup>
        <TouchableOpacity onPress={() => Actions.reset('home')}>
          <BackScreen>Voltar para tela inicial</BackScreen>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
};

export default Voting;
