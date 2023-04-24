import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function UserCountPopup({ isOpen, onClose, data }) {

    const chartData = Object.entries(data).map(([key, value]) => {
    return { name: key, count: value };
    });
  
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
        <BarChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        </ChartContainer>
      </Modal>
    );
  }

  export default UserCountPopup;