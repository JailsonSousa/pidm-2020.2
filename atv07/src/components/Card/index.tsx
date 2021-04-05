import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useStudent } from '../../hooks/student';
import {
  Container,
  AvatarContainer,
  InfoContainer,
  Name,
  Age,
  Course,
} from './styles';

interface CardProps {
  data: {
    uid: string;
    name: string;
    age: number;
    course: string;
  };
}

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  const { navigate } = useNavigation();
  const { deleteStudent, getAll } = useStudent();

  const handleUpdateStudent = useCallback(
    studentUID => {
      navigate('student', { studentUID });
    },
    [navigate],
  );

  const handleDeleteStudent = useCallback(
    async studentUID => {
      Alert.alert(
        'Confirmação de exclusão',
        'Tem certeza que deseja excluir esse cadastro?',
        [
          {
            text: 'Cancelar',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              deleteStudent(studentUID);
              getAll();
            },
          },
        ],
      );
    },
    [deleteStudent],
  );

  return (
    <Container
      onPress={() => handleUpdateStudent(data.uid)}
      onLongPress={() => handleDeleteStudent(data.uid)}
    >
      <AvatarContainer>
        <FontAwesome5 name="user-graduate" size={40} color="#313131" />
      </AvatarContainer>
      <InfoContainer>
        <Name>Nome: {data.name}</Name>
        <Age>Idade: {data.age} ano(s)</Age>
        <Course>Curso: {data.course}</Course>
      </InfoContainer>
    </Container>
  );
};

export default Card;
