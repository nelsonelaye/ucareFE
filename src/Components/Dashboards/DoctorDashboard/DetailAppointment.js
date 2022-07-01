import AdminHead from "./Head";
import AdminNav from "./Nav";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
const ParientArrange = () => {
  const user = useSelector((state) => state.user);
  const [appointment, setAppointment] = useState();
  const { appointmentId } = useParams();

  const hospitalId = user.hospital;
  const getAppointment = async () => {
    // const mainUrl = "http://localhost:1210";
    // const url = `${mainUrl}/company`;
    const url2 = `http://localhost:1210/api/hospital/appointment/${appointmentId}`;
    await axios
      .get(url2)
      .then((res) => {
        console.log("Appointment response", res);
        setAppointment(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const sendMail = async () => {
    // const mainUrl = "http://localhost:1210";
    // const url = `${mainUrl}/company`;
    const url2 = `http://localhost:1210/api/hospital/${hospitalId}/appointment/${appointmentId}/mail`;
    await axios
      .get(url2)
      .then((res) => {
        console.log("Mail response", res);
        Swal.fire({
          icon: "success",
          title: "Mail Sent!",
          html: `<b>Patient will receive your mail notification right now.</b>`,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getAppointment();
  }, []);
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
          <Confirm>
            <Titles>Appointment in Detail</Titles>

            {appointment ? (
              <Detailhold>
                <Column1>
                  <Show>
                    <span>Patient Name</span>
                    <p>{appointment.patientName}</p>
                  </Show>
                  <Show>
                    <span>Case</span>
                    <p>{appointment.patientCase}</p>
                  </Show>

                  <Show>
                    <span>Symptoms</span>
                    <p>{appointment.symptoms}</p>
                  </Show>

                  <Show>
                    <span>Allergies</span>
                    <p> {appointment.allergies}</p>
                  </Show>

                  <Show>
                    <span>Brief</span>
                    <p>{appointment.brief}</p>
                  </Show>
                </Column1>
                <Column2>
                  <Show>
                    <span>Date</span>
                    <p>
                      {moment(appointment.dateAndTime).format(
                        "MMMM d, YYYY hh:mm"
                      )}
                    </p>
                  </Show>

                  <Show>
                    <span>Doctor</span>
                    <p>{appointment.doctorName}</p>
                  </Show>

                  <Show>
                    <span>Department</span>
                    <p>{appointment.department}</p>
                  </Show>
                  <Show>
                    <span>Specialist</span>
                    <p>{appointment.specialist}</p>
                  </Show>

                  <Show>
                    <span>Time</span>
                    <p>7:15am</p>
                  </Show>
                </Column2>
              </Detailhold>
            ) : null}
          </Confirm>

          <Buttons onClick={sendMail}>Send to Patient's Mail</Buttons>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;

const Buttons = styled.button`
  // width: 100%;
  outline: none;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  // margin: auto;
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  padding: 14px 50px;
  border: 0;
  background: var(--color);
  color: white;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Show = styled.div`
  // line-height:5px;
  padding-top: 10px;
  width: 100%;

  span {
    color: #3c82d3;
    font-weight: 500;
    font-size: 15px;
  }
  p {
    font-size: 13px;
    text-align: justify;
    // line-height:10px;
  }
`;
const Column2 = styled.div`
  width: 45%;
`;
const Column1 = styled.div`
  width: 45%;
`;

const Detailhold = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Titles = styled.div`
  padding: 10px 0px;
  font-weight: 600;
  font-size: 20px;
`;
const Confirm = styled.div`
  border: 1px solid grey;
  width: 70%;
  // height:550px;
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    height: 100%;
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
  padding: 60px 0px;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
