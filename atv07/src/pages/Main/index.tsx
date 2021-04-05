import React, { useEffect, useCallback } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container, Content } from './styles';

import { useStudent } from '../../hooks/student';

const Main: React.FC = () => {
  const { getAll, students, loadingStudents } = useStudent();

  useEffect(() => {
    async function loadData() {
      await getAll();
    }

    loadData();
  }, [getAll]);

  const renderItem = useCallback(({ item }) => {
    return <Card data={item} />;
  }, []);

  return (
    <Container>
      <Header title="Lista de estudantes" hasAddAction />
      <Content>
        {loadingStudents ? (
          <ActivityIndicator size="large" color="#ddd" />
        ) : (
          <FlatList
            data={students}
            renderItem={renderItem}
            keyExtractor={item => item.uid}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
