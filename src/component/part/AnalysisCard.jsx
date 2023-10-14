import React, { useState } from "react";
import styled from "styled-components";
import CardButton from "../ui/CardButton";
import axios from "axios";
import UserCountPopup from "../charts/UserCount";
import ActiveTimePopup from "../charts/ActiveTime";
import WordCloudPopup from "../charts/WordCloud";
import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 수직축으로 정렬합니다. */ 
  align-items: center; /* 수직축으로 중앙에 정렬합니다. */
//   justify-content: flex-start;
//   padding: 50pt;
//   height: 100vh;
//   width: 100%;

  & > * {
    margin-bottom: 10px; /* 간격을 조절할 값을 입력합니다. */
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  width: 800px;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  opacity: ${({ isAvailable }) => (isAvailable ? 1 : 0.5)};
`;

const CardButtonContainer = styled(Frame)`
  margin: 20px;
`;


function AnalysisCard (props) {
    const {f_id, isAvailable} = props;
    const [data, setData] = useState("");
    const [cloudData, setCloudData] = useState("")
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isActiveTimePopupOpen, setIsActiveTimePopupOpen] = useState(false);
    const [isAllUserWordsPopupOpen, setIsAllUserWordsPopupOpen] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isAvailable, setIsAvailable] = useState(false)

    function handleOpenPopup() {
      setIsPopupOpen(true);
    }
  
    function handleClosePopup() {
      setIsPopupOpen(false);
    }

    function handleOpenActiveTimePopup() {
        setIsActiveTimePopupOpen(true);
      }
    
    function handleCloseActiveTimePopup() {
    setIsActiveTimePopupOpen(false);
    }

    function handleOpenAllUserCountPopup() {
    setIsAllUserWordsPopupOpen(true);
    }

    function handleCloseAllUserCountPopup() {
    setIsAllUserWordsPopupOpen(false);
    }

    
    return (
        <Wrapper>
            {/* <Button
                title = "분석"
                onClick = {()=>{
                    setIsLoading(true)
                    axios.post(`http://127.0.0.1:8000/basic-analysis/${f_id}`)
                        .then((response) => {
                            console.log("clicked card")
                            setIsLoading(false);
                            setIsAvailable(true)
                        })
                }}>
            </Button> 
            <div>
                {isLoading && <LoadingSpinner />}
                {!isLoading && (
                    <div>
                    </div>
                )}
            </div>  */}
            <CardButtonContainer isAvailable={isAvailable}>        
            <CardButton
                f_id = {f_id}
                label = "제일 말 많은 사람 누구?"
                onClick = {()=>{if (isAvailable){
                    axios.get(`http://127.0.0.1:8000/usercount/${f_id}`)
                        .then((response) => {
                            const responseData = JSON.parse(response.data.user_count)
                            setData(responseData)
                            console.log("clicked card")
                            handleOpenPopup()
                        })}
                }}>

            </CardButton>
            <CardButton
                label = "우리 대화의 피크 타임은 언제?"
                onClick = {()=>{if (isAvailable){
                    axios.get(`http://127.0.0.1:8000/activetime/${f_id}`)
                    .then((response) => {
                        const responseData = JSON.parse(response.data.active_time)
                        setData(responseData)
                        handleOpenActiveTimePopup()
                    })}
                }}>

            </CardButton>
            <CardButton
                label = "그래서 하고싶은 말이 뭔데?"
                onClick = {()=>{if (isAvailable){
                    axios.get(`http://127.0.0.1:8000/alluserwords/${f_id}`)
                    .then((response) => {
                        const responseData = JSON.parse(response.data.user_words_count)
                        setCloudData(responseData)
                        console.log(responseData)
                        handleOpenAllUserCountPopup()
                    })}
                }}>

            </CardButton>
            <CardButton
                label = "누군가 누가 우리에게 웃음을 제일 많이 줬는가"
                onClick = {()=>{if (isAvailable){
                    axios.get(`http://127.0.0.1:8000/activetime/${f_id}`)
                    .then((response) => {
                        const responseData = JSON.parse(response.data.active_time)
                        setData(responseData)
                        handleOpenActiveTimePopup()
                    })}
                }}>
            </CardButton>
            <CardButton
                label = "리액션 혜자는 누구?"
                onClick = {()=>{if (isAvailable){
                    axios.get(`http://127.0.0.1:8000/activetime/${f_id}`)
                    .then((response) => {
                        const responseData = JSON.parse(response.data.active_time)
                        setData(responseData)
                        handleOpenActiveTimePopup()
                    })}
                }}>
            </CardButton>
            </CardButtonContainer>
            <UserCountPopup data={data} isOpen={isPopupOpen} onClose={handleClosePopup}/>
            <ActiveTimePopup data={data} isOpen={isActiveTimePopupOpen} onClose={handleCloseActiveTimePopup}/>
            <WordCloudPopup data={cloudData} isOpen={isAllUserWordsPopupOpen} onClose={handleCloseAllUserCountPopup}/>
        </Wrapper>
    )
}

export default AnalysisCard;