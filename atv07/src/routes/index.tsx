import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Student from '../pages/Student';

const Default = createStackNavigator();

const DefaultRoutes: React.FC = () => (
  <Default.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EBEDF3' },
    }}
  >
    <Default.Screen name="main" component={Main} />
    <Default.Screen name="student" component={Student} />
  </Default.Navigator>
);

export default DefaultRoutes;
