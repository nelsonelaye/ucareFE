import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const SignUpe = () => {
  const { hospitalId } = useParams();
  const [hospitalData, setHospitalData] = useState();
  console.log(hospitalId);

  //   const getHospital = async () => {
  //     // const mainUrl = "http://localhost:1210";
  //     // const url = `${mainUrl}/company`;
  //     const url2 = `http://localhost:1210/api/hospital/${hospitalId}`;
  //     await axios
  //       .get(url2)
  //       .then((res) => {
  //         // console.log(res);

  //         console.log(res);
  //         setHospitalData(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  useEffect(() => {
    console.log(hospitalId);
  }, []);
  return (
    <Container>
      <Everyhold>
        <Wrapper>
          <Card1>
            <Hero src="/assets/hoslogo.webp" />
            <Title>Continue To U-CARE</Title>
            <Describe>
              We guarantee you the Best of healthcare at an affordable price
            </Describe>

            <Link
              to={`/hospital/${hospitalId}/admin`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <PatientCard>
                <Avatar src="/assets/girl.jpg" />
                <Notes>
                  <span>I'm the Admin </span>
                  <p>Let's save lives</p>
                </Notes>
              </PatientCard>
            </Link>

            <Link
              to={`/hospital/${hospitalId}/doctor`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <PatientCard>
                <Avatar src="/assets/girl.jpg" />

                <Notes>
                  <span>I'm a Doctor</span>
                  <p>Giving the best care is my priority</p>
                </Notes>
              </PatientCard>
            </Link>

            <Link
              to={`/hospital/${hospitalId}/patient`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <PatientCard>
                <Avatar src="/assets/girl.jpg" />
                <Notes>
                  <span>I'm a Patient </span>
                  <p>Getting the best care is the ultimate</p>
                </Notes>
              </PatientCard>
            </Link>
          </Card1>
          <Card2>
            <Undraw src="/assets/undraw.jpeg" />
          </Card2>
        </Wrapper>
      </Everyhold>
    </Container>
  );
};

export default SignUpe;
const PatientCard = styled.div`
display:flex;
height:auto;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
padding: 13px 25px;
cursor pointer;
border-radius:5px;
margin-top: 30px;
transition: all 350ms;
width: 100%;
:hover{
    box-shadow:none;
    border: 1px solid rgba(0, 0 , 255, 0.6);
    transform: scale(1.009);

}
`;
const Notes = styled.div`
  line-height: 5px;
  padding: 0px 20px;
  width: 90%;
  span {
    font-weight: 600;
    font-size: 15px;
  }
  p {
    font-size: 13px;
  }
`;
const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
const Hero = styled.img`
  height: 50px;
  width: 50px;
  padding: 10px 0px;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const Describe = styled.div`
  font-size: 12px;
  padding: 10px 0px;
  text-align: center;
`;
const Everyhold = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Undraw = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;
const Card1 = styled.div`
  height: 100%;
  width: 450px;
  background-color: white;
  display: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    border-radius: 10px;
    // width: 340px;
    // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    width: 100%;
  }
`;
const Card2 = styled.div`
  border-radius: 0 10px 10px 0;
  height: 100%;
  width: 450px;
  display: flex;
  color: white;
  flex-direction: column;

  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  height: 90%;
  //   width: 900px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  @media screen and (max-width: 800px) {
    width: 340px;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  background: white;
  top: 0;
`;
