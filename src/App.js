import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Platform/Header/Header";
// import OTP from "./Components/Platform/OTP/OTP";
// import CheckOut from "./Components/Platform/CheckOut/CheckOut";
// import SignUp from "./Components/Platform/SignUp/SignUp";
// import SignIn from "./Components/Platform/SignIn/SignIn";
// import HospitalDetail from "./Components/Platform/HospitalDetailed/Home";
// import Allpatients from "./Components/Dashboards/DoctorDashboard/AllPatients";
// import Appointment from "./Components/Dashboards/PatientDashboard/Appointment";
// import ConfirmAppoint from "./Components/Dashboards/DoctorDashboard/ConfirmAppoint";
// import CreateProfile from "./Components/Dashboards/PatientDashboard/CreateProfile";
// import DocCreate from "./Components/Dashboards/DoctorDashboard/DocCreate";
// import DocOverview from "./Components/Dashboards/DoctorDashboard/DocOverview";
// import Overview from "./Components/Dashboards/PatientDashboard/ParientOverview";
// import Specialist from "./Components/Dashboards/PatientDashboard/Specialist";
// import AdminDash from "./Components/AdminDashboard/AdminOverview";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import PatientRoutes from "./Components/AllRoutes/PatientRoutes";
import DoctorRoutes from "./Components/AllRoutes/DoctorRoutes";
import HospitalRoutes from "./Components/AllRoutes/HospitalRoutes";
import Private from "./Components/ReduxState/Private";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <MainRoutes />
      <PatientRoutes />
      <DoctorRoutes />
      <HospitalRoutes />
    </BrowserRouter>
  );
}

export default App;
