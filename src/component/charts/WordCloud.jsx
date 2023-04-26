import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Cloud from 'react-d3-cloud';

Modal.setAppElement('#root');

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function WordCloudPopup({ isOpen, onClose, data }){

    const words = Object.fromEntries(data);

    const chartData = Object.entries(words).map(([key, value]) => {
        return { text: key, value: value };
        });



    // console.log(words)
    // console.log("chartData-------------")
    // console.log(chartData)
        

    // const chartData = [
    //     { text: 'Hey', value: 1000 },
    //     { text: 'lol', value: 200 },
    //     { text: 'first impression', value: 800 },
    //     { text: 'very cool', value: 1000000 },
    //     { text: 'duck', value: 10 },
    //   ];
    


    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}
        style={{
            content:{width:'700px',
                    height:'700px',
                    top:'50%' ,
                    left:'50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}>
        {/* <ChartContainer> */}
        <Cloud
        data = {chartData}
        rotate={(word) => word.value % 360} font='Times' width={500} height={500} padding={5} spiral='archimedean'
        fontWeight="bold" fontSize={(word) => Math.log2(word.value) * 3}
        fontStyle="italic"
        />
        {/* </ChartContainer> */}
        </Modal>
    )
    
}


export default WordCloudPopup; 