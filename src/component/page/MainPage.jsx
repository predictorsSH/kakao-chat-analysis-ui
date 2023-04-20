import React, { useState } from "react";
import FileUpload from "../ui/FileUpload";
import styled from "styled-components";
import Button from "../ui/Button";
import axios from "axios"
import CardButton from "../ui/CardButton";
import FileSubmit from "../part/FileSubmit";


function MainPage(props) {
    const {} = props;
    const [file, setFile] = useState("")

    return (
        <div>
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
                    console.log(response)
                })

            }}
            />
               
        </div>
    )
}

export default MainPage;