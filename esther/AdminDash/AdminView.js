import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import AdminHead from "./AdminHead";
import AdminNav from "./AdminNav";
import { Bar } from "react-chartjs-2";
import Cards from "./Testing";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import React from "react";
import styled from "styled-components";

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
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "22 Account Summary",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,

  datasets: [
    {
      label: "Income",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [25000, 35000, 45000, 75000, 100000, 55000],
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      backgroundColor: "#4680FF",
    },
    {
      label: "Expenses",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [25000, 35000, 45000, 75000, 100000, 55000],
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      backgroundColor: "#26DAD2",
    },
  ],
};

const ParientArrange = () => {
  return (
    <Container>
      <Left>
        <AdminNav />
      </Left>
      <Right>
        <Headers>
          <AdminHead />
        </Headers>
        <Overviews>
          <Second>
            <Cards
              spane="53"
              Icontag={<MdBloodtype />}
              texts="Appointments"
              bgColor={"#FF8A65"}
            />
            <Cards
              spane="10"
              Icontag={<GiBodyHeight />}
              texts="Admission"
              bgColor={"#4DB6AC"}
            />
            <Cards
              spane="1000"
              Icontag={<FaWeight />}
              texts="Patient"
              bgColor={"#F06292"}
            />
            <Cards
              spane="80"
              Icontag={<FaWeight />}
              texts="Employees"
              bgColor={"#9575CD"}
            />
          </Second>
          <Charts>
            <Holde>
              <Bar options={options} data={data} />;
            </Holde>
          </Charts>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const Holde = styled.div`
  height: 60%;
  width: 70%;
`;

const Charts = styled.div`
  // background-color:yellow;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Second = styled.div`
  display: flex;
  height: auto;
  width: 100%;
flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
 
`;

const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
`;

const Right = styled.div`
  /* height: 100%; */
  flex: 1;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  /* position:sticky;
left:0 ;
top:0;
bottom:0; */
  height: 100%;
  min-height: 100vh;
  /* width:15%; */
  /* background-color:red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  height: 100vh;

  display: flex;
  width: 100%;
  /* background-color:red; */
`;
