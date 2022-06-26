import React from "react";
import styled from "styled-components";
import AdminHead from "./AdminHead";
import AdminNav from "./AdminNav";
const AllSpecialists = () => {
  return (
    <Container>
      <Left>
        <AdminNav />
      </Left>
      <Right>
        <Headers>
          <AdminHead />
        </Headers>
        <Overviews>create</Overviews>
      </Right>
    </Container>
  );
};

export default AllSpecialists;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  background-color: purple;
`;

const Right = styled.div`
  height: 100vh;
  width: 85%;
  background-color: red;
`;
const Left = styled.div`
  height: 100vh;
  width: 15%;
  background-color: blue;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
