import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Cloud from 'react-d3-cloud';

Modal.setAppElement('#root');


function WordCloudPopup({ isOpen, onClose, data }){

    const words = Object.fromEntries(data);

    const chartData = Object.entries(words).map(([key, value]) => {
        return { text: key, value: value };
        });



    return(
        <Modal isOpen={isOpen} onRequestClose={onClose}
        style={{
            content:{width:'1000px',
                    height:'1000px',
                    top:'50%' ,
                    left:'50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}>
        {/* <ChartContainer> */}
        <Cloud
        data = {chartData}
        rotate={(word) => word.value % 360} font='Times' width={600} height={600} padding={5} spiral='archimedean'
        fontWeight="bold" fontSize={(word) => Math.log2(word.value) * 3}
        fontStyle="italic"
        />
        {/* </ChartContainer> */}
        </Modal>
    )
    
}


export default WordCloudPopup; 