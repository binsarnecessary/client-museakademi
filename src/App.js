import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import LogoNavbar from "./assets/image/logo-navbar.png";
import Registration from "./components/common/Registration";
import Navbar from "./components/common/Navbar";
import { Error } from "./components/common/Error";
import Login from "./components/common/Login";

import Profile from "./pages/ProfileMentor/Profile";
import ChangePassword from "./pages/ProfileMentor/ChangePassword";
import DaftarMentor from "./pages/ProfileMentor/DaftarMentor";
import Profile_Pic from "./pages/ProfileMentor/Profile_Pic";
import DashboardMentor from "./pages/ProfileMentor/DashboardMentor";
import KursusMentor from "./pages/ProfileMentor/KursusMentor";

import { Home } from "./pages/Home/Home";
import { Course } from "./pages/Kursus/Course";

import { HelloDetail } from "./pages/Detail/HelloDetail";
import { Livestreaming } from "./pages/Livestreaming/Livestreaming";
import { DetailLivestream } from "./pages/Detail/DetailLivestream";
import { BukaJadwal } from "./pages/Livestreaming/BukaJadwal";

//Import Classroom Mentor and Siswa, CM For Mentor, CS For Siswa
import Dashboard_classroom from "./pages/ClassroomSiswa/Dashboard_classroom";
import CS_Sesi1 from "./pages/ClassroomSiswa/CS_Sesi1";
import CS_Tugas from "./pages/ClassroomSiswa/CS_Tugas";
import CS_Live from "./pages/ClassroomSiswa/CS_Live";
import CS_Live2 from "./pages/ClassroomSiswa/CS_Live2";
import CS_Live3 from "./pages/ClassroomSiswa/CS_Live3";
import CM_Dashboard from "./pages/ClassroomMentor/CM_Dashboard";
import CM_Sesi1 from "./pages/ClassroomMentor/CM_Sesi1";
import CM_Tugas from "./pages/ClassroomMentor/CM_Tugas";
import CM_Live from "./pages/ClassroomMentor/CM_Live";
import CM_Live3 from "./pages/ClassroomMentor/CM_Live3";
import CM_Siswa from "./pages/ClassroomMentor/CM_Siswa";
import CM_Penilaian from "./pages/ClassroomMentor/CM_Penilaian";
import CM_TugasEdit from "./pages/ClassroomMentor/CM_TugasEdit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/livestreaming" element={<Livestreaming />} />
        <Route path="/bukajadwal" element={<BukaJadwal />} />
        <Route path="/livestreaming/:itemId" element={<DetailLivestream />} />
        <Route path="/course/:itemId" element={<HelloDetail />} />
        <Route path="/Profile_Mentor" element={<Profile />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/DaftarMentor" element={<DaftarMentor />} />
        <Route path="/Profile_Pic" element={<Profile_Pic />} />
        <Route path="/DashboardMentor" element={<DashboardMentor />} />
        <Route path="/KursusMentor" element={<KursusMentor />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/dashboard_class_siswa"
          element={<Dashboard_classroom />}
        />
        <Route path="/pengenalan_siswa" element={<CS_Sesi1 />} />
        <Route path="/tugas_siswa" element={<CS_Tugas />} />
        <Route path="/live_siswa" element={<CS_Live />} />
        <Route path="/live2_siswa" element={<CS_Live2 />} />
        <Route path="/live3_siswa" element={<CS_Live3 />} />

        <Route path="/dashboard_class_mentor" element={<CM_Dashboard />} />
        <Route path="/pengenalan_mentor" element={<CM_Sesi1 />} />
        <Route path="/tugas_mentor" element={<CM_Tugas />} />
        <Route path="/live_mentor" element={<CM_Live />} />
        <Route path="/live3_mentor" element={<CM_Live3 />} />
        <Route path="/siswa_mentor" element={<CM_Siswa />}></Route>
        <Route path="/penilaian_mentor" element={<CM_Penilaian />}></Route>
        <Route path="/tugasedit_mentor" element={<CM_TugasEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
