import styled from 'styled-components/native';
import { width } from '../../util/dimensions';

interface TotalVotesProps {
  votes: number;
}

export const ImgResult = styled.Image`
  height: 230px;
  width: ${width * 0.9};
`;

export const TotalVotes = styled.Text<TotalVotesProps>`
  font-family: RobotoSlab_Regular;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 30px;
  color: ${props => (props.votes > 0 ? '#9dd49a' : '#db6863')};
`;

export const BackScreen = styled.Text`
  font-family: RobotoSlab_Medium;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: #2c3782;
  text-align: center;
  margin: 10px 0px;
`;
