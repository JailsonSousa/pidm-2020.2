import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Button from '../Button';

import {
  Container,
  Header,
  HeaderInfo,
  AvatarContainer,
  AvatarImage,
  Title,
  Subtitle,
  Body,
  BodyImage,
  Actions,
  Track,
  ContainerModal,
  ContentModal,
  HeaderModal,
  TitleModal,
  SubtitleModal,
  BodyModal,
  ActionsModal,
} from './styles';

interface CardProps {
  album: {
    artist: string;
    name: string;
    image: string;
    links: {
      tracks: string;
    };
  };
}

const Card: React.FC<any> = ({ album }: CardProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(album.links.tracks);
      const tracksResponse = response.data.tracks;
      setTracks(tracksResponse);
    }
    loadData();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <AvatarContainer>
            <AvatarImage
              source={{
                uri: `https://raw.githubusercontent.com/san650/ten/master/apps/music${album.image}`,
              }}
            />
          </AvatarContainer>
          <HeaderInfo>
            <Title>{album.artist}</Title>
            <Subtitle>{album.name}</Subtitle>
          </HeaderInfo>
        </Header>
        <Body>
          <BodyImage
            source={{
              uri: `https://raw.githubusercontent.com/san650/ten/master/apps/music${album.image}`,
            }}
          />
        </Body>
        <Actions>
          <Button
            title="Ver Músicas"
            onPress={() => setVisibleModal(!visibleModal)}
          />
          <Button title="Me Compre!" onPress={() => null} />
        </Actions>
      </Container>
      <ContainerModal
        animationType="slide"
        transparent={false}
        visible={visibleModal}
      >
        <ContentModal style={{ marginTop: 100 }}>
          <HeaderModal>
            <TitleModal>{album.name}</TitleModal>
            <SubtitleModal>{album.artist}</SubtitleModal>
          </HeaderModal>
          <BodyModal>
            {tracks.map((track: any, index) => (
              <Track
                key={track.id}
              >{`${index} - (${track.duration}) - ${track.title}`}</Track>
            ))}
          </BodyModal>
          <ActionsModal>
            <Button title="Voltar" onPress={() => setVisibleModal(false)} />
          </ActionsModal>
        </ContentModal>
      </ContainerModal>
    </>
  );
};

export default Card;
