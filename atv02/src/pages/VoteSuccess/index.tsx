/* eslint-disable global-require */
import React, { useRef } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { Container, BackScreen, Congratulations } from './styles';

const VoteSuccess: React.FC = () => {
  const animation = useRef(null);

  return (
    <Container>
      <LottieView
        ref={animation}
        style={{ width: 300, height: 300 }}
        autoPlay
        source={require('../../assets/success.json')}
        loop={false}
      />

      <Congratulations>Voto Registrado com sucesso!!</Congratulations>

      <TouchableOpacity onPress={() => Actions.reset('home')}>
        <BackScreen>Voltar para tela inicial</BackScreen>
      </TouchableOpacity>
    </Container>
  );
};

export default VoteSuccess;
