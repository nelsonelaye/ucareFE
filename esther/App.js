import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminPatient from "./AdminDash/PatientAdmin";
import AdminView from "./AdminDash/AdminView";
import AllAppoint from "./AdminDash/AllAppointment";
import AllSpecialist from "./AdminDash/AllSpecialist";
import Allpatients from "./DoctorDash/AllPatients";
import Appointment from "./PatientDashboard/Appointment";
import ConfirmAppoint from "./DoctorDash/ConfirmAppoint";
import CreateProfile from "./PatientDashboard/CreateProfile";
import DocCreate from "./DoctorDash/DocCreate";
import DocOverview from "./DoctorDash/DocOverview";
import Graph from "./AdminDash/Graph";
import HospitalDetail from "./HospitalDetailed.js/Home";
import Let from "./AdminDash/Tablepatient";
import Overview from "./PatientDashboard/ParientOverview";
import SignUp from "./SignUp/Sign";
// import Shecodes from "./Shecodes/Home"
import Specialist from "./PatientDashboard/Specialist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/appoint" element={<Appointment />} />
        <Route path="/doc" element={<Specialist />} />
        <Route path="/admindoc" element={<AllSpecialist />} />
        <Route path="/Dcreate" element={<DocCreate />} />
        <Route path="/allpatient" element={<Allpatients />} />
        <Route path="/confirm" element={<ConfirmAppoint />} />
        <Route path="/detail" element={<HospitalDetail />} />
        <Route path="/Docview" element={<DocOverview />} />
        <Route path="/Docview" element={<DocOverview />} />
        <Route path="/adminview" element={<AdminView />} />
        <Route path="/checks" element={<Graph />} />
        <Route path="/adminpatient" element={<AdminPatient />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/allappoint" element={<AllAppoint />} />
        {/* <Route path="/let" element={<Let/>} /> */}
        {/* <Route path="/shecodes" element={<Shecodes/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
