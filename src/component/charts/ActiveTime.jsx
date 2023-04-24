import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function ActiveTimePopup({ isOpen, onClose, data }) {

    const chartData = Object.entries(data).map(([key, value]) => {
    return { name: key, count: value };
    });

    const formatXAxis = (tickItem) => {
        if (tickItem) return `${tickItem}시`
       
      };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}
            style={{
                content:{width:'700px',
                        height:'700px',
                        top:'50%' ,
                        left:'50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}>
        <ChartContainer>
        <LineChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" >
            <Label value="Hour" position="insideBottomRight" offset={-6}/>
          </XAxis>
          <YAxis>
            <Label angle={-90} value="Count(횟수)" position="insideLeft"/>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }}  />
        </LineChart>
        </ChartContainer>
      </Modal>
    );
  }

  export default ActiveTimePopup