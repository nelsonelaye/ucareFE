import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import PatientData from "./Appoint.json";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// let status = ["success", "pending"]
// const usestyles = makeStyles((theme)=>({

// }))

const Lets = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [allAppointments, setAllAppointments] = useState([]);

  // const allAppointments = [];
  const user = useSelector((state) => state.user);
  // console.log(user);
  const hospitalId = user._id;

  const getAppointments = async () => {
    const mainURL = "";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}/appointment/all`;
    await axios.get(url).then((res) => {
      console.log("this is the response", res?.data?.data?.appointments);
      setAllAppointments(res?.data?.data?.appointments);
    });
  };

  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <TableContainer
      component={Paper}
      // sx={{maxHeight:"300px"}}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>PatientData</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Specialists</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAppointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.patientName} </TableCell>
              <TableCell>
                <img
                  src={row.image}
                  alt="check"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
              </TableCell>
              <TableCell>{row.spacealists}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                {show ? (
                  <HighlightOffRoundedIcon onClick={handleShow} />
                ) : (
                  <CheckCircleOutlineRoundedIcon onClick={handleShow} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lets;
