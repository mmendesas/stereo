import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  width: ${props => props.width || '200px'};
  padding: 10px;
  margin: ${props => (props.noMargin ? 0 : '15px')};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 1);
  }
`;

export const CardImage = styled.img`
  width: 100%;

  ${props =>
    props.noImage &&
    css`
      background-color: #ccc;
      width: 100%;
      height: 100%;
      min-height: 150px;
      filter: blur(6px);
    `}
`;

export const CardBody = styled.div`
  padding: 5px;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
`;

export const CardText = styled.div`
  margin: 10px 0px;
`;
