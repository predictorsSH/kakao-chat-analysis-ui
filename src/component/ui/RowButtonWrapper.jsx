import React from 'react';
import styled from 'styled-components';

// Styled-components로 RowButtonWrapper를 만듭니다.
const RowButtonWrapper = styled.div`
  display: flex; // 버튼들을 가로로 나열합니다.
  justify-content: space-between; // 버튼 간의 간격을 균등하게 설정합니다.
  align-items: center; // 버튼들을 수직으로 가운데 정렬합니다.
  margin: 10px 10px; // 필요에 따라 마진을 조정합니다.

  button {
    margin-right: 10px; // 오른쪽 여백을 10px로 설정합니다.
  }

`;

export default RowButtonWrapper