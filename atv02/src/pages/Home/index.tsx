/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';
import { Actions } from 'react-native-router-flux';
import { useVote, CityProps } from '../../hooks/vote';

import {
  Container,
  Header,
  Content,
  Title,
  Button,
  ButtonGroup,
  ItemText,
  Item,
} from '../../components';

import { ImgVote, TopRated, LeastVoted } from './styles';

const Home: React.FC = () => {
  const { loadCities } = useVote();
  const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);
  const [topRated, setTopRated] = useState('Nenhum voto registrado...');
  const [leastVoted, setLeastVoted] = useState('Nenhum voto registrado...');

  useEffect(() => {
    async function fetchData() {
      const loadedCities = await loadCities();
      setCities(loadedCities);
      handleTopAndLeastVotes(loadedCities);
    }

    fetchData();
  }, [topRated, leastVoted]);

  const handleTopAndLeastVotes = useCallback(
    (participants: CityProps[]) => {
      // search for the most voted
      const searchTopRated = participants.reduce((prev, current) =>
        prev.numberVotes > current.numberVotes ? prev : current,
      );

      if (searchTopRated.numberVotes === 0) return;
      // check if there are more cities with the same amount of votes

      const citiesTopRated = participants
        .filter(
          currentFilter =>
            currentFilter.numberVotes === searchTopRated.numberVotes,
        )
        .map(currentMap => currentMap.name)
        .toString();

      const citiesLeastVoted = participants
        .filter(currentFilter => !currentFilter.name.includes(citiesTopRated))
        .map(currentMap => currentMap.name)
        .toString();

      setTopRated(citiesTopRated);
      setLeastVoted(citiesLeastVoted);
    },
    [topRated, leastVoted],
  );

  return (
    <Container>
      <Header>
        <Title>Votação de cidades</Title>
        <ImgVote source={require('../../assets/vote.jpg')} />
      </Header>
      <Content>
        <Item>
          <ItemText>Mais votada(s):</ItemText>
          <TopRated>{topRated}</TopRated>
        </Item>

        <Item style={{ marginTop: 20 }}>
          <ItemText>Menos votada(s):</ItemText>
          <LeastVoted>{leastVoted}</LeastVoted>
        </Item>
      </Content>

      <ButtonGroup>
        <Button title="Votar" onPress={() => Actions.reset('voting')} />
        <Button
          title="Resultado completo"
          onPress={() => Actions.reset('result')}
        />
      </ButtonGroup>
    </Container>
  );
};

export default Home;
