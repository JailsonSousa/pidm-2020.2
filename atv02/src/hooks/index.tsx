/* eslint-disable react/prop-types */
import React from 'react';

import { VoteProvider } from './vote';

const AppProvider: React.FC = ({ children }) => (
  <VoteProvider>{children}</VoteProvider>
);

export default AppProvider;
