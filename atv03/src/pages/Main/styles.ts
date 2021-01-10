import styled from 'styled-components/native';

interface ResultProps {
  result: boolean;
}

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: Courier;
  font-weight: bold;
  text-transform: uppercase;
  color: #0b7dee;

  margin-top: 40px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #181818;

  margin-top: 30px;
`;

export const Form = styled.View`
  margin-top: 40px;
  align-items: center;
  width: 100%;
`;

export const LabelInput = styled.Text`
  width: 100%;
  font-size: 12px;
  text-align: left;

  color: #181818;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 0.5px solid #d4d4d4;
  width: 100%;
  margin: 10px 0px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #0b7dee;

  justify-content: center;
  align-items: center;

  margin-top: 40px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const MessageIMC = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #141414;

  margin-top: 30px;
`;

export const ResultIMC = styled.Text<ResultProps>`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${props => (props.result ? '#0b7dee' : '#db6863')};

  margin-top: 10px;
`;
