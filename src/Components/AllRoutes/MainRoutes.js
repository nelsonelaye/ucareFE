import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Platform/Header/Header";
import OTP from "../Platform/OTP/OTP";
import CheckOut from "../Platform/CheckOut/CheckOut";
import Private from "../ReduxState/Private";
import SignUp from "../Platform/SignUp/SignUp";
import SignIn from "../Platform/SignIn/SignIn";
import DoctorSignIn from "../Platform/DoctorAuth/SignIn";
import DoctorSignUp from "../Platform/DoctorAuth/SignUp";
import PatientOverview from "../Dashboards/PatientDashboard/PatientOverview";
import PatientSignUp from "../Platform/PatientAuth/SignUp";
import PatientSignIn from "../Platform/PatientAuth/SignIn";
import AdminSignIn from "../Platform/AdminAuth/SignIn";
import MultiUser from "../Platform/Toggle/Toggle";
import HospitalDetail from "../Platform/HospitalDetailed/Home";
import HospitalList from "../Platform/HospitalList/HospitalList";
import Allpatients from "../Dashboards/DoctorDashboard/AllPatients";
import CreateAppointment from "../Dashboards/PatientDashboard/CreateAppointment";
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
function MainRoutes() {
  const user = useSelector((state) => state.user);
  const { hospitalId } = useParams();
  return (
    <>
      {!user ? (
        <>
          {hospitalId ? null : <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor-overview" element={<DocOverview />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/hospital/:hospitalId/doctor"
              element={<DoctorSignIn />}
            />
            <Route
              path="/hospital/:hospitalId/doctor/signup"
              element={<DoctorSignUp />}
            />

            <Route path="/hospital/:hospitalId/admin" element={<SignIn />} />
            <Route path="/create" element={<CreateProfile />} />
            <Route path="/appoint" element={<CreateAppointment />} />
            <Route path="/otp" element={<OTP />} />
            <Route
              path="/api/hospital/:hospitalId/:token/otp"
              element={<OTP />}
            />
            <Route
              path="/api/hospital/:hospitalId/doctor/:doctorId/:token"
              element={<DoctorSignIn />}
            />
            <Route path="/doc" element={<Specialist />} />
            <Route
              path="/hospital/:hospitalId/detail"
              element={<HospitalDetail />}
            />
            <Route path="/hospital/:hospitalId/auth" element={<MultiUser />} />

            <Route path="/all-hospitals" element={<HospitalList />} />

            <Route
              path="/api/hospital/:hospitalId/patient/:patientId/:token"
              element={<PatientSignIn />}
            />
            <Route
              path="/hospital/:hospitalId/patient"
              element={<PatientSignIn />}
            />
            <Route
              path="/hospital/:hospitalId/patient/signup"
              element={<PatientSignUp />}
            />

            <Route path="/patient-overview" element={<PatientOverview />} />
          </Routes>
        </>
      ) : null}
    </>
  );
}

export default MainRoutes;
