import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #333;
  border-top-color: transparent;
  animation: ${spin} 1s ease-in-out infinite;
`;

const Text = styled.span`
  margin-top: 10px;
`;

function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <Spinner />
      <Text>분석중입니다...</Text>
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;