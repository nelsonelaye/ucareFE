import AdminHead from "./Head";
import AdminNav from "./Nav";
import Doctor from "./Doctor.json";
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
          {Doctor.map((props) => (
            // <CardHold >
            <Carde key={props.id}>
              <Prt1>
                <DocName>
                  <img src={props.image} />
                  <span> {props.name}</span>
                </DocName>
              </Prt1>
              <Year>
                <Age>
                  <a>{props.age}yrs</a>
                  <span>Doctor's age</span>
                </Age>
                <Age>
                  <a> {props.specialty}</a>
                  <span>Specialty</span>
                </Age>
              </Year>
              <Prt2>View Proflie</Prt2>
            </Carde>
            // </CardHold>
          ))}
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;

const Age = styled.div`
  width: 140px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const Year = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 60px;
  width: 320px;
  // background:white;
  position: absolute;
  top: 200px;
  left: 0px;
  right: 0x;
  a {
    font-weight: 600;
    font-size: 15px;
  }
  span {
    font-size: 12px;
  }
`;
const DocName = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgb(41, 82, 204, 0.8);
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    // object-fit:cover;
    border: 2px solid white;
  }
  span {
    color: white;
    margin-top: 5px;
    font-weight: bold;
    font-family: poppins;
    font-size: 20px;
  }
`;

const Prt1 = styled.div`
  width: 100%;
  height: 65%;
  background: url("/images/doctors.jpg");
  // postion:relative;
`;
const Prt2 = styled.div`
  color: white;
  margin-top: 50px;
  padding: 10px 0px;
  text-align: center;
  width: 70%;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background: #0000cc;
`;
const Carde = styled.div`
  height: 350px;
  width: 320px;
  // background:red;
  margin: 5px 0px;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  padding: 10px 0px;
  flex-wrap: wrap;
  background-color: #eeeeff;
  // background-color:pink;
  display: flex;
  justify-content: space-evenly;
  // justify-content:center;
  // height:100% ;
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: scroll;
  min-height: 100vh;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  background-color: blue;
  height: 100%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
