import React from "react";
import styled from "styled-components";

const Testing = (props) => {
  return (
    <Cards bgColor={props.bgColor}>
      <Icons>
        <span>{props.spane ? props.spane : 0}</span>
        <IconHold>{props.Icontag}</IconHold>
      </Icons>
      <Test>{props.texts}</Test>
    </Cards>
  );
};

export default Testing;
const IconHold = styled.div`
  // color:${({ IColor }) => IColor};
  color: white;
  font-size: 50px;
`;
const Icons = styled.div`
  display: flex;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: white;
    font-size: 22px;
    font-weight: 600;
  }
`;
const Test = styled.div`
  font-weight: 600;
  font-size: 25px;
  // color:${({ tColor }) => tColor};
  color: white;
`;
const Cards = styled.div`
  height: 150px;
  width: 250px;
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  /* align-items: center ; */
  justify-content: center;
  margin: 10px 20px;
  @media screen and (max-width: 768px) {
    margin: 10px 20px;
  }
`;
