import React from "react";
import styled from "styled-components";
import AdminHead from "./Head";
import AdminNav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
// import { user } from "../ReduxState/Global";

const ParientArrange = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
          <Key>
            Hospital Key: <span>{user.key}</span>{" "}
          </Key>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  // background-color: purple;
`;
const Key = styled.div`
  color: var(--tiny);
  font-size: 20px;
  font-weight: 500;

  span {
    letter-spacing: 1px;
    color: black;
  }
`;
const Right = styled.div`
  height: 100vh;
  width: 100%;
  // background-color: red;
`;
const Left = styled.div`
  height: 100vh;
  background-color: blue;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
