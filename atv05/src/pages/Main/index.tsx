import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container } from './styles';

interface AlbumProps {
  id: number;
  artist: string;
  name: string;
  image: string;
  links: {
    tracks: string;
  };
}

const Main: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumProps[]>([] as AlbumProps[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await api.get('/api/albums.json');
      const albumsResponse = response.data.albums;
      setAlbums(albumsResponse);
      setLoading(false);
    }

    loadData();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <Card album={item} />;
  }, []);

  return (
    <Container>
      <Header />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#000"
          style={{ marginTop: 100 }}
        />
      ) : (
        <FlatList
          data={albums}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
        />
      )}
    </Container>
  );
};

export default Main;
