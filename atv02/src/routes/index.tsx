import React from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '../pages/Home';
import Voting from '../pages/Voting';
import Result from '../pages/Result';
import VoteSuccess from '../pages/VoteSuccess';

const AppNavigator: React.FC = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="home" component={Home} />
        <Scene key="voting" component={Voting} />
        <Scene key="result" component={Result} />
        <Scene key="success" component={VoteSuccess} />
      </Stack>
    </Router>
  );
};

export default AppNavigator;
