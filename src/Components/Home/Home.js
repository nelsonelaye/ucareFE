import React from "react";
import styled from "styled-components";
import Header from "../Platform/Header/Header";
import Hero from "../Platform/Hero/Hero";
const Home = () => {
  return (
    <Container>
      <Hero/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
