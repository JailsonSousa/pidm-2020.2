import styled from 'styled-components/native';
import { width } from '../../util/dimensions';

export const Container = styled.TouchableOpacity`
  background: #2c3782;
  width: ${width * 0.7};
  padding: 15px 10px;
  border-radius: 6;

  margin: 15px 0px;
`;

export const TextButton = styled.Text`
  font-family: RobotoSlab_Medium;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
