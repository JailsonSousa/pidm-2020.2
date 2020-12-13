import styled from 'styled-components/native';
import { width } from '../../util/dimensions';

export const Container = styled.View`
  margin: 5px 0px;
`;

export const Text = styled.Text`
  font-family: RobotoSlab_Medium;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #2c3782;
`;

export const Divider = styled.View`
  border: 1px;
  border-color: #2c3782;
  margin: 5px;
  width: ${width * 0.2};
  align-self: center;
`;
