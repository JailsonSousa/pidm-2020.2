import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  align-self: center;
  justify-content: center;

  width: ${width * 0.9};
  height: 70px;

  margin: 5px 0px;
  padding: 10px;
`;

export const SubjectCod = styled.Text`
  font-size: 12px;
  color: #848484;
  font-family: "RobotoSlab_Regular";
`;

export const SubjectTeacher = styled.Text`
  font-size: 12px;
  color: #848484;
  font-family: "RobotoSlab_Medium";
`;

export const SubjectName = styled.Text`
  font-size: 13px;
  color: #fff;
  font-family: "RobotoSlab_Medium";
`;
