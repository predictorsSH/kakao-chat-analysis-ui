import React from "react";
import styled from "styled-components";
import CardButton from "../ui/CardButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 수직축으로 정렬합니다. */ 
  align-items: center; /* 수직축으로 중앙에 정렬합니다. */
  justify-content: center;
  padding: 50pt;
  height: 100vh;
  width: 50%;

  & > * {
    margin-bottom: 10px; /* 간격을 조절할 값을 입력합니다. */
  }
`;

function AnalysisCard (props) {
    const {} = props;

    return (
        <Wrapper>
            <CardButton
                label = "누가 가장 말이 많을까?"
                onClick = {()=>{
                    console.log('clicked CardButton')
                }}>

            </CardButton>
            <CardButton
                label = "대화가 가장 활발한 시간은?"
                onClick = {()=>{
                    console.log('clicked CardButton')
                }}>

            </CardButton>

        </Wrapper>
    )
}

export default AnalysisCard;