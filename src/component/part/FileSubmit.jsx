import React, { useState } from "react";
import FileUpload from "../ui/FileUpload";
import styled from "styled-components";
import Button from "../ui/Button";
import RowButtonWrapper from "../ui/RowButtonWrapper";
import { FaCloudUploadAlt } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 300px;
  // height: 270px;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #555;
`;

const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #666;
  border: 2px solid #999;
  border-radius: 20px;
  font-size: 24px;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4CAF50;
    color: #fff;
    border: 2px solid #4CAF50;
    transform: scale(1.05);
  }
`;


function FileSubmit(props) {
    const { onChange, onClick, onAnalysis} = props;

    return (
        <Wrapper>
            <Container>
                <Title>파일 업로드</Title>
                <h4>분석하고싶은 채팅방 데이터를 선택하세요</h4>
                <UploadButton htmlFor="fileInput" >
                    <FaCloudUploadAlt size={32} style={{marginRight:'10px'}}/>
                    <FileUpload id="fileInput" onChange={onChange}/>
                </UploadButton>
                <RowButtonWrapper>
                  <Button title='제출' onClick = {onClick}></Button>
                  <Button title='분석' onClick = {onAnalysis}></Button>

                </RowButtonWrapper>
            </Container>
        </Wrapper>

    )
}

export default FileSubmit;