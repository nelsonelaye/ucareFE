import React from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../../ReduxState/Global";
const Signup = () => {
  const { hospitalId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("This field is required"),
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    inputKey: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
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
    console.log(value);
    const { email, password, inputKey, firstName, lastName } = value;
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/doctor`;

    const res = await axios.post(url, {
      email,
      password,
      inputKey,
      firstName,
      lastName,
    });
    console.log(res);
    navigate(`/hospital/${hospitalId}/doctor`);
    Swal.fire({
      icon: "success",
      title: "Successful!",
      html: `<b>Complete your mail for verification link.</b>`,
      footer: "Check your spam folder if mail is not found",
    });
  });

  return (
    <Cont>
      <Card>
        <Text>
          <h1>Get on Board</h1>
        </Text>
        <Inp onSubmit={onSubmit}>
          <Meracle>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
          </Meracle>
          <Meracle>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
          </Meracle>

          <Meracle>
            <input type="email" placeholder="E-mail" {...register("email")} />
          </Meracle>
          <Meracle>
            <input
              type="text"
              placeholder="Hospital Key"
              {...register("inputKey")}
            />
          </Meracle>

          <Meracle>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password")}
            />
          </Meracle>

          <Meracle>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirm")}
            />
          </Meracle>

          <Button type="submit">Sign up</Button>
        </Inp>

        <Forgot>
          By creating an account,you agree to the
          <br />
          Terms and use and privacy and policy
        </Forgot>

        <Link
          to={`/hospital/${hospitalId}/doctor`}
          style={{ textDecorationColor: "blue" }}
        >
          <Alr>I am already a member</Alr>
        </Link>
      </Card>
    </Cont>
  );
};

export default Signup;

const Cont = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const Card = styled.div`
  width: 400px;
  min-height: 550px;
  height: 100%;
  padding: 20px 0;
  margin: 30px 0;

  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Button = styled.button`
  padding: 10px 35px;
  margin: auto;
  border-radius: 5px;
  background-color: blue;
  color: white;
  outline: none;
  border: 1px solid;
  margin-top: 30px;
  font-weight: bold;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Inp = styled.form`
  width: 90%;
  margin: 0px 10;
  display: flex;
  /* background-color:red; */
  /* background-color:blue; */
  margin-left: 20px;
  flex-direction: column;
`;

const Meracle = styled.div`
  flex: 1;
  border-bottom: 1px solid gray;

  input {
    border: 0;
    outline: none;

    background-color: transparent;
    width: 80%;
    padding: 12px 3px;
    margin: 8px 0;
    box-sizing: border-box;
  }
`;
const ImSvg = styled.div`
  object-fit: contain;
`;

const Text = styled.div`
  text-align: center;
  h1 {
    /* margin-left: 50px; */
    color: blue;
  }
  /* background-color: red; */
`;

const Forgot = styled.div`
  color: var(--tiny);
  text-align: center;
  font-size: 14px;
  margin-top: 30px;
`;

const Alr = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 20px;
  color: blue;
  cursor: pointer;
`;
