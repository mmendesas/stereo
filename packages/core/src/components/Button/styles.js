import styled, { css } from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.secondary ? '#0aa' : '#0a3')};
  color: #fff;
  padding: 10px 15px;
  font-size: ${props => (props.big ? '20px' : '16px')};
  border: 2px solid ${props => (props.secondary ? '#0aa' : '#0a3')};
  height: 40px;

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        color: #0a3;
      `
    );
  }}

  &:hover {
    opacity: 0.9;
  }
`;
