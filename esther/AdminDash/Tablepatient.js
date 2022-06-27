import {
Paper,
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow
} from "@mui/material"

import PatientData from "./Patient.json"
import React from 'react'

const lets = () => {
  return (
<TableContainer component={Paper} 
// sx={{maxHeight:"300px"}}
>
  <Table aria-label="simple table" stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell>name</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>uhd</TableCell>
        <TableCell>phone</TableCell>
        <TableCell align="center">Gender</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        PatientData.map((row)=>(
          <TableRow key={row.id}
          sx={{"&:last-child td, &:last-child th":{border:0}}}
          >
<TableCell>{row.name}

</TableCell>
<TableCell><img src={row.image} alt="check" style={{height:"30px", width:"30px" , borderRadius:"50%"}}/></TableCell>
<TableCell>{row.uhd}</TableCell>
<TableCell>{row.phone}</TableCell>
<TableCell align="center">{row.gender}</TableCell>

          </TableRow>
        ))
      }
    </TableBody>

  </Table>
</TableContainer>
  )
}

export default lets