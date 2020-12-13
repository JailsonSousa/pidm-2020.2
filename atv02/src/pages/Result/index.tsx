/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ImgResult, TotalVotes, BackScreen } from './styles';
import { useVote } from '../../hooks/vote';

import {
  Container,
  Title,
  Header,
  Content,
  Item,
  ItemText,
  ButtonGroup,
  Button,
  Subtitle,
} from '../../components';

const Result: React.FC = () => {
  const { cities } = useVote();
  return (
    <Container>
      <Header>
        <Title>Votação de cidades</Title>
        <ImgResult
          source={require('../../assets/result.jpg')}
          style={{ resizeMode: 'stretch' }}
        />
      </Header>
      <Subtitle>Resultado Geral</Subtitle>
      <Content>
        {cities.map(city => (
          <Item key={city.id} direction="row">
            <ItemText style={{ fontSize: 25 }}>{city.name}</ItemText>
            <TotalVotes votes={city.numberVotes}>
              {`${city.numberVotes}`}
            </TotalVotes>
          </Item>
        ))}

        <Item direction="row" style={{ borderTopWidth: 1 }}>
          <ItemText style={{ fontSize: 25 }}>Total</ItemText>
          <TotalVotes votes={10}>
            {cities.reduce((total, current) => total + current.numberVotes, 0)}
          </TotalVotes>
        </Item>
      </Content>

      <ButtonGroup>
        <Button title="Votar" onPress={() => Actions.reset('voting')} />

        <TouchableOpacity onPress={() => Actions.reset('home')}>
          <BackScreen>Voltar para tela inicial</BackScreen>
        </TouchableOpacity>
      </ButtonGroup>
    </Container>
  );
};

export default Result;
