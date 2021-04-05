import React, { createContext, useCallback, useState, useContext } from 'react';
import { Alert } from 'react-native';
import { firestore } from '../config/firebase';
import * as RootNavigation from '../services/RootNavigation';

export interface StudentProps {
  uid: string;
  name: string;
  course: string;
  age: number;
}

export interface CreateStudentProps {
  name: string;
  course: string;
  age: number;
}

interface StudentContextData {
  loadingStudents: boolean;
  students: StudentProps[];
  getAll(): Promise<void>;
  getById(studentId: string): Promise<StudentProps | null>;
  addStudent(student: CreateStudentProps): Promise<void>;
  updateStudent(student: StudentProps): Promise<void>;
  deleteStudent(studentId: string): Promise<void>;
}

const StudentContext = createContext<StudentContextData>(
  {} as StudentContextData,
);

const StudentProvider: React.FC = ({ children }: any) => {
  const [studentsData, setStudentsData] = useState<StudentProps[]>(
    [] as StudentProps[],
  );
  const [loadingStudents, setLoadingStudents] = useState(false);
  const studentsRef = firestore.collection('students');

  const getAll = useCallback(async () => {
    try {
      setLoadingStudents(true);

      const studentsResponse = await studentsRef.get();
      const students: StudentProps[] = [] as StudentProps[];
      studentsResponse.forEach(current =>
        students.push(current.data() as StudentProps),
      );
      setStudentsData(students);
    } catch (error) {
      Alert.alert('Ops, Ocorreu um erro.\nTente novamente mais tarde.');
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  const getById = useCallback(async studentId => {
    try {
      setLoadingStudents(true);
      const studentResponse = await studentsRef.doc(studentId).get();
      return studentResponse.data() as StudentProps;
    } catch (error) {
      Alert.alert('Ops, Ocorreu um erro.\nTente novamente mais tarde.');
      return null;
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  const addStudent = useCallback(async (student: CreateStudentProps) => {
    try {
      setLoadingStudents(true);
      const uid = studentsRef.doc().id;
      Object.assign(student, { uid });
      await studentsRef.doc(uid).set(student);

      Alert.alert(
        'Cadastro de estudante.',
        'Estudante cadastrado com sucesso!',
        [
          {
            text: 'Ok',
            onPress: () => RootNavigation.navigate('main'),
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      Alert.alert('Ops, Ocorreu um erro.\nTente novamente mais tarde.');
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  const updateStudent = useCallback(async (student: StudentProps) => {
    try {
      setLoadingStudents(true);
      await studentsRef.doc(student.uid).set(student);

      Alert.alert(
        'Atualização de cadastro.',
        'Cadastro atualizado com sucesso!',
        [
          {
            text: 'Ok',
            onPress: () => RootNavigation.navigate('main'),
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      Alert.alert('Ops, Ocorreu um erro.\nTente novamente mais tarde.');
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  const deleteStudent = useCallback(async studentId => {
    try {
      setLoadingStudents(true);
      await studentsRef.doc(studentId).delete();
      Alert.alert(
        'Deletar estudante',
        'Cadastro do estudante foi deletado com sucesso!',
      );
    } catch (error) {
      Alert.alert('Ops, Ocorreu um erro.\nTente novamente mais tarde.');
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students: studentsData,
        loadingStudents,
        getAll,
        getById,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

function useStudent(): StudentContextData {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { StudentProvider, useStudent };
