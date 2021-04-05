/* eslint-disable react/prop-types */
import React from 'react';

import { StudentProvider } from './student';

const AppProvider: React.FC = ({ children }) => (
  <StudentProvider>{children}</StudentProvider>
);

export default AppProvider;
