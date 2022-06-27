import React from "react";
import Header from "./Header";
import styled from "styled-components";
import About from "./About";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const { hospitalId } = useParams();
  const [hospitalData, setHospitalData] = useState();

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
    <Container>
      {hospitalData ? (
        <>
          <Header image={hospitalData.logo} hospitalId={hospitalData._id} />

          <SecondContainer>
            <Image src="/assets/doctors.jpg" />

            <Wrapper>
              <Titles>{hospitalData.hospitalName}</Titles>
              <Describe>Get The Best Care At Affordable Price</Describe>
              <Link
                to={`/hospital/${hospitalData._id}/auth`}
                style={{ textDecoration: "none" }}
              >
                <Buttons>Book an Appointment</Buttons>
              </Link>
            </Wrapper>
          </SecondContainer>
          <About
            desc={hospitalData.description}
            hospitalName={hospitalData.hospitalName}
          />
        </>
      ) : null}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-weight: bold;
  :before {
    content: "";
    background-image: url("/assets/bck.jpeg");
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
  }
  font-size: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024) {
    text-align: center;
  }
`;
const SecondContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

const Buttons = styled.div`
  position: relative;
  font-size: 20px;
  color: white;
  font-weight: 500;
  background-color: #ea0763;
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`;

const Describe = styled.div`
  padding-top: 10px;
  position: relative;
  padding-left: 30px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
  display: flex;
  text-align: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
`;
const Titles = styled.div`
  padding-left: 30px;
  position: relative;
  padding-bottom: 30px;
  font-size: 50px;
  font-weight: 800;
  color: white;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 30px;
  }
`;

const NotFound = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
