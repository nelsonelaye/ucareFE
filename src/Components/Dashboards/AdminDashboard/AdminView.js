import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import AdminHead from "./Head";
import AdminNav from "./Nav";
import { Bar } from "react-chartjs-2";
import Cards from "./Testing";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const user = useSelector((state) => state.user);
  console.log(user);
  const hospitalId = user._id;

  const getHospital = async () => {
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}`;

    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        setAppointments(res.data.data.appointments);
        setDoctors(res.data.data.doctors);
        setPatients(res.data.data.patients);
        console.log(doctors);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getHospital();
  }, []);
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
              spane={appointments.length}
              Icontag={<MdBloodtype />}
              texts="Appointments"
              bgColor={"#FF8A65"}
            />

            <Cards
              spane={patients.length}
              Icontag={<FaWeight />}
              texts="Patient"
              bgColor={"#F06292"}
            />
            <Cards
              spane={doctors.length}
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
          <div>
            <iframe
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              }}
              width="640"
              height="480"
              src="https://charts.mongodb.com/charts-project-0-nasvr/embed/charts?id=62b9e144-6664-46a6-8503-11ce07e32c77&maxDataAge=60&theme=dark&autoRefresh=true"
            ></iframe>
          </div>
          <div>
            <iframe
              style={{
                background: "#21313C",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              }}
              width="640"
              height="480"
              src="https://charts.mongodb.com/charts-project-0-nasvr/embed/charts?id=62b9eabc-7fbe-4207-852f-f88e65f01403&maxDataAge=3600&theme=dark&autoRefresh=true"
            ></iframe>
          </div>
          <div>
            <iframe
              style={{
                background: "#FFFFFF",
                border: " none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              }}
              width="640"
              height="480"
              src="https://charts.mongodb.com/charts-project-0-nasvr/embed/charts?id=62b9f0f5-a230-4559-8bf4-4ebd5906419b&maxDataAge=3600&theme=light&autoRefresh=true"
            ></iframe>
          </div>
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
  flex-wrap: wrap;
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
