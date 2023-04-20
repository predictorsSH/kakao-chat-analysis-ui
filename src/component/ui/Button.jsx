import React from "react";
import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: #4CAF50;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   cursor: pointer;
//   font-size: 16px;
//   padding: 5px;
//   transition: transform 0.2s ease-in-out;

//   &:hover {
//     background-color: #3e8e41;
//     transform: scale(1.05);
//   }

//   &:active {
//     background-color: #36723c;
//     transform: scale(0.95);
//   }
// `;

const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  padding: 20px 50px;
  margin-top: 50px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #4CAF50;
    border: 2px solid #4CAF50;
    transform: scale(1.05);
  }
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button