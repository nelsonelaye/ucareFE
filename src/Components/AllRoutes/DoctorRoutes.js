import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Platform/Header/Header";
import OTP from "../Platform/OTP/OTP";
import CheckOut from "../Platform/CheckOut/CheckOut";
import Private from "../ReduxState/Private";
import SignUp from "../Platform/SignUp/SignUp";
import SignIn from "../Platform/SignIn/SignIn";
import DoctorSignIn from "../Platform/DoctorAuth/SignIn";
import DoctorSignUp from "../Platform/DoctorAuth/SignUp";
import Auth from "../ReduxState/Auth";
import MultiUser from "../Platform/Toggle/Toggle";
import HospitalDetail from "../Platform/HospitalDetailed/Home";
import HospitalList from "../Platform/HospitalList/HospitalList";
import Allpatients from "../Dashboards/DoctorDashboard/AllPatients";
import Appointments from "../Dashboards/DoctorDashboard/AllAppointments";
import ConfirmAppoint from "../Dashboards/DoctorDashboard/ConfirmAppoint";
import ViewAppointment from "../Dashboards/DoctorDashboard/DetailAppointment";
import AdminCreateProfile from "../Dashboards/PatientDashboard/CreateProfile";
import DocCreate from "../Dashboards/DoctorDashboard/DocCreate";
import DocOverview from "../Dashboards/DoctorDashboard/DocOverview";
import AdminOverview from "../Dashboards/AdminDashboard/AdminOverview";
import AdminSpecialists from "../Dashboards/AdminDashboard/AllSpecialists";
import Specialist from "../Dashboards/PatientDashboard/Specialist";
import AdminDash from "../Dashboards/AdminDashboard/AdminOverview";
import { useSelector } from "react-redux";
function DoctorRoutes() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user && user?.isDoctor ? (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />

            <Route path="/doctor-overview" element={<DocOverview />} />
            <Route path="/Dcreate" element={<DocCreate />} />
            <Route path="/allpatient" element={<Allpatients />} />
            <Route path="/all-appointments" element={<Appointments />} />
            <Route
              path="/confirm/:appointmentId"
              element={<ConfirmAppoint />}
            />
            <Route
              path="/appointment/:appointmentId"
              element={<ViewAppointment />}
            />

            <Route path="/Docview" element={<DocOverview />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default DoctorRoutes;
