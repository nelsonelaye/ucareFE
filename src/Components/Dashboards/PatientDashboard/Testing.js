import React from "react";
import styled from "styled-components";

const Testing = (props) => {
  return (
    <Cards>
      <Icons>
        <span>{props.spane ? props.spane : null}</span>
        <IconHold IColor={props.IColor}>{props.Icontag}</IconHold>
      </Icons>
      <Test tColor={props.tColor}>{props.texts}</Test>
    </Cards>
  );
};

export default Testing;
const IconHold = styled.div`
  color: ${({ IColor }) => IColor};
  font-size: 70px;
`;
const Icons = styled.div`
  display: flex;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: black;
    font-size: 22px;
    font-weight: 600;
  }
`;
const Test = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: ${({ tColor }) => tColor};
`;
const Cards = styled.div`
  height: 200px;
  width: 300px;
  margin: 10px 15px;
  /* background:${({ bgColor }) => bgColor}; */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  padding: 5px 15px;
  flex-direction: column;
  /* align-items: center ; */
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0px 10px;
  }
`;
