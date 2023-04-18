import React, { useState } from "react";
import FileUpload from "../ui/FileUpload";
import styled from "styled-components";

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

    return (
        <Wrapper>
            <Container>
                <FileUpload 
                    title="파일업로드"
                    onChange = {(event) => {
                        setFile(event.target.file)
                    }}
                    >
                </FileUpload>
            </Container>
        </Wrapper>
    )
}

export default MainPage;