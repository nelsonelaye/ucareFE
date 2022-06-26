import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaBriefcaseMedical,
  FaCalendarAlt,
  FaUserAlt,
  FaUserNurse,
} from "react-icons/fa";

import { AiOutlineLogout } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../ReduxState/Global";
import axios from "axios";
const AdminNav = () => {
  const dispatch = useDispatch();
  const [hospitalData, setHospitalData] = useState();
  const user = useSelector((state) => state.user);
  const hospitalId = user.hospital;
  // console.log(hospitalId);
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(removeUser());
    navigate(`/hospital/${hospitalId}/detail`);
  };

  const getHospital = async () => {
    // const mainUrl = "http://localhost:1210";
    // const url = `${mainUrl}/company`;
    const url2 = `http://localhost:1210/api/hospital/${hospitalId}`;
    await axios
      .get(url2)
      .then((res) => {
        // console.log(res);

        console.log(res);
        setHospitalData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getHospital();
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          {hospitalData ? (
            <Header>
              <img src={hospitalData.logo} alt="" />
              <span>{hospitalData.hospitalName}</span>
            </Header>
          ) : null}

          <Top>
            <NavLink to="/patient-overview" style={{ textDecoration: "none" }}>
              <Holder>
                <BsBarChart />
                <span>OverView</span>
              </Holder>
            </NavLink>

            <NavLink to="/create" style={{ textDecoration: "none" }}>
              <Holder>
                <FaUserAlt />
                <span> Update Profile</span>
              </Holder>
            </NavLink>

            <NavLink to="/appoint" style={{ textDecoration: "none" }}>
              <Holder>
                <FaCalendarAlt />
                <span>Book Appointment</span>
              </Holder>
            </NavLink>
            <NavLink to="/doc" style={{ textDecoration: "none" }}>
              <Holder>
                <FaUserNurse />
                <span>Specialists</span>
              </Holder>
            </NavLink>
            <MyLink>
              <Holder>
                <FaBriefcaseMedical />
                <span>Medical History</span>
              </Holder>
            </MyLink>
          </Top>
          <Bottom>
            <Holder
              onClick={logOut}
              //   onClick={() => {
              //     app.auth().signOut();
              //   }}
            >
              <AiOutlineLogout />
              <span>Log out</span>
            </Holder>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default AdminNav;

const MyLink = styled.div`
  color: white;
`;

const Container = styled.div`
  width: 15vw;
  height: 100vh;
  background: #0000cc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* z-index: 1000000; */
`;

const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }

  span {
    padding-top: 10px;
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    font-size: 22px;
    display: flex;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
`;

const Holder = styled.div`
  margin-bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  transition: 350ms;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.9);
    color: #0000cc;
  }
  span {
    margin-left: 20px;
    font-weight: 500;
    font-size: 13px;

    /* font-size: 17px; */
  }
`;

const Bottom = styled.div`
  /* flex: 1; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
