import React from "react";
import styled from "styled-components";

const CheckOut = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <img src="/assets/check.png" />
          <h2>Thank you</h2>
          <p>Check your inbox to verify your account.</p>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CheckOut;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #eeeeff;
  height: calc(100vh - 70px);
`;
const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 80%;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  /* background-color: blue; */
`;

const Card = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background-color: white;

  img {
    width: 50px;
  }

  h2 {
    font-size: 35px;
    margin: 10px;
  }

  p {
    font-size: 18px;
    color: grey;
  }
`;
