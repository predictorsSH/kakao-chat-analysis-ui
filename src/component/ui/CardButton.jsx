import React from 'react';
import styled from 'styled-components';

const StyledCardButton = styled.div`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333333;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  width: 50%;

  &:hover {
    background-color: #f5f5f5;
    border-color: #bfbfbf;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function CardButton(props) {
  const { label, onClick } = props;

  return <StyledCardButton onClick={onClick}>{label}</StyledCardButton>;
}

export default CardButton;