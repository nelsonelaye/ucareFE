import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "../Dashboards/AdminDashboard/AdminView";
// import AdminDashboard from "../Dashboards/AdminDashboard/AdminOverview";
import DoctorDashboard from "../Dashboards/DoctorDashboard/DocOverview";
import PatientDashboard from "../Dashboards/PatientDashboard/PatientOverview";
import Home from "../Home/Home";
import decoder from "jwt-decode";
const Private = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user) {
    // const token = decoder(user?.token);
    // if (token) {
    return user?.isAdmin ? (
      <AdminDashboard />
    ) : user?.isDoctor ? (
      <DoctorDashboard />
    ) : user?.isPatient ? (
      <PatientDashboard />
    ) : null;
    // }
  }

  return <Home />;
};

export default Private;
