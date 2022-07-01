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
import { FiEye } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// let status = ["success", "pending"]
// const usestyles = makeStyles((theme)=>({

// }))

const Lets = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [allAppointments, setAllAppointments] = useState([]);
  const [allPatients, setAllPatients] = useState([]);

  // const allAppointments = [];
  const user = useSelector((state) => state.user);
  // console.log(user);
  const hospitalId = user.hospital;
  const doctorId = user._id;

  const getAppointments = async () => {
    const mainURL = "";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}/doctor/${doctorId}`;
    await axios.get(url).then((res) => {
      console.log("this is the response", res?.data?.data);
      setAllAppointments(res?.data?.data?.appointments);
    });
  };
  const getPatients = async () => {
    const mainURL = "";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}/patient/all`;
    await axios.get(url).then((res) => {
      console.log("this is the Patient response", res?.data?.data?.patients);
      setAllPatients(res?.data?.data?.patients);
    });
  };

  useEffect(() => {
    getAppointments();
    getPatients();
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
                {allPatients?.map((props) => (
                  <>
                    <img
                      src={props.avatar}
                      alt="check"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </>
                ))}
              </TableCell>

              <TableCell>{row.specialist}</TableCell>
              <TableCell>{moment(row.date).format("MMMM d, YYYY")}</TableCell>
              <TableCell>{moment(row.time).format("h:mma")}</TableCell>
              <TableCell>
                <Link
                  to={`/confirm/${row._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <AiTwotoneEdit fontSize="25px" style={{ margin: "5px" }} />
                </Link>
                <Link
                  to={`/appointment/${row._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <FiEye fontSize="25px" style={{ margin: "5px" }} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lets;
