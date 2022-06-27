import React from "react";
import styled from "styled-components";
// import { GiHospitalCross } from "react-icons/gi";
import { Link } from "react-router-dom";
const Header = () => {
  const style = { color: "blue" };
  return (
    <Container>
      <Hold>
        <InnerHeader>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Logo>
              <img src="/assets/hoslogo.webp" />

              <span
                style={{
                  color: "rgb(255, 182, 1)",
                  fontWeight: 700,
                  display: "none",
                }}
              >
                .
              </span>
            </Logo>
          </Link>

          <NavHold>
            <Link to="/all-hospitals" style={{ textDecoration: "none" }}>
              <span>Find Hospitals</span>
            </Link>

            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Contact</Nav>
            <Nav>Support</Nav>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button>Try Now</button>
            </Link>
          </NavHold>
        </InnerHeader>
      </Hold>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  /* background-color: rgba(255, 248, 220, 0.5); */
  height: 70px;
  border-bottom: 0.3px solid var(--grey);
  /* min-height: 100vh; */
  /* position: fixed; */
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 30px; */
`;
const InnerHeader = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  color: var(--color);

  img {
    width: 50px;
    height: 50px;
  }
`;
const NavHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color);
  /* width: 500px; */
  button {
    background-color: var(--color);
    border-radius: 5px;
    font-size: 16px;
    padding: 10px 25px;
    outline: none;
    border: 0;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.35s ease-in;
    color: white;
    :hover {
      background-color: var(--light);
    }
  }

  span {
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
  }
`;
const Nav = styled.div`
  font-weight: 500;
  cursor: pointer;
  margin: auto 15px;
  display: none;
  transition: all 0.35s ease-in;
  :hover {
    color: var(--light);
  }
  @media screen and (max-width: 1024px) {
    margin: auto 10px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;
const Headline = styled.div`
  margin: 5px auto 20px;
  font-size: 50px;
  font-weight: 700;
  font-family: montserrat;
  width: 450px;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 30px;
    width: 100%;
    line-height: 25px;
  }
`;

const Text = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 425px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

const ImageHold = styled.div`
  width: 500px;
  img {
    width: 100%;
  }
`;
