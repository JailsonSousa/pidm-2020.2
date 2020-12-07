import React from "react";

import { Container, SubjectCod, SubjectName, SubjectTeacher } from "./styles";

interface SubjectProps {
  cod: string;
  name: string;
  teacher: string;
}

const Subject: React.FC<{ subject: SubjectProps }> = ({ subject }) => {
  return (
    <Container>
      <SubjectCod>Código: {subject.cod}</SubjectCod>
      <SubjectTeacher>Professor: {subject.teacher}</SubjectTeacher>
      <SubjectName>Nome: {subject.name}</SubjectName>
    </Container>
  );
};

export default Subject;
