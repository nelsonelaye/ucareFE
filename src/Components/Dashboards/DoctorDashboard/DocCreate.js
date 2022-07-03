import AdminHead from "./Head";
import AdminNav from "./Nav";
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../ReduxState/Global";
const DocCreate = () => {
  // const [avatar, setAvatar] = useState();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState(user.avatar);

  const dispatch = useDispatch();
  const hospitalId = user.hospital;
  const doctorId = user._id;

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    // setImage(save);
    setAvatar(file);
  };

  const formSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    telephone: yup.number(),
    DOB: yup.date(),
    bio: yup.string(),
    gender: yup.string(),
    address: yup.string(),
    specialization: yup.string(),
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
    const {
      firstName,
      lastName,
      telephone,
      specialization,
      DOB,
      bio,
      address,
      city,
      gender,
    } = value;

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("telephone", telephone);
    formData.append("specialization", specialization);
    formData.append("address", address);
    formData.append("bio", bio);
    formData.append("gender", gender);
    formData.append("DOB", DOB);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const mainURL = "http://localhost:1210";
    const url = `${mainURL}/api/hospital/${hospitalId}/doctor/${doctorId}`;

    const res = await axios.patch(url, formData, config);
    console.log(res);
    dispatch(createUser(res.data.data));
    navigate("/doctor-overview");
    Swal.fire({
      icon: "success",
      title: "Profile Updated!",
      html: `<b>Keep doing magic</b>`,
    });
  });

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
            <BlueBack>Update Profile</BlueBack>
            <AllForm onSubmit={onSubmit}>
              <ImageHolder>
                <Image src={avatar} />
                <ImageLabel htmlFor="pix">Upload Avatar</ImageLabel>
                <ImageInput
                  id="pix"
                  onChange={handleImage}
                  type="file"
                  accept="image/*"
                />
              </ImageHolder>
              <Inputer style={{ display: "none" }}>
                <span>Profile Picture</span>
                <input
                  type="file"
                  placeholder="Upload image"
                  onChange={handleImage}
                />
              </Inputer>
              <Inputer>
                <span>Bio</span>
                <textarea
                  type="text"
                  placeholder={user.bio}
                  value={user.bio}
                  {...register("bio")}
                />
              </Inputer>
              <Inputer>
                <span>First Name</span>
                <input
                  type="text"
                  placeholder={user.firstName}
                  value={user.firstName}
                  {...register("firstName")}
                />
              </Inputer>
              <Inputer>
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder={user.lastName}
                  value={user.lastName}
                  {...register("lastName")}
                />
              </Inputer>
              <Inputer>
                <span> Date of Birth</span>
                <input
                  type="date"
                  placeholder={user.DOB}
                  value={user.DOB}
                  {...register("DOB")}
                />
              </Inputer>
              <Inputer>
                <span> Gender</span>
                <select {...register("gender")}>
                  <option
                    selected
                    style={{ color: "grey" }}
                    value={user.gender}
                  >
                    {user.gender}
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Inputer>

              <Inputer>
                <span>Contact</span>
                <input
                  type="tel"
                  placeholder={user.telephone}
                  value={user.telephone}
                  {...register("telephone")}
                />
              </Inputer>

              <Inputer>
                <span>Secialisation</span>
                <input
                  type="text"
                  placeholder={user.specialization}
                  value={user.specialization}
                  {...register("specialization")}
                />
              </Inputer>

              <Inputer>
                <span> Address</span>
                <input
                  type="text"
                  placeholder={user.address}
                  value={user.address}
                  {...register("address")}
                />
              </Inputer>
              <Buttons type="submit">Update</Buttons>
            </AllForm>
          </MainHold>
        </Overviews>
      </Right>
    </Container>
  );
};

export default DocCreate;

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
const Inputer = styled.div`
  padding: 5px;
  display: flex;
  width: 90%;
  flex-direction: column;

  span {
    font-size: 20px;
    padding: 5px 0px;
  }
  input {
    display: flex;
    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }

  textarea {
    display: flex;
    border-radius: 3px;

    /* align-items: center; */
    padding-left: 5px;
    padding-top: 5px;
    height: 100px;
    resize: none;
    border: 1px solid gray;
    :focus {
      outline-color: rgba(0, 0, 255, 0.5);
    }
  }
`;
const AllForm = styled.form`
  padding: 10px;
  width: 90%;
  margin: 30px 0px;
  height: 100%;
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
