import React from "react";

import Header from "../../components/Header";
import Body from "../../components/Body";
import Subject from "../../components/Subject";

import { Container, TitleSubjects, Divider } from "./styles";

const student = {
  avatarURL:
    "https://avatars3.githubusercontent.com/u/17068899?s=460&u=63f1259881f6366712bd92c46f739f709366ffac&v=4",
  name: "Jailson de Sousa Bastos",
  course: "Sistemas de informação",
};

const subjects = [
  {
    cod: "QXD0197",
    name: "Projeto de Interfaces para Dispositivos Móveis",
    teacher: "Jefferson de Carvalho Silva",
  },
  {
    cod: "QXD0193",
    name: "Projeto de Interfaces Web",
    teacher: "Victor Aguiar Evangelista de Farias",
  },
  {
    cod: "QXD0029",
    name: "Empreendedorismo",
    teacher: "Alberto Sampaio Lima",
  },
  {
    cod: "QXD0206",
    name: "Marketing",
    teacher: "Francisco George Costa Torres",
  },
];

const Main: React.FC = () => {
  return (
    <Container>
      <Header headerInfo={{ name: student.name, course: student.course }} />
      <Divider width={0.3} />
      <Body bodyProps={{ avatarURL: student.avatarURL }} />
      <TitleSubjects>Lista de disciplinas</TitleSubjects>
      <Divider width={0.3} />
      {subjects.map((subject) => (
        <>
          <Subject subject={subject} key={subject.cod} />
        </>
      ))}
    </Container>
  );
};

export default Main;
