import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// import PatientData from "./Patient.json";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const Lets = () => {
  const [allPatients, setAllPatients] = useState([]);

  // const allPatients = [];
  const user = useSelector((state) => state.user);
  console.log(user);
  const hospitalId = user.hospital;

  const getPatients = async () => {
    const mainURL = "";
    const localURL = "http://localhost:1210";
    const url = `${localURL}/api/hospital/${hospitalId}/patient/all`;
    await axios
      .get(url)
      .then((res) => {
        console.log("this is the response", res?.data?.data);
        setAllPatients(res?.data?.data?.patients);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPatients();
    // setAllPatients(user.patients);
  }, []);

  return (
    <TableContainer
      component={Paper}
      // sx={{maxHeight:"300px"}}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>UHD</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell align="center">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPatients.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {row.firstName} {row.lastName}
              </TableCell>
              <TableCell>
                <img
                  src={row.avatar}
                  alt="check"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </TableCell>
              <TableCell>{row.uhd ? row.uhd : null}</TableCell>
              <TableCell>{row.telephone}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lets;
