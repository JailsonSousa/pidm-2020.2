import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content, Title, Form, Label, Input } from './styles';

import {
  useStudent,
  StudentProps,
  CreateStudentProps,
} from '../../hooks/student';

interface RouteParamsProps {
  studentUID: string;
}

const Student: React.FC = () => {
  const { params } = useRoute<
    RouteProp<Record<string, RouteParamsProps>, string>
  >();

  const { getById, loadingStudents, addStudent, updateStudent } = useStudent();
  const [studentUID, setStudentUID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentCourse, setStudentCourse] = useState('');

  useEffect(() => {
    async function loadData() {
      if (params) {
        const { uid, name, age, course } = (await getById(
          params.studentUID,
        )) as StudentProps;
        setStudentUID(uid);
        setStudentName(name);
        setStudentAge(String(age));
        setStudentCourse(course);
      }
    }

    loadData();
  }, [getById, params]);

  const handleAddStudent = useCallback(
    async (newStudent: CreateStudentProps) => {
      await addStudent(newStudent);
    },
    [addStudent],
  );

  const handleUpdateStudent = useCallback(
    async (student: StudentProps) => {
      await updateStudent(student);
    },
    [addStudent],
  );

  return (
    <Container>
      <Header title="Cadastro de estudante" hasBackAction />
      <Content>
        {loadingStudents ? (
          <ActivityIndicator size="large" color="#ddd" />
        ) : (
          <>
            <Title>
              {!studentUID ? 'Novo Cadastro' : 'Atualizar cadastro'}
            </Title>

            <Form>
              <Label>Nome completo</Label>
              <Input
                placeholder="Informe o seu nome"
                value={studentName}
                onChangeText={text => setStudentName(text)}
              />

              <Label>Idade</Label>
              <Input
                placeholder="Informe sua idade"
                value={studentAge}
                keyboardType="number-pad"
                onChangeText={text => setStudentAge(text)}
              />

              <Label>Curso</Label>
              <Input
                placeholder="Informe o seu curso"
                value={studentCourse}
                onChangeText={text => setStudentCourse(text)}
              />

              <Button
                title={!studentUID ? 'Cadastrar' : 'Atualizar'}
                onPress={() => {
                  if (studentUID)
                    return handleUpdateStudent({
                      uid: studentUID,
                      name: studentName,
                      age: Number(studentAge),
                      course: studentCourse,
                    });

                  return handleAddStudent({
                    name: studentName,
                    age: Number(studentAge),
                    course: studentCourse,
                  });
                }}
              />
            </Form>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Student;
