import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container, Content } from './styles';

import { useStudent, StudentProps } from '../../hooks/student';

const Main: React.FC = () => {
  const { getAll, loadingStudents } = useStudent();
  const [students, setStudents] = useState<StudentProps[]>(
    [] as StudentProps[],
  );

  useEffect(() => {
    async function loadData() {
      const responseStudents = await getAll();
      setStudents(responseStudents);
    }

    loadData();
  }, [getAll]);

  const renderItem = useCallback(({ item }) => {
    return <Card data={item} />;
  }, []);

  return (
    <Container>
      <Header title="Lista de estudantes" />
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
