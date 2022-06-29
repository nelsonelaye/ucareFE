import AdminHead from "./Head";
import AdminNav from "./Nav";
import Let from "./Tablepatient";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const ParientArrange = () => {
  const [allPatients, setAllPatients] = useState([]);

  // const allPatients = [];
  const user = useSelector((state) => state.user);
  console.log(user);
  const hospitalId = user._id;

  const getPatients = async () => {
    const mainURL = "";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}/patient/all`;
    await axios
      .get(url)
      .then((res) => {
        console.log("this is the response", res?.data?.data);
        setAllPatients(res?.data?.data?.patients);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPatients();
    // setAllPatients(user.patients);
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
          <PatientHold>
            <Let />
          </PatientHold>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;

const PatientHold = styled.div`
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  // padding:10px 0px;
  margin-top: 30px;
`;

const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
  // background-color:blue;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 85%;
  box-sizing: border-box;
  // background-color:red ;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  height: 100vh;
  background-color: blue;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
