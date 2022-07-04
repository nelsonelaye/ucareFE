import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { GiHospitalCross } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { createUser } from "../../ReduxState/Global";
import Swal from "sweetalert2";
const SignIn = () => {
  const { hospitalId } = useParams();

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
    const url = `${mainURL}/api/hospital/login`;

    const config = {
      "content-type": "multipart/form-data",
    };

    await axios
      .post(url, { email, password })
      .then((res) => {
        console.log(res);
        dispatch(createUser(res.data.data));
        Swal.fire({
          icon: "success",
          title: "Successful!",
          html: `<b>Let's save lives!</b>`,
        });
        navigate("/admin-overview");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(err.response);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not found",
            // text: `Something went wrong!`,
          });
        } else if (err.response.status === 400) {
          console.log(err.response);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password is incorrect",
            // text: `Something went wrong!`,
          });
        } else if (err.response.status === 401) {
          console.log(err.response);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not verified. Check your mail for verification link.",
            // text: `Something went wrong!`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.message,
            // text: `Something went wrong!`,
          });
        }
      });

    // if (res.data.data) {
    //   console.log(res);
    //   dispatch(createUser(res.data.data));
    //   Swal.fire({
    //     icon: "success",
    //     title: "Successful!",
    //     html: `<b>Let's save lives!</b>`,
    //   });
    //   navigate("/");
    // } else {
    //   console.log(res);

    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: JSON.stringify(res.data.message),
    //     // text: `Something went wrong!`,
    //   });
    // }
  });
  return (
    <Container>
      <Wrapper>
        <Right>
          <Form onSubmit={onSubmit} type="multipart/form-data">
            <Rightwrap>
              <Welcome>
                <nav1>Welcome back</nav1>

                <nav>Please enter the correct details below</nav>
              </Welcome>

              <Inputwrap>
                <DoubleHold>
                  <Input>
                    <Error>{errors.message && errors?.message.email}</Error>
                    <nav>
                      Email <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                      required
                    />
                  </Input>
                </DoubleHold>

                <DoubleHold>
                  <Input>
                    <nav>
                      Password <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      required
                    />
                    <Error>{errors.message && errors?.message.password}</Error>
                  </Input>
                </DoubleHold>
              </Inputwrap>

              <Buttonwrap>
                <Button type="submit">Login</Button>
              </Buttonwrap>
              <Option>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "blue" }}>
                  Register for free
                </Link>
              </Option>
            </Rightwrap>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeff;
  width: 100%;
  min-height: calc(100vh - 75px);
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 500px;
  flex-direction: column;
  background-color: white;
  // margin: 50px 0;
  padding: 30px 0;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`;

const Form = styled.form`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 28px;
`;

const Rightwrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Welcome = styled.div`
  margin-bottom: 50px;
  width: 100%;
  nav1 {
    width: 350px;
    font-size: 30px;
    font-weight: 650;
    text-align: center;
    color: var(--color);
    text-transform: capitalize;
  }
  nav {
    font-size: 16px;
    font-weight: 500;
    color: var(--tiny);
  }
  span {
  }

  @media screen and (max-width: 425px) {
    nav1 {
      width: 350px;
      font-size: 25px;
    }
    nav {
      font-size: 15px;
    }
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: var(--color);
  color: white;
  border-radius: 10px;
  transition: all 350ms;
  font-weight: 600;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Inputwrap = styled.form`
  width: 100%;
  background-color: white;

  span {
    /* background-color: red; */
    text-align: right;
    width: 100%;
    height: 50px;
    text-align: right;
    color: blue;
  }
`;

const DoubleHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SigninWrap = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 95%;
  background-color: yellow;

  /* background-color: yellow; */
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 5px;
  margin-bottom: 15px;

  box-sizing: border-box;
  nav {
    font-weight: 600;
    margin-bottom: 3px;
    font-size: 13px;
  }
  input {
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    height: 35px;
    margin-top: 3px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    outline: none;
    span {
      color: red;
    }
  }

  textarea {
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    height: 50px;
    margin-top: 3px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    outline: none;
    span {
      color: red;
    }
  }
`;

// const Logowrap = styled.div`
const Logowrap = styled(GiHospitalCross)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: white;
`;
const Logo = styled.img`
  height: 60px;
  width: 60px;
`;
const Name = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: white;
`;

const Imagewrap = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  img {
    width: 90%;
    /* height: 400px; */
    object-fit: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Text = styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
`;

const Buttonwrap = styled.div`
  height: 80px;
  width: 100%;
border-raidus: 
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  background-color: var(--color);
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  border: 0;
  transition: all 0.35s;

  :hover {
    transform: scale(1.05);
    background-color: var(--light);
  }
`;

const Google = styled.button`
  // display: flex;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* background-color: green; */
  border: 1px solid blue;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  height: 30px;
  /* margin-left: 50px; */
`;

const Option = styled.div``;
