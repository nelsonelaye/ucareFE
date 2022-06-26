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
          <Confirm>
            <Title>Confirm Appointment</Title>
            <TwoHold>
              <Input1>
                <span>UHID</span>
                <input placeholder="Enter the correct value" />
              </Input1>
              <Input1>
                <span>Appointment Date</span>
                <input placeholder="24/08/2022" />
              </Input1>
            </TwoHold>
            <OneHold>
              <span>Case</span>
              <input placeholder="Answer Promptly" />
            </OneHold>
            <TwoHold>
              <Input1>
                <span>Casualty</span>
                <input placeholder="Answer Promptly" />
              </Input1>
              <Input1>
                <span>Old Patient</span>
                <input placeholder="" />
              </Input1>
            </TwoHold>
            <OneHold>
              <span>Symptoms</span>
              <input placeholder="Answer Promptly" />
            </OneHold>
            <OneHold>
              <span>Allergies</span>
              <input placeholder="Answer Promptly" />
            </OneHold>
            <TwoHold>
              <Input1>
                <span>Department</span>
                <input placeholder="Please Select" />
              </Input1>
              <Input1>
                <span>Doctor</span>
                <input placeholder="Please Select" />
              </Input1>
            </TwoHold>
            <Buttons>
              <span>Submit</span>
            </Buttons>
          </Confirm>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  span {
    border-radius: 10px;
    font-weight: 500;
    text-align: center;
    padding: 14px 50px;
    background: black;
    color: white;
    transition: all 350ms;
    transform: scale(1);
    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

const Input1 = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: flex;
    border-radius: 5px;
    width: 300px;
    padding-top: 5px;
    padding-left: 5px;
    height: 25px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    input {
      width: 100%;
    }
  }
`;
const TwoHold = styled.div`
  display: flex;
  justify-content: space-between;
  widh: 100%;
  padding: 10px 0px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const OneHold = styled.div`
  padding: 10px 0px;

  input {
    display: flex;
    border-radius: 5px;
    width: 100%;
    padding-left: 5px;
    padding-top: 5px;
    height: 25px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
  @media screen and (max-width: 768px) {
    input {
      width: 100%;
    }
  }
`;
const Title = styled.div`
  padding: 10px 0px;
`;
const Confirm = styled.div`
  border: 1px solid grey;
  width: 60%;
  height: 550px;
  background: white;
  padding: 10px 50px;
  @media screen and (max-width: 768px) {
    height: 100%;
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
  padding: 10px 0px;
  background-color: white;
  height: 100%;
  display: felx;
  justify-content: center;
`;

const Right = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 85%;
  // background-color:red ;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  height: 100vh;
  width: 15%;
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
