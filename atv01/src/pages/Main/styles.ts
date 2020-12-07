import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface DividerProps {
  width: number;
}

export const Container = styled.SafeAreaView`
  background: #242424;
  height: 100%;
`;

export const TitleSubjects = styled.Text`
  text-align: center;

  font-size: 21px;
  text-transform: uppercase;
  color: #fff;
  font-family: "RobotoSlab_Medium";
`;

export const Divider = styled.View<DividerProps>`
  border: 0.5px;
  border-color: #fff;
  margin: 5px;
  width: ${(props) => props.width * width};

  align-self: center;
`;
