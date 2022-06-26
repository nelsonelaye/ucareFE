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

const OTP = () => {
  const { hospitalId, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    inputOTP: yup.string().required("this field must not be empty"),
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
    const { inputOTP } = value;
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/${token}/verify`;

    const res = await axios.post(url, { inputOTP });
    // if (res.data.data) {
    //   console.log(res);

    //   Swal.fire({
    //     icon: "success",
    //     title: "Account Verified!",
    //     text: `<b>Login to proeed to your dashboard</b>`,
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    //   navigate("/login");
    // } else {
    //   console.log(res);

    //   Swal.fire({
    //     icon: "error",
    //     title: "Veifications Failed!",
    //     text: `Something went wrong! ${res.response.data.message}`,
    //   });
    // }

    console.log(res);

    Swal.fire({
      icon: "success",
      title: "Account Verified!",
      html: `<b>Login to proeed to your dashboard</b>`,
    });
    navigate("/login");
  });

  return (
    <Container>
      <Wrapper>
        <Right>
          <Form onSubmit={onSubmit}>
            <Rightwrap>
              <Welcome>
                <nav1>Verify your account </nav1>
                <nav>It only takes few minutes</nav>
              </Welcome>

              <Inputwrap>
                <DoubleHold>
                  <Input>
                    <Error>{errors.message && errors?.message.inputOTP}</Error>
                    <nav>
                      OTP <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="text"
                      placeholder="Input OTP"
                      {...register("inputOTP")}
                      required
                    />
                  </Input>
                </DoubleHold>
              </Inputwrap>

              <Buttonwrap>
                <Button type="submit">Submit</Button>
              </Buttonwrap>

              <Option>
                Didn't receive OTP?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  Resend code
                </Link>
              </Option>
            </Rightwrap>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default OTP;

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

const Option = styled.div``;
