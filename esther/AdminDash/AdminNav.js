import { FaBriefcaseMedical, FaCalendarAlt, FaUserAlt, FaUserNurse } from "react-icons/fa";

import {
AiOutlineLogout,
} from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components"

const AdminNav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
              <img src="/images/icons.png" alt=""/>
              <span>U-CARE</span>
          </Header>
          <Top>
            <NavLink to="/adminview"> 
           
              <Holder>
              <BsBarChart />
                <span>OverView</span>
              </Holder>

            </NavLink >

            <NavLink to="/admindoc">
          
            <Holder>
            <FaUserAlt/>
              <span> AllSpecialists</span>
            </Holder>
    
            </NavLink >

            <NavLink to="#" >
              <Holder>
                <FaCalendarAlt/>
                <span>Viiew Appointments</span>
              </Holder>
            </NavLink>
            <NavLink to="/adminpatient" >
            <Holder>
              <FaUserNurse />                                
              <span>All Patients</span>
            </Holder>
            </NavLink>
            <NavLink to="/allappoint">
            <MyLink >
              <Holder>
                <FaBriefcaseMedical/>
                <span>View ALl Appointments</span>
              </Holder>
            </MyLink>
            </NavLink>
          </Top>
          <Bottom>
          
            <Holder
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
  background: #0000CC;
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
width:100%;
justify-content:center;
display:flex;
flex-direction: column;

  align-items: center;

  span{
      padding-top:10px ;
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
    color:#0000CC;
  }
  span {
    margin-left: 20px;
    font-weight: 500;
    font-size:13px ;

   

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