import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Header = ({ image, hospitalId }) => {
  return (
    <Container>
      <Wrapper>
        <Logo src={image} />
        <Navigator>
          <Nav>Home</Nav>
          <Nav>How it works</Nav>
          <Nav>About us</Nav>
          <Nav>Pricing</Nav>
          <Nav>Portfolio</Nav>
          <Link
            to={`/hospital/${hospitalId}/auth`}
            style={{ textDecoration: "none" }}
          >
            <Button>SignIn</Button>
          </Link>
        </Navigator>
        <Menu>
          <AiOutlineMenu
            id="menu"
            onClick={() => {
              document.getElementById("sidebar").style.width = "300px";
              document.getElementById("menu").style.display = "none";
              document.getElementById("close").style.display = "block";
            }}
          />
          <AiOutlineClose
            id="close"
            style={{ display: "none" }}
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
          />
        </Menu>
        <SideBar id="sidebar">
          <Nav1>Home</Nav1>
          <Nav1>How it works</Nav1>
          <Nav1>About us</Nav1>
          <Nav1>Pricing</Nav1>
          <Nav1>Portfolio</Nav1>
          <Logos src="/assets/profbak.png" />
        </SideBar>
      </Wrapper>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #f9f4f0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: #f9f4f0;
  height: 100%;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
const Logos = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Navigator = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Nav = styled.div`
  margin-right: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: black;
`;
const Nav1 = styled.div`
  color: white;
`;
const Button = styled.div`
  border: 0;
  outline: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background: #ea0763;
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const SideBar = styled.div`
  width: 0;
  height: 100vh;
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  display: none;
  overflow: hidden;
  transition: all 300ms;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;
