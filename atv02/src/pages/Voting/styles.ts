import styled from 'styled-components/native';

import { width } from '../../util/dimensions';

export const Wrapper = styled.ScrollView``;

export const ImgVote = styled.Image`
  height: 230px;
  width: ${width};
`;

export const BackScreen = styled.Text`
  font-family: RobotoSlab_Medium;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: #2c3782;
  text-align: center;
  margin-top: 10px;
`;
