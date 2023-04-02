import { BsCalendar3 } from "react-icons/bs";
import {
  FaRegCalendarAlt,
  FaTachometerAlt,
  FaVideo,
  FaServer,
  FaDiceThree,
  FaReceipt,
} from "react-icons/fa";

const menuItem = [
    {
      path: "/classroom/user/",
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: "/classroom/user/sesi-kursus",
      name: "Sesi Kursus",
      icon: <BsCalendar3 />,
    },
    {
      path: "/classroom/user/tugas_siswa",
      name: "Tugas & Evaluasi",
      icon: <FaServer />,
    },
    {
      path: "/classroom/user/nilai-siswa",
      name: "Nilai",
      icon: <FaReceipt />
    }
  ];

  export default menuItem;