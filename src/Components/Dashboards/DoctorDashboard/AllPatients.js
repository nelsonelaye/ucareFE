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
          <AllPatient></AllPatient>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const AllPatient = styled.div`
  width: 80%;
  height: 500px;
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
