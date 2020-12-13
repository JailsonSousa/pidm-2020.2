import styled, { css } from 'styled-components/native';

interface ContainerProps {
  flexDirection?: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  margin-top: 2px;

  ${props =>
    props.flexDirection &&
    css`
      justify-content: space-between;
      padding: 0px 10px;
    `}
`;
