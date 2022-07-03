import { FaMale, FaWeight } from "react-icons/fa";
import { MdBloodtype, MdPlace } from "react-icons/md";
import TableAppoint from "./TableAppoint";
import AdminHead from "./Head";
import AdminNav from "./Nav";
import { AiFillMail } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import Cards from "./Testing";
import { GiBodyHeight } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import React from "react";
import { RiContactsBookFill } from "react-icons/ri";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";

const PatientOverview = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Container>
      {user ? (
        <>
          <Left>
            <AdminNav />
          </Left>
          <Right>
            <Headers>
              <AdminHead />
            </Headers>
            <Overviews>
              <First>
                <Profile>
                  <ProfileWrap>
                    <Pics src={user.avatar} />
                    <Name>
                      Name: {user.firstName} {user.lastName}
                    </Name>
                    <Patient>Patient Profile</Patient>
                  </ProfileWrap>
                </Profile>

                <Contact>
                  <Gender>
                    <GenWrap>
                      <Title>Gender:</Title>
                      <Show>
                        <FaMale />
                        <span>{user.gender}</span>
                      </Show>
                    </GenWrap>
                    <GenWrap>
                      <Title>Email:</Title>
                      <Show>
                        <AiFillMail />

                        <span>{user.email}</span>
                      </Show>
                    </GenWrap>
                    <GenWrap>
                      <Title>Contact:</Title>
                      <Show>
                        <RiContactsBookFill />

                        <span>{user.telephone}</span>
                      </Show>
                    </GenWrap>
                  </Gender>

                  <Birth>
                    <GenWrap>
                      <Title>Date of Birth:</Title>
                      <Show>
                        <BsCalendar2DateFill />
                        <span>{moment(user.DOB).format("MMMM d, YYYY")}</span>
                      </Show>
                    </GenWrap>

                    <GenWrap>
                      <Title>Address:</Title>
                      <Show>
                        <MdPlace />

                        <span>{user.address}</span>
                      </Show>
                    </GenWrap>

                    <GenWrap>
                      <Title>Patient Id: </Title>
                      <Show>
                        <HiIdentification />

                        <span>{user._id}</span>
                      </Show>
                    </GenWrap>
                  </Birth>
                </Contact>
              </First>

              <Second>
                <Cards
                  tColor={"#305ED9"}
                  spane={user.bloodGroup}
                  Icontag={<MdBloodtype />}
                  texts="Blood Group"
                  IColor={"#305ED9"}
                />
                <Cards
                  tColor={"#E46B8F"}
                  spane={`${JSON.stringify(user.height)}cm`}
                  Icontag={<GiBodyHeight />}
                  texts="Height"
                  IColor={"#E46B8F"}
                />
                <Cards
                  tColor={"#4DB6AC"}
                  spane={`${user.weight}Kg`}
                  Icontag={<FaWeight />}
                  texts="Weight"
                  IColor={"#4DB6AC"}
                />
              </Second>

              <Third>
                <Appoint>
                  <HeaderBut>Upcoming Appointment</HeaderBut>
                  <AllAppoint>
                    <TableAppoint />
                    <Carde>
                      <FServ>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </FServ>
                      <SecServe>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>

                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </SecServe>
                    </Carde>
                    <Carde>
                      <FServ>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </FServ>
                      <SecServe>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>

                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </SecServe>
                    </Carde>
                    <Carde>
                      <FServ>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </FServ>
                      <SecServe>
                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>

                        <Serve>
                          <p>Date</p>
                          <span>20/07/2022</span>
                        </Serve>
                      </SecServe>
                    </Carde>
                  </AllAppoint>
                </Appoint>
              </Third>
            </Overviews>
          </Right>
        </>
      ) : null}
    </Container>
  );
};

export default PatientOverview;
const SecServe = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const FServ = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const Serve = styled.div`
  span {
    font-weight: 500;
  }
`;

const Carde = styled.div`
  padding: 5px 10px;
  // display: flex;
  display: none;
  width: 95%;
  justify-content: space-between;
  background: white;
  margin: 10px 0px;
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const AllAppoint = styled.div``;
const HeaderBut = styled.div`
  color: black;
  padding: 15px 0px;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
`;
const Graph = styled.div`
  height: 350px;
  width: 45%;
  background-color: pink;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Appoint = styled.div`
  padding: 0px 10px;
  height: 100%;
  width: 90%;
  background-color: #eeeeff;
  border-radius: 3px;
  padding: 10px 10px;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    margin: 10px 0px;
  }
`;
const Third = styled.div`
  display: flex;

  // background-color:yellow;
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-around;
  padding: 15px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Second = styled.div`
  display: flex;
  height: auto;
  width: 100%;

  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 13px;
  padding: 10px 0px;
`;
const Show = styled.div`
  display: flex;
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

  background: #eeeeff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;
`;
const Birth = styled.div`
  height: 250px;
  width: 300px;
  background: #eeeeff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
`;
const Contact = styled.div`
  display: flex;
  height: 310px;
  background: #eeeeff;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Name = styled.div`
  color: white;
  padding: 10px 0px;
  font-weight: 700;
`;
const Patient = styled.div`
  padding: 10px 15px;
  background: white;
  margin-top: 20px;
  font-weight: bold;
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
  /* padding:10px 0px ; */
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 204, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  height: 310px;
  padding: 20px;
  width: 310px;
  background: url("/images/profbak.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
  align-items: center;

  padding: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
`;

const Right = styled.div`
  /* height: 100%; */
  flex: 1;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  /* position:sticky;
left:0 ;
top:0;
bottom:0; */
  height: 100%;
  min-height: 100vh;
  /* width:15%; */
  /* background-color:red; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  height: 100vh;

  display: flex;
  width: 100%;
  /* background-color:red; */
`;
