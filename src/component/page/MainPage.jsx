import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import FileSubmit from "../part/FileSubmit";
import AnalysisCard from "../part/AnalysisCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import { API } from "../../config/config";


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
   
    
    // height: 100vh;

    & > * {
    margin-right: 10px; /* 간격을 원하는 만큼 설정합니다. */
    }

    & > *:last-child {
    margin-right: 0; /* 마지막 요소는 간격을 없애줍니다. */
    }
    `;

const SubmitContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #000000;
  text-align: center;
  margin-top: 2rem;
  background-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10vh 0;
  
`;

 const ProcessStatusText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
 
 `
  
function MainPage(props) {
    const {} = props;
    const [file, setFile] = useState("")
    const [f_id, setFid] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [analysisAvailable, setAnalysisAvailable] = useState(false);
    const [processStatus, setProcessStatus] = useState("파일을 선택하고 제출해 주세요");

    

    return (
        <Wrapper>
            <Title>who are we</Title>

            <Container>
                <SubmitContainer>
                <FileSubmit
                onChange = {(event) => {
                    const uploadFile = event.target.files[0]
                    setFile(uploadFile)
                    setAnalysisAvailable(false)
                    setProcessStatus("제출 버튼을 클릭해주세요")
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
                    setProcessStatus("파일을 제출했습니다. 분석 버튼을 클릭하세요")
                }}

                onAnalysis = {()=>{
                    setIsLoading(true)
                    axios.post(`${API.ANALYSIS}${f_id}`)
                    .then((response) => {
                        setIsLoading(false);
                        setAnalysisAvailable(true);
                        setProcessStatus("분석이 완료 되었습니다.")
                    })
                }}
                />
                {isLoading && <LoadingSpinner />}
                {!isLoading && (
                    <ProcessStatusText>
                        {processStatus}
                    </ProcessStatusText>
                )}
                </SubmitContainer>
            
                <AnalysisCard f_id={f_id} isAvailable = {analysisAvailable} ></AnalysisCard>
                
            </Container>
        </Wrapper>
        
    )
}


export default MainPage;