import React, { useState } from "react";
import FileUpload from "../ui/FileUpload";
import styled from "styled-components";
import Button from "../ui/Button";
import axios from "axios"

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;
    const [file, setFile] = useState("")
    const formData = new FormData();
    // formData.append = ("test","abv")

    return (
        <Wrapper>
            <Container>
                <FileUpload 
                    onChange = {(event) => {
                        setFile(event.target.file)
                        formData.append = ("test","qwe");
                        
                    }}
                    >
                </FileUpload>
                <Button
                    title = "올리기"
                    onClick = {()=>{
                        axios({
                            method: "POST",
                            url :"http://127.0.0.1:8000",
                            mode: "cors",
                            headers: {"Content-Type": "multipart/form-data",},
                            data: formData,
                        }).then(function(response){
                            console.log(response)
                            console.log(formData)
                        })
      
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default MainPage;