import AdminHead from './AdminHead'
import AdminNav from "./AdminNav"
import Let from "./Tablepatient"
import React from 'react'
import styled from "styled-components"

const ParientArrange = () => {
  return (
  <Container>
   <Left>
       <AdminNav/>
   </Left>
   <Right>
       <Headers>
           <AdminHead/>
       </Headers>
       <Overviews>
<PatientHold>

    <Let/>


</PatientHold>
         
       </Overviews>
   </Right>


  </Container>
  )
}

export default ParientArrange


const PatientHold = styled.div`
width:90%;
height:100%;
border: 1px solid rgba(0,0,0, 0.5);
// padding:10px 0px;
margin-top:30px;
`

const Headers = styled.div`
height:60px;
width:100%;
background-color:white;
`
const Overviews = styled.div`

flex:1;
width:100%;
padding:10px 0px;
// background-color:blue;
height:100%;
display:felx;
justify-content:center;
`;

const Right = styled.div`
height:100%;
min-height: 100vh;
width:85%;
// background-color:red ;
@media screen and (max-width: 768px) {
    width: 100% ;
      }
`
const Left = styled.div`
height:100vh;
width:15%;
background-color:blue;
@media screen and (max-width: 768px) {
    display:none ;
    }
`
const Container = styled.div`
display:flex ;
width:100%;
height:100%;
`