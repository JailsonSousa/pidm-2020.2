import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  align-self: center;
  margin: 20px 0px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const Header = styled.View`
  height: 80px;
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderInfo = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const AvatarContainer = styled.View`
  margin-left: 10px;
`;

export const AvatarImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #939393;
`;

export const Body = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;

  border: 1px solid #d9d9d9;
`;

export const BodyImage = styled.Image`
  width: 275px;
  height: 275px;
  border-radius: 5px;
`;

export const Actions = styled.View``;

//

export const ModalWrapper = styled.View``;

export const ContainerModal = styled.Modal`
  margin-top: 100px;
`;

export const ContentModal = styled.View`
  width: 90%;
  align-self: center;
  margin: 20px 0px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const HeaderModal = styled.View`
  height: 80px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const TitleModal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const SubtitleModal = styled.Text`
  color: #939393;
  font-size: 14px;
`;

export const BodyModal = styled.View`
  padding: 20px;
  border: 1px solid #d9d9d9;
`;

export const ActionsModal = styled.View`
  margin-top: 10px;
`;

export const Track = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;
