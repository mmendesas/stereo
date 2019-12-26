import styled from 'styled-components';

export const Container = styled.section`
  height: ${props => props.height || '300px'};
  background-color: ${props => props.bgColor || '#0aa'};
  color: ${props => props.color || '#fff'};
  margin: 5px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
