import React, { useState, useEffect } from "react";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { BsCalendar3 } from "react-icons/bs";
import items from "./Data/DataKursus"
import { useParams } from "react-router-dom";
import axios from "axios";

const CardSiswaJadwalSesi = () => {
  
  const { itemId } = useParams();
  const [session, setSession] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentSessionRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/session/course/${itemId}`
        );

        const currentSessionResponse = currentSessionRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentSessionResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setSession(currentSessionResponse.data.session);
        }
      } catch (err) {
        setSession(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div  className="row">
      <div className="col-12 col-lg-12">
    <div className="card mt-3">
      <div className="card-header card-header d-flex align-items-center justify-content-between">
        <span>Sesi Kursus</span>
      </div>
      <div className="card-body">
        <div className="table table-responsive">
          <tbody height="100px">
          {session.map(session=> (
            <tr className="align-item-center justify-content-between">
              <td className="text-primary la-2x"><BsCalendar3/></td>
              <td width={"100%"}>
               Sesi {session.nameSession} 
              </td>
            </tr>
          ))}
          </tbody>
        </div>
        <div className="row justify-content-center">
          <div className="col-12"></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CardSiswaJadwalSesi;
