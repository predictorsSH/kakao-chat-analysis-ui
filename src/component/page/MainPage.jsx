import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import FileSubmit from "../part/FileSubmit";
import AnalysisCard from "../part/AnalysisCard";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center ;    
    // padding: 10pt;
    `;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150pt;
    
    // height: 100vh;

    & > * {
    margin-right: 10px; /* 간격을 원하는 만큼 설정합니다. */
    }

    & > *:last-child {
    margin-right: 0; /* 마지막 요소는 간격을 없애줍니다. */
    }
    `;

const Title = styled.h1`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 4rem;
    color: #444444;
    text-shadow: 2px 2px 2px #c4c4c4;
    background-color: transparent;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  `;

function MainPage(props) {
    const {} = props;
    const [file, setFile] = useState("")
    const [f_id, setFid] = useState("")

    return (
        <Wrapper>
            <Title>카카오 채팅방 분석하기</Title>
            <Container>
                <FileSubmit
                onChange = {(event) => {
                    const uploadFile = event.target.files[0]
                    setFile(uploadFile)
                    console.log(uploadFile)
                }}

                onClick = {()=>{
                    const formData = new FormData();
                    formData.append('file',file)
                    console.log("useState")
                    console.log(file)
                    axios({
                        method: "POST",
                        url :"http://127.0.0.1:8000",
                        data: formData,
                    }).then(function(response){
                        console.log(response.data.f_id)
                        setFid(response.data.f_id)
                        
                    })

                }}
                />
                <AnalysisCard f_id={f_id}></AnalysisCard>
            </Container>
        </Wrapper>
        
    )
}


export default MainPage;