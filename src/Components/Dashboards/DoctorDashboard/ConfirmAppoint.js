import AdminHead from "./Head";
import AdminNav from "./Nav";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../ReduxState/Global";
import { Link, useNavigate, useParams } from "react-router-dom";

const ParientArrange = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();
  const url = useParams();
  console.log(url);

  console.log(appointmentId);
  const user = useSelector((state) => state.user);
  const [appointment, setAppointment] = useState();
  const dispatch = useDispatch();
  const hospitalId = user.hospital;
  const formSchema = yup.object().shape({
    specialist: yup.string(),
    department: yup.string(),
    dateAndTime: yup.date(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);
    const { specialist, department, dateAndTime } = value;

    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/appointment/${appointmentId}`;

    const res = await axios.patch(
      url,
      {
        specialist,
        department,
        dateAndTime,
      },
      config
    );

    console.log(res);

    navigate(`/appointment/${appointmentId}`);
    Swal.fire({
      icon: "success",
      title: "Appointment Updated!",
      html: `<b>Send a confirmation mail to the patient</b>`,
    });
  });

  const getAppointment = async () => {
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/appointment/${appointmentId}`;
    await axios
      .get(url)
      .then((res) => {
        console.log("Appointment response ", res);
        setAppointment(res.data.data);
        console.log(appointment);
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
        <Overviews onSubmit={onSubmit}>
          <Confirm>
            <Title>Confirm Appointment</Title>

            <OneHold>
              <Input1>
                <div>{errors.time && errors.time.message}</div>
                <span>Time</span>
                <input
                  type="datetime-local"
                  placeholder="Select time"
                  {...register("dateAndTime")}
                />
              </Input1>
            </OneHold>
            <TwoHold>
              <Input1>
                {errors.specialist && errors.specialist.message}

                <span>Choose Specialist</span>
                <select {...register("specialist")}>
                  <option selected disabled>
                    {appointment ? appointment.specialist : "Select Specialist"}
                  </option>
                  <option value="Surgeon">Surgeon</option>
                  <option value="Radilologist">Radilologist</option>
                  <option value="Psychiatrist">Psychiatrist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Geneticists">Geneticists</option>
                  <option value="Nephrologists">Nephrologists</option>
                  <option value="Sleep Medicine Specialist">
                    Sleep Medicine Specialist
                  </option>
                  <option value="Gynecologists">Gynecologists</option>
                  <option value="Dermatologists">Dermatologists</option>
                  <option value="Other">Other</option>
                </select>
              </Input1>

              <Input1>
                {errors.department && errors.department.message}

                <span> Select a Deparment</span>
                <select {...register("department")}>
                  <option selected disabled>
                    {appointment ? appointment.department : "Select department"}
                  </option>
                  <option value="Intensive Care Unit">ICU</option>
                  <option value="Nutrition and Dietetics">
                    Nutrition and Dietetics
                  </option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Sexual Health">Sexual Health</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Skin">Skin</option>
                  <option value="Dental">Dental</option>
                  <option value="Eye Centre">Eye Centre</option>
                  <option value="Maternity">Maternity</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="General Surgery">General Surgery</option>
                </select>
              </Input1>
            </TwoHold>

            <Buttons type="submit">Submit</Buttons>
          </Confirm>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const Buttons = styled.button`
  // width: 100%;
  outline: 0;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin: auto;
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  padding: 14px 50px;
  background: black;
  color: white;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  span {
    border-radius: 10px;
    font-weight: 500;
    text-align: center;
    padding: 14px 50px;
    background: black;
    color: white;
    transition: all 350ms;
    transform: scale(1);
    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

const Input1 = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: flex;
    border-radius: 5px;
    width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 25px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }

  select {
    display: flex;
    border-radius: 5px;
    width: 300px;
    // padding: 10px 5px;
    height: 40px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    input {
      width: 100%;
    }
  }
`;
const TwoHold = styled.div`
  display: flex;
  justify-content: space-between;
  widh: 100%;
  padding: 10px 0px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const OneHold = styled.div`
  padding: 10px 0px;

  input {
    display: flex;
    border-radius: 5px;
    width: 100%;
    padding-left: 5px;
    padding-top: 5px;
    height: 25px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }

  @media screen and (max-width: 768px) {
    input {
      width: 100%;
    }
  }
`;
const Title = styled.div`
  padding: 10px 0px;
`;
const Confirm = styled.div`
  border: 1px solid grey;
  width: 60%;
  height: 550px;
  background: white;
  padding: 10px 50px;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.form`
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
