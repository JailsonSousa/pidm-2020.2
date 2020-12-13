/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export interface CityProps {
  id: number;
  name: string;
  numberVotes: number;
}

interface VoteContextData {
  cities: CityProps[];
  registerVote(id: number): void;
  loadCities(): Promise<CityProps[]>;
  loadStorage(): void;
}

const VoteContext = createContext<VoteContextData>({} as VoteContextData);

const VoteProvider: React.FC = ({ children }) => {
  const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);

  const loadCities = useCallback(async () => {
    try {
      const citiesJSON = await AsyncStorage.getItem('@atv02:cities');

      if (citiesJSON) {
        const citiesStoraged = JSON.parse(citiesJSON);
        setCities(citiesStoraged);
        return citiesStoraged;
      }

      const votingCities = [
        {
          id: 1,
          name: 'Fortaleza',
          numberVotes: 0,
        },
        {
          id: 2,
          name: 'Juazeiro',
          numberVotes: 0,
        },
        {
          id: 3,
          name: 'Limoeiro',
          numberVotes: 0,
        },
        {
          id: 4,
          name: 'Quixadá',
          numberVotes: 0,
        },
      ];

      await AsyncStorage.setItem('@atv02:cities', JSON.stringify(votingCities));
      setCities(votingCities);
      return votingCities;
    } catch (error) {
      return Alert.alert(
        'Ops, Ocorreu um erro!',
        'Falha ao carregar as cidades',
      );
    }
  }, [cities]);

  const loadStorage = useCallback(async () => {
    try {
      const citiesJSON = await AsyncStorage.getItem('@atv02:cities');

      if (citiesJSON) {
        const citiesStoraged = JSON.parse(citiesJSON);
        setCities(citiesStoraged);
        return citiesStoraged;
      }

      setCities([] as CityProps[]);

      return [] as CityProps[];
    } catch (error) {
      Alert.alert(
        'Ops, Ocorreu um erro!',
        'Falha ao carregar o banco de dados',
      );
    }
  }, []);

  const registerVote = useCallback(
    async id => {
      const citiesUpdate = cities.map(city => {
        if (city.id === id) {
          return {
            id: city.id,
            name: city.name,
            numberVotes: city.numberVotes + 1,
          };
        }

        return city;
      });

      await AsyncStorage.removeItem('@atv02:cities');
      await AsyncStorage.setItem('@atv02:cities', JSON.stringify(citiesUpdate));
      setCities(citiesUpdate);
    },
    [cities],
  );

  return (
    <VoteContext.Provider
      value={{
        loadCities,
        loadStorage,
        registerVote,
        cities,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

function useVote(): VoteContextData {
  const context = useContext(VoteContext);

  if (!context) {
    throw new Error('useVote must be used within an VoteProvider');
  }

  return context;
}

export { VoteProvider, useVote };
