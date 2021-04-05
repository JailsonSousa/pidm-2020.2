import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content, Title, Form, Label, Input } from './styles';

import { useStudent, StudentProps } from '../../hooks/student';

interface RouteParamsProps {
  studentUID: string;
}

const Student: React.FC = () => {
  const { params } = useRoute<
    RouteProp<Record<string, RouteParamsProps>, string>
  >();

  const { getById, loadingStudents } = useStudent();
  const [studentUID, setStudentUID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentCourse, setStudentCourse] = useState('');

  useEffect(() => {
    async function loadData() {
      if (params) {
        const { uid, name, age, course } = await getById(params.studentUID);
        setStudentUID(uid);
        setStudentName(name);
        setStudentAge(String(age));
        setStudentCourse(course);
      }
    }

    loadData();
  }, [getById, params]);

  return (
    <Container>
      <Header title="Cadastro de estudante" hasBackAction />
      <Content>
        {loadingStudents ? (
          <ActivityIndicator size="large" color="#ddd" />
        ) : (
          <>
            <Title>
              {studentUID === null ? 'Novo Cadastro' : 'Atualizar cadastro'}
            </Title>

            <Form>
              <Label>Nome completo</Label>
              <Input placeholder="Informe o seu nome" value={studentName} />

              <Label>Idade</Label>
              <Input placeholder="Informe sua idade" value={studentAge} />

              <Label>Curso</Label>
              <Input placeholder="Informe o seu curso" value={studentCourse} />

              <Button
                title={studentUID === null ? 'Cadastrar' : 'Atualizar'}
                onPress={() => null}
              />
            </Form>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Student;
