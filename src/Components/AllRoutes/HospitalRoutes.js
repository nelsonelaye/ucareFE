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
import DoctorDetail from "../Dashboards/AdminDashboard/DoctorView";

import Auth from "../ReduxState/Auth";
import MultiUser from "../Platform/Toggle/Toggle";
import HospitalDetail from "../Platform/HospitalDetailed/Home";
import HospitalList from "../Platform/HospitalList/HospitalList";
import Allpatients from "../Dashboards/AdminDashboard/AllPatients";
import AllAppointment from "../Dashboards/AdminDashboard/AllAppointments";
// import ConfirmAppoint from "../Dashboards/AdminDashboard/ConfirmAppoint";
import ViewAppointment from "../Dashboards/AdminDashboard/DetailAppointment";
import AdminCreateProfile from "../Dashboards/AdminDashboard/CreateProfile";
import DocCreate from "../Dashboards/DoctorDashboard/DocCreate";
import DocOverview from "../Dashboards/DoctorDashboard/DocOverview";
import AdminView from "../Dashboards/AdminDashboard/AdminView";
import Specialists from "../Dashboards/AdminDashboard/AllSpecialists";
import Patients from "../Dashboards/AdminDashboard/PatientAdmin";
// import Specialist from "../Dashboards/AdminDashboard/Specialist";
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

            <Route path="/admin-overview" element={<AdminView />} />
            <Route path="/admin-create" element={<AdminCreateProfile />} />
            <Route path="/all-specialists" element={<Specialists />} />
            <Route path="/all-patients" element={<Patients />} />
            <Route path="/all-appointments" element={<AllAppointment />} />

            <Route path="/doctor/:doctorId/detail" element={<DoctorDetail />} />

            <Route
              path="/hospital/:hospitalId/detail"
              element={<HospitalDetail />}
            />
            <Route
              path="/appointment/:appointmentId"
              element={<ViewAppointment />}
            />
            <Route path="/allpatient" element={<Allpatients />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default HospitalRoutes;
