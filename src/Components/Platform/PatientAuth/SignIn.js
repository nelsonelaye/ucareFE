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
const SignIn = () => {
  const params = useParams();
  console.log(params);
  const hospitalId = params.hospitalId;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("This field is required"),
    password: yup.string().required("This field is required"),
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
    const { email, password } = value;
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/patient/login`;

    const res = await axios.post(url, { email, password });
    // if (res.data.data) {
    //   console.log(res);
    //   dispatch(createUser(res.data.data));
    //   Swal.fire({
    //     icon: "success",
    //     title: "Login Successful!",
    //     html: `<p>Let's save lives!</p>`,
    //   });
    //   navigate("/doctor-overview");
    // } else {
    //   console.log(res);

    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: `Something went wrong! ${res.response.data.message}`,
    //   });
    // }
    console.log(res);
    dispatch(createUser(res.data.data));
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      html: `<p>${res.data.data}</p>`,
    });
    navigate("/");
  });

  return (
    <Cont>
      <Card>
        <Text>
          <h1>
            Hello Patient,
            <br />
            welcome back
          </h1>
        </Text>
        <Inp onSubmit={onSubmit}>
          <Meracle>
            <input
              placeholder="E-mail"
              type="email"
              {...register("email")}
              required
            />
          </Meracle>

          <Meracle>
            <input
              placeholder="Enter Password"
              type="password"
              {...register("password")}
              required
            />
          </Meracle>

          <Forgot>Forgot your password</Forgot>
          <Button type="submit">Sign in</Button>
        </Inp>

        <Alr>
          new here?{" "}
          <Link to="signup" style={{ textDecorationColor: "blue" }}>
            <span>sign up instead</span>
          </Link>
        </Alr>
      </Card>
    </Cont>
  );
};

export default SignIn;

const Cont = styled.div`
  height: 100vh;
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
  height: 500px;

  /* background-color: rgba(183, 224, 283, 0.5); */
  border-radius: 15px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Button = styled.button`
  padding: 10px 35px;
  margin: auto;

  border-radius: 5px;
  background-color: blue;
  outline: none;
  border: 1px solid;
  margin-top: 30px;
  color: white;
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Inp = styled.form`
  margin-top: 60px;

  width: 80%;
  margin: 0px 10;
  display: flex;

  margin-left: 30px;
  flex-direction: column;
`;

const Meracle = styled.div`
  /* background-color:red; */
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
  h1 {
    margin-left: 30px;
    color: blue;
  }
`;

const Forgot = styled.div`
  color: blue;
  text-align: center;
  font-size: 14px;
  margin-top: 30px;
  /* background-color: red; */
`;

const Alr = styled.div`
  color: blue;
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 5px;

  span {
    color: blue;
    font-weight: 600;
  }
`;
