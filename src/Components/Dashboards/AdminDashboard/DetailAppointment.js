import AdminHead from "./Head";
import AdminNav from "./Nav";
import React from "react";
import styled from "styled-components";

const ParientArrange = () => {
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
          <Confirm>
            <Titles>Appointment in Detail</Titles>

            <Detailhold>
              <Column1>
                <Show>
                  <span>Doctor</span>
                  <p>Doctor Wright</p>
                </Show>

                <Show>
                  <span>Department</span>
                  <p>Intensive Care Unit</p>
                </Show>

                <Show>
                  <span>Case</span>
                  <p>EOn registration</p>
                </Show>
                <Show>
                  <span>Symptoms</span>
                  <p>EOn registration, users get 1000 points and points</p>
                </Show>
              </Column1>
              <Column2>
                <Show>
                  <span>Date</span>
                  <p>21/06/2022</p>
                </Show>

                <Show>
                  <span>Time</span>
                  <p>7:15am</p>
                </Show>

                <Show>
                  <span>Allergies</span>
                  <p>
                    {" "}
                    when users read a quote or post. Full creativity is
                    permitted
                  </p>
                </Show>

                <Show>
                  <span>Brief</span>
                  <p>
                    EOn registration, users get 1000 points and points are
                    awarded when a user creates a quote, also, points get
                    deducted from reader to author when users read a quote or
                    post. Full creativity is permitted
                  </p>
                </Show>
              </Column2>
            </Detailhold>
          </Confirm>
        </Overviews>
      </Right>
    </Container>
  );
};

export default ParientArrange;
const Show = styled.div`
  // line-height:5px;
  padding-top: 10px;
  width: 100%;

  span {
    color: #3c82d3;
    font-weight: 500;
    font-size: 15px;
  }
  p {
    font-size: 13px;
    text-align: justify;
    // line-height:10px;
  }
`;
const Column2 = styled.div`
  width: 45%;
`;
const Column1 = styled.div`
  width: 45%;
`;

const Detailhold = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Titles = styled.div`
  padding: 10px 0px;
  font-weight: 600;
  font-size: 20px;
`;
const Confirm = styled.div`
  border: 1px solid grey;
  width: 70%;
  // height:550px;
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Headers = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
`;
const Overviews = styled.div`
  flex: 1;
  width: 100%;
  padding: 60px 0px;
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
