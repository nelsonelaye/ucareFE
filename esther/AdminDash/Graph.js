import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import React from 'react';
import styled from "styled-components"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display:true,
      position: 'top'
   
    },
    title: {
      display: true,
      text: '22 Account Summary',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
  labels,
  
  datasets: [
    {
      label: 'Income',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    data: [25000, 35000 ,45000, 75000, 100000, 55000],
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    backgroundColor:"#4680FF"
    },
    {
      label: 'Expenses',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [25000, 35000 ,45000, 75000, 100000, 55000],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    backgroundColor:"#26DAD2"
    },
  ],
};



const Graph = () => {
    return (
    <Container>
   <Bar options={options} data={data} />;

    </Container>
    
    )
}

export default Graph
const Container = styled.div`
height:400px;
width:600px;
`

