import React, { createContext, useCallback, useState, useContext } from 'react';
import { firestore } from '../config/firebase';

export interface StudentProps {
  uid: string;
  name: string;
  course: string;
  age: number;
}

interface StudentContextData {
  loadingStudents: boolean;
  getAll(): Promise<StudentProps[]>;
  getById(studentId: string): Promise<StudentProps>;
}

const StudentContext = createContext<StudentContextData>(
  {} as StudentContextData,
);

const StudentProvider: React.FC = ({ children }: any) => {
  const [loadingStudents, setLoadingStudents] = useState(false);

  const getAll = useCallback(async () => {
    setLoadingStudents(true);

    const studentsRef = await firestore.collection('students').get();
    setLoadingStudents(false);
    const students: StudentProps[] = [] as StudentProps[];
    studentsRef.forEach(current =>
      students.push(current.data() as StudentProps),
    );
    return students;
  }, []);

  const getById = useCallback(async studentId => {
    setLoadingStudents(true);
    const studentsRef = await firestore
      .collection('students')
      .doc(studentId)
      .get();

    setLoadingStudents(false);

    return studentsRef.data() as StudentProps;
  }, []);

  return (
    <StudentContext.Provider
      value={{
        getAll,
        getById,
        loadingStudents,
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
