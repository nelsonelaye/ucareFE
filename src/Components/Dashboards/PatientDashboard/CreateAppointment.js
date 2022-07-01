import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminHead from "./Head";
import AdminNav from "./Nav";
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
  const [doctors, setDoctors] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const hospitalId = user.hospital;
  const patientId = user._id;

  const formSchema = yup.object().shape({
    patientName: yup.string(),
    patientCase: yup.string(),
    symptoms: yup.string(),
    allergies: yup.string(),
    specialist: yup.string(),
    department: yup.string(),
    brief: yup.string(),
    dateAndTime: yup.date(),
    doctorId: yup.string(),
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
    const {
      patientName,
      patientCase,
      symptoms,
      allergies,
      specialist,
      department,
      brief,
      dateAndTime,
      doctorId,
    } = value;

    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/patient/${patientId}/appointment`;

    const res = await axios.post(
      url,
      {
        patientName,
        patientCase,
        symptoms,
        allergies,
        specialist,
        department,
        brief,
        dateAndTime,
        doctorId,
      },
      config
    );

    console.log(res);
    dispatch(createUser(res.data.data));
    navigate("/");
    Swal.fire({
      icon: "success",
      title: "Appointment Set!",
      html: `<b>An email will be sent to your inbox with confirmation date and time</b>`,
    });
  });

  const getDoctors = async () => {
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/doctor/all`;

    const res = await axios.get(url);
    console.log(res.data.data);
    setDoctors(res.data.data.doctors);
  };

  useEffect(() => {
    getDoctors();
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
          <MainHold>
            <BlueBack>Schedule An Appointment</BlueBack>
            <AllForm onSubmit={onSubmit}>
              <Inputer>
                {errors.patientName && errors.patientName.message}
                <span> Patient's Name</span>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  {...register("patientName")}
                />
              </Inputer>
              <Inputer>
                {errors.patientCase && errors.patientCase.message}
                <span>Case</span>
                <input
                  type="text"
                  placeholder="Describe your illness"
                  {...register("patientCase")}
                />
              </Inputer>
              <Inputer>
                {errors.symptoms && errors.symptoms.message}
                <span> Symptoms</span>
                <textarea
                  type="text"
                  placeholder="What symtoms are you experiencing"
                  {...register("symptoms")}
                />
              </Inputer>
              <Inputer>
                {errors.allergies && errors.allergies.message}
                <span>Allergies</span>
                <textarea
                  type="text"
                  placeholder="State your allergies if any"
                  {...register("allergies")}
                />
              </Inputer>
              <Double>
                <Inputer>
                  {errors.specialist && errors.specialist.message}

                  <span>Select a Specialist</span>
                  <select {...register("specialist")}>
                    <option selected disabled>
                      Select Specialist
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
                </Inputer>

                <Inputer>
                  {errors.department && errors.department.message}

                  <span> Select a Deparment</span>
                  <select {...register("department")}>
                    <option selected disabled>
                      Select a department
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
                </Inputer>
              </Double>

              <Inputer>
                <span>{errors.brief && errors.brief.message}</span>
                <span> Brief</span>
                <textarea
                  placeholder="Brief"
                  type="text"
                  {...register("brief")}
                />
              </Inputer>
              <Double>
                <Inputer>
                  {errors.doctorId && errors.doctorId.message}
                  <span>Doctor</span>
                  <select {...register("doctorId")}>
                    <option selected disabled style={{ color: "grey" }}>
                      Select Doctor
                    </option>
                    {doctors?.map((props) => (
                      <>
                        <option value={props._id}>
                          {props.firstName} {props.lastName}
                        </option>
                      </>
                    ))}
                  </select>
                </Inputer>
                <Inputer>
                  <div>{errors.time && errors.time.message}</div>
                  <span>Time</span>
                  <input
                    type="datetime-local"
                    placeholder="Select time"
                    {...register("dateAndTime")}
                  />
                </Inputer>
              </Double>

              <Buttons type="submit">Submit</Buttons>
            </AllForm>
          </MainHold>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;

const Buttons = styled.button`
  margin-top: 10px;
  text-align: center;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #0000cc;
  width: 200px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

const Double = styled.div`
  display: flex;
  width: 100%;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    flex: 4;
  }
`;
const Inputer = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;

  span {
    font-size: 15px;
    padding: 5px 0px;
    width: 100%;
  }
  input {
    display: flex;
    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    width: 100%;
    height: 30px;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
  select {
    display: flex;
    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    width: 100%;
    height: 50px;

    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }

  textarea {
    display: flex;
    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    width: 100%;
    height: 50px;
    resize: vertical;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
`;
const AllForm = styled.form`
  padding: 10px 30px;
  box-sizing: border-box;
  width: 90%;
  margin: 30px 0px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
const MainHold = styled.div`
  width: 70%;
  /* height:100% ; */
  margin-top: 20px;
  background-color: white;

  flex-direction: column;
  display: flex;
  align-items: center;
`;
const BlueBack = styled.div`
  width: 100%;
  height: 150px;
  background-color: #0000cc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  font-size: 30px;
  font-weight: 500;
`;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  background-color: #eeeeff;
  display: flex;
  justify-content: center;
  /* height:100% ; */
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  /* width:15%; */
  background-color: blue;
  height: 100%;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
