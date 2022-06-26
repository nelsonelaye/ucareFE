import AdminHead from "./Head";
import AdminNav from "./Nav";
import React from "react";
import styled from "styled-components";

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
          <MainHold>
            <BlueBack>Update Profile</BlueBack>
            <AllForm>
              <Inputer>
                <span> Date of Birth</span>
                <input placeholder="Enter your Date of Birth" />
              </Inputer>
              <Inputer>
                <span> Gender</span>
                <input placeholder="Male of Female" />
              </Inputer>
              <Inputer>
                <span> Weight</span>
                <input />
              </Inputer>
              <Inputer>
                <span>Contact</span>
                <input placeholder="08178867735" />
              </Inputer>
              <Inputer>
                <span> Email</span>
                <input placeholder="example@gmail.com" />
              </Inputer>
              <Inputer>
                <span> Address</span>
                <input placeholder="Enter your Address" />
              </Inputer>
              <Buttons>Update</Buttons>
            </AllForm>
          </MainHold>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;

const Buttons = styled.div`
  margin-top: 10px;
  text-align: center;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #0000cc;
  width: 200px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;
const Inputer = styled.div`
  padding: 5px;
  display: flex;
  width: 90%;
  flex-direction: column;

  span {
    font-size: 20px;
    padding: 5px 0px;
  }
  input {
    display: flex;
    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    height: 30px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
`;
const AllForm = styled.div`
  padding: 10px;
  width: 90%;
  margin: 30px 0px;
  height: 100%;
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
const MainHold = styled.div`
  width: 70%;
  /* height:100% ; */
  margin-top: 20px;
  background-color: white;

  flex-direction: column;
  display: flex;
  align-items: center;
`;
const BlueBack = styled.div`
  width: 100%;
  height: 150px;
  background-color: #0000cc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  font-size: 30px;
  font-weight: 500;
`;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  background-color: #eeeeff;
  display: flex;
  justify-content: center;
  /* height:100% ; */
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  /* width:15%; */
  background-color: blue;
  height: 100%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
