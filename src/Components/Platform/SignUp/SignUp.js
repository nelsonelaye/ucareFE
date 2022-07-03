import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState("/assets/hoslogo.png");
  const [logo, setLogo] = useState("");

  const formSchema = yup.object().shape({
    hospitalName: yup.string(),
    telephone: yup.number(),
    email: yup.string().email(),
    UHID: yup.string(),
    description: yup.string(),
    city: yup.string(),
    address: yup.string(),
    password: yup.string(),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setLogo(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const {
      hospitalName,
      email,
      telephone,
      password,
      UHID,
      description,
      city,
      address,
    } = value;
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital`;

    const formData = new FormData();
    formData.append("hospitalName", hospitalName);
    formData.append("email", email);
    formData.append("telephone", telephone);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("UHID", UHID);
    formData.append("password", password);
    formData.append("logo", logo);

    const config = {
      "content-type": "multipart/form-data",
    };
    await axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res);
        dispatch(createUser(res.data.data));
        Swal.fire({
          icon: "success",
          title: "Successful!",
          text: "An OTP has been sent to your email. Check your inbox or Spam folder to verify your account",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed. Please check your details and try again.",
          // text: `Something went wrong!`,
        });
      });
    // if (res.data.data) {
    //   console.log(res);
    //   navigate("/otp");
    //   Swal.fire({
    //     icon: "success",
    //     title: "Successful!",
    //     text: "An OTP has been sent to your email. Check your inbox or Spam folder to verify your account",
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    // } else {
    //   console.log(res);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: `Something went wrong! ${res.response}`,
    //     footer: '<a href="">Why do I have this issue?</a>',
    //   });
    // }

    // console.log(res);
    // navigate("/login");
    // Swal.fire({
    //   icon: "success",
    //   title: "Successful!",
    //   text: "Check your mail for verification.",
    //   footer: "Check your spam folder if mail is not found",
    // });
  });

  return (
    <Container>
      <Wrapper>
        <Right>
          <Form onSubmit={onSubmit} type="multipart/form-data">
            <Rightwrap>
              <Welcome>
                <Nav1>Register your hospital</Nav1>

                <nav>Start Your 30days free trial</nav>
              </Welcome>

              <ImageHolder>
                <Image src={image} />
                <ImageLabel htmlFor="pix">Upload Logo</ImageLabel>
                <ImageInput
                  id="pix"
                  onChange={handleImage}
                  type="file"
                  accept="image/*"
                />
              </ImageHolder>

              <Inputwrap>
                <DoubleHold>
                  <Input>
                    <Error>
                      {errors.message && errors?.message.hospitalName}
                    </Error>
                    <nav>
                      Hospital Name <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="text"
                      placeholder=" Hospital Name"
                      {...register("hospitalName")}
                      required
                    />
                  </Input>
                  <Input>
                    <Error>{errors.message && errors?.message.UHID}</Error>
                    <nav>
                      RC Number <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="text"
                      min="4"
                      max="7"
                      placeholder="RC Number"
                      {...register("UHID")}
                      required
                    />
                  </Input>
                </DoubleHold>

                <DoubleHold>
                  <Input>
                    <Error>
                      {errors.message && errors?.message.description}
                    </Error>
                    <nav>
                      Description <span style={{ color: "red" }}>*</span>
                    </nav>
                    <textarea
                      type="text"
                      placeholder="Give a brief of your hospital's history and servies"
                      {...register("description")}
                      required
                    />
                  </Input>
                </DoubleHold>

                <DoubleHold>
                  <Input>
                    <Error>{errors.message && errors?.message.email}</Error>
                    <nav>
                      Email <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      {...register("email")}
                      required
                    />
                  </Input>

                  <Input>
                    <Error>{errors.message && errors?.message.telephone}</Error>
                    <nav>
                      Telephone <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="number"
                      placeholder="+234XXXXXXXXXX"
                      {...register("telephone")}
                      required
                    />
                  </Input>
                </DoubleHold>

                <DoubleHold>
                  <Input>
                    <Error>{errors.message && errors?.message.city}</Error>
                    <nav>
                      City <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="text"
                      placeholder="City"
                      {...register("city")}
                      required
                    />
                  </Input>

                  <Input>
                    <Error>{errors.message && errors?.message.address}</Error>
                    <nav>
                      Address <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("address")}
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
                  <Input>
                    <nav>
                      Confirm <span style={{ color: "red" }}>*</span>
                    </nav>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      {...register("confirm")}
                      required
                    />
                    <Error>{errors.message && errors?.message.confirm}</Error>
                  </Input>
                </DoubleHold>
              </Inputwrap>

              <Buttonwrap>
                <Button type="submit">Signup</Button>
                <Google>Signup With Google</Google>
              </Buttonwrap>

              <Option>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  Log in here
                </Link>
              </Option>
            </Rightwrap>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  background-color: darkorange;
  margin-bottom: 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

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
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

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
  width: 680px;
  flex-direction: column;
  background-color: white;
  margin: 50px 0;
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

const Nav1 = styled.div`
  width: 350px;
  font-size: 30px;
  font-weight: 650;
  text-align: center;
  color: var(--color);
  text-transform: capitalize;
`;

const Welcome = styled.div`
  margin-bottom: 50px;
  width: 100%;

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
  padding: 8px 15px;
  background-color: var(--color);
  color: white;
  border-radius: 5px;
  transition: all 350ms;
  font-weight: 500;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Inputwrap = styled.div`
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
    height: 80px;
    margin-top: 3px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    outline: none;
    resize: none;
    overflow: scroll;
    span {
      color: red;
    }
  }
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
  border-radius: 5px;
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
