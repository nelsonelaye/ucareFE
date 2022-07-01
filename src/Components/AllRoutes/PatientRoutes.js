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
import PatientOverview from "../Dashboards/PatientDashboard/PatientOverview";
import CreateAppointment from "../Dashboards/PatientDashboard/CreateAppointment";
import CreateProfile from "../Dashboards/PatientDashboard/CreateProfile";
import DoctorDetail from "../Dashboards/PatientDashboard/DoctorView";
import Appointments from "../Dashboards/PatientDashboard/AllAppointments";
import DocCreate from "../Dashboards/DoctorDashboard/DocCreate";
import DocOverview from "../Dashboards/DoctorDashboard/DocOverview";
import AdminOverview from "../Dashboards/AdminDashboard/AdminOverview";
import AdminSpecialists from "../Dashboards/AdminDashboard/AllSpecialists";
import Specialist from "../Dashboards/PatientDashboard/AllSpecialists";
import AdminDash from "../Dashboards/AdminDashboard/AdminOverview";
import { useSelector } from "react-redux";
function PatientRoutes() {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.isPatient ? (
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

            <Route path="/create" element={<CreateProfile />} />
            <Route path="/create-appointment" element={<CreateAppointment />} />

            <Route path="/doc" element={<Specialist />} />
            <Route path="/history" element={<Appointments />} />
            <Route
              path="/hospital/:hospitalId/detail"
              element={<HospitalDetail />}
            />
            <Route path="/doctor/:doctorId/detail" element={<DoctorDetail />} />
            <Route path="/hospital/:hospitalId/auth" element={<MultiUser />} />

            <Route path="/detail" element={<HospitalDetail />} />
            <Route path="/patient-overview" element={<PatientOverview />} />
            <Route path="/all-hospitals" element={<HospitalList />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default PatientRoutes;
