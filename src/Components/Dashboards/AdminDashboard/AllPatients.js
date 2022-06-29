import AdminHead from "./Head";
import AdminNav from "./Nav";
import AllPatients from "./AllPatients";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const ParientArrange = () => {
  const [allPatients, setAllPatients] = useState([]);

  // const allPatients = [];
  const user = useSelector((state) => state.user);
  console.log(user);
  const hospitalId = user._id;

  useEffect(() => {
    setAllPatients(user.patients);
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
          <AllPatients />
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
  padding: 10px 0px;
  background-color: white;
  height: 100%;
  display: felx;
  justify-content: center;
`;

const Right = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 85%;
  // background-color:red ;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Left = styled.div`
  height: 100vh;
  width: 15%;
  background-color: blue;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
