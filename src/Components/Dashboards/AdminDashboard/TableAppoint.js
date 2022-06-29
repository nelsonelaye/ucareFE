import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    makeStyles
} from "@mui/material"
import React,{useState} from 'react'

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import PatientData from "./Appoint.json"

// let status = ["success", "pending"]
// const usestyles = makeStyles((theme)=>({


// }))

const Lets = () => {
  const [show, setShow] = useState(false)
const handleShow =()=>{
    setShow(!show)
}
      return (
    <TableContainer component={Paper} 
    // sx={{maxHeight:"300px"}}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>PatientData</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Specialists</TableCell>
            <TableCell>Date</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            PatientData.map((row)=>(
              <TableRow key={row.id}
              sx={{"&:last-child td, &:last-child th":{border:0}}}
              >
    <TableCell>{row.name} </TableCell>
    <TableCell><img src={row.image} alt="check" style={{height:"30px", width:"30px" , borderRadius:"50%"}}/></TableCell>
    <TableCell>{row.spacealists}</TableCell>
    <TableCell>{row.Date}</TableCell>
    <TableCell>{row.time}</TableCell>
    <TableCell>
      {
        show ?(
          <HighlightOffRoundedIcon onClick={handleShow} />
         

        ):(
          <CheckCircleOutlineRoundedIcon onClick={handleShow}/>
          
        )
      }
      
    
 
    </TableCell>
    
              </TableRow>
            ))
          }
        </TableBody>
    
      </Table>
    </TableContainer>
      )
    }
    
    export default Lets