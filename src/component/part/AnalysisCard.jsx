import React from "react";
import styled from "styled-components";
import CardButton from "../ui/CardButton";
import axios from "axios";

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
    const {f_id} = props;

    return (
        <Wrapper>
            <CardButton
                f_id = {f_id}
                label = "누가 가장 말이 많을까?"
                onClick = {()=>{
                    axios.get(`http://127.0.0.1:8000/usercount/${f_id}`)
                        .then((response) => {
                            const data = JSON.parse(response.data.user_count)
                            console.log(data)
                        })
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