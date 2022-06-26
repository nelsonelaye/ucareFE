import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { GiWorld } from "react-icons/gi";
import { AiOutlineLink, AiTwotoneMail, AiOutlineMail } from "react-icons/ai";

function HospitalList() {
  const [allHospitals, setAllHospitals] = useState([]);

  const viewHospitals = async () => {
    // const mainUrl = "http://localhost:1210";
    // const url = `${mainUrl}/company`;
    const url2 = "http://localhost:1210/api/hospital";
    await axios
      .get(url2)
      .then((res) => {
        // console.log(res);
        setAllHospitals(res.data.data);
        console.log(allHospitals);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    viewHospitals();
  }, []);

  return (
    <Container>
      <Content>
        {allHospitals?.map((props) => {
          return (
            <Card key={props._id}>
              <Logo>
                <img src={props.logo} />
              </Logo>
              <Link
                to={`/hospital/${props._id}/detail`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Name>{props.hospitalName}</Name>
              </Link>

              <Category>{props.category}</Category>
              <Links>
                <a
                  href={`mailto:${props.email}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <MailIcon />
                </a>
                <a
                  href={props.website}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <WebIcon />
                </a>
              </Links>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
}

export default HospitalList;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  box-sizing: border-box;
  @media screen and (max-width: 425px) {
    padding: 0px 20px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 100%;
  min-height: 225px;
  margin: 15px 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: content-box;
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid lightgrey;
  border-radius: 100%;
  margin-bottom: 10px;
  img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Name = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  transition: all 350ms;
  :hover {
    text-decoration: underline;
  }
`;

const Category = styled.div`
  font-size: 15px;
  color: grey;
  font-weight: 400;
  text-align: center;
  font-family: poppins;
`;
const Links = styled.div`
  margin-top: 20px;
`;

const MailIcon = styled(AiOutlineMail)`
  font-size: 20px;
  margin: 0px 5px;
  color: grey;
  transition: all 350ms;
  :hover {
    color: black;
  }
`;

const WebIcon = styled(AiOutlineLink)`
  font-size: 20px;
  margin: 0px 5px;
  color: grey;
  transition: all 350ms;
  :hover {
    color: black;
  }
`;
