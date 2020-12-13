import styled from 'styled-components/native';

import { width } from '../../util/dimensions';

export const ImgVote = styled.Image`
  height: 300px;
  width: ${width};
`;

export const TopRated = styled.Text`
  font-family: RobotoSlab_Regular;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #9dd49a;
`;

export const LeastVoted = styled.Text`
  font-family: RobotoSlab_Regular;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #db6863;
`;
