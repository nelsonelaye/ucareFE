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
import Appointment from "../Dashboards/PatientDashboard/Appointment";
import ConfirmAppoint from "../Dashboards/DoctorDashboard/ConfirmAppoint";
import CreateProfile from "../Dashboards/PatientDashboard/CreateProfile";
import AdminCreateProfile from "../Dashboards/PatientDashboard/CreateProfile";
import DocCreate from "../Dashboards/DoctorDashboard/DocCreate";
import DocOverview from "../Dashboards/DoctorDashboard/DocOverview";
import AdminOverview from "../Dashboards/AdminDashboard/AdminOverview";
import AdminSpecialists from "../Dashboards/AdminDashboard/AllSpecialists";
import Specialist from "../Dashboards/PatientDashboard/Specialist";
import AdminDash from "../Dashboards/AdminDashboard/AdminOverview";
import { useSelector } from "react-redux";
function HospitalRoutes() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.isAdmin ? (
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

            <Route path="/admin-overview" element={<AdminOverview />} />
            <Route path="/admin-create" element={<AdminCreateProfile />} />
            <Route path="/admin-specialists" element={<AdminSpecialists />} />
            <Route path="/doc" element={<Specialist />} />
            <Route
              path="/hospital/:hospitalId/detail"
              element={<HospitalDetail />}
            />
            <Route path="/allpatient" element={<Allpatients />} />
            <Route path="/confirm" element={<ConfirmAppoint />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default HospitalRoutes;