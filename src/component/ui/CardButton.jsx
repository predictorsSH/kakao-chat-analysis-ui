import React from 'react';
import styled from 'styled-components';

const StyledCardButton = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #494949;
  cursor: pointer;
  font-size: 16px;
  display:flex;
  font-weight: 500;
  align-items:center;
  justify-content:center;
  padding: 12px 16px;
  transition: all 0.3s ease;
  width: 145px;
  height: 170px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #e8e8e8;
    border-color: #bfbfbf;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function CardButton(props) {
  const { f_id ,label, onClick } = props;

  return <StyledCardButton f_id={f_id} onClick={onClick}>{label}</StyledCardButton>;
}

export default CardButton;