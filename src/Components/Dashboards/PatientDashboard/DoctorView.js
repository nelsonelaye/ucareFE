import AdminHead from "./Head";
import AdminNav from "./Nav";
import { AiFillMail } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaMale } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { MdPlace } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { RiContactsBookFill } from "react-icons/ri";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const DocOverview = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState();
  const user = useSelector((state) => state.user);
  console.log(user);

  const hospitalId = user.hospital;

  const getDoctors = async () => {
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/doctor/${doctorId}`;
    const res = await axios.get(url);
    console.log("this doctor ", res);
    setDoctor(res.data.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <Container>
      {user ? (
        <>
          <Left>
            <AdminNav name={`${user.lastName} ${user.firstName}`} />
          </Left>
          <Right>
            <Headers>
              <AdminHead />
            </Headers>
            <Overviews>
              <Navigate>
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  <span>Home / </span>
                </Link>
                <Link to="/doc" style={{ textDecoration: "none" }}>
                  <span>All Doctors / </span>
                </Link>
                <Link
                  to={`/doctor/${doctorId}/detail`}
                  style={{ textDecoration: "none" }}
                >
                  <span>Doctor details </span>
                </Link>
              </Navigate>
              {doctor ? (
                <First>
                  <Profile>
                    <ProfileWrap>
                      <Pics src={doctor.avatar} />
                      <Name>
                        Doctor {`${doctor.lastName} ${doctor.firstName}`}
                      </Name>
                      <Patient>{doctor.specialization}</Patient>
                    </ProfileWrap>
                  </Profile>

                  <Contact>
                    <Gender>
                      <GenWrap>
                        <Title>Gender: </Title>
                        <Show>
                          <FaMale />
                          <span>{doctor.gender}</span>
                        </Show>
                      </GenWrap>
                      <GenWrap>
                        <Title>Email:</Title>
                        <Show>
                          <AiFillMail />

                          <span>{doctor.email}</span>
                        </Show>
                      </GenWrap>
                      <GenWrap>
                        <Title>Contact:</Title>
                        <Show>
                          <RiContactsBookFill />

                          <span>{doctor.telephone}</span>
                        </Show>
                      </GenWrap>
                    </Gender>
                    <Birth>
                      <GenWrap>
                        <Title>Date of Birth:</Title>
                        <Show>
                          <BsCalendar2DateFill />
                          <span>
                            {moment(doctor.DOB).format("MMMM d, YYYY")}
                          </span>
                        </Show>
                      </GenWrap>
                      <GenWrap>
                        <Title>Address:</Title>
                        <Show>
                          <MdPlace />

                          <span>18, Alaba Street Amukoko.</span>
                        </Show>
                      </GenWrap>
                      <GenWrap>
                        <Title>Role:</Title>
                        <Show>
                          <HiIdentification />

                          <span>{doctor.specialization}</span>
                        </Show>
                      </GenWrap>
                    </Birth>
                  </Contact>
                </First>
              ) : null}
            </Overviews>
          </Right>
        </>
      ) : null}
    </Container>
  );
};

export default DocOverview;
const Title = styled.div`
  font-size: 13px;
  padding: 10px 0px;
`;
const Show = styled.div`
  width: 80%;
  border-bottom: 1px solid grey;
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  /* height:auto ; */
  span {
    font-weight: bold;
    font-size: 15px;
    padding: 0px 5px;
  }
`;
const GenWrap = styled.div``;
const Gender = styled.div`
  height: 250px;
  width: 300px;

  // background: #eeeeff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;
`;
const Birth = styled.div`
  height: 250px;
  width: 300px;
  // background: #eeeeff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
`;
const Contact = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  border: 1px solid grey;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Name = styled.div`
  color: black;
  padding-top: 10px;
  font-weight: 600;
`;
const Patient = styled.div`
  background: white;
  margin-top: 10px;
  font-weight: 500;
  font-size: 15px;
  color: var(--tiny);
  cursor: pointer;
  border-radius: 20px;
  scale: all(1);
  :hover {
    transition: 350s;
    scale: all(1.02);
  }
`;
const Pics = styled.img`
  height: 150px;
  margin-top: 10px;
  width: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
`;
const ProfileWrap = styled.div`
  border-radius: 10px;
  border: 1px solid var(--tiny);
  /* padding:10px 0px ; */
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  height: 310px;
  width: 280px;
  border: 1px solid grey;
  display: flex;

  // background: url("/images/profbak.png");
  border-radius: 10px;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const First = styled.div`
  display: flex;
  /* height:300px ; */
  width: 100%;
  /* background-color:blue; */
  justify-content: space-evenly;
  padding: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Navigate = styled.div`
  width: 90%;
  margin: 20px;

  span {
    font-size: 13px;
    transition: all 350ms;

    :hover {
      text-decoration: underline;
    }
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
  flex-direction: column;
  display: flex;
  justify-content: center;
  /* height:100% ; */
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
  position: absolute;
  top: 0;
  z-index: 100;
`;
