import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SidebarClassroomSiswa from './SidebarClassroomSiswa';
import items from "./Data/DataKursus";
import axios from "axios";


const ClassroomSiswaSesiKursus = () => {

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
    <SidebarClassroomSiswa>
    <div className='container-fluid'>
        <div className='row'>   
            <div  className='col-12 col-lg-12'>
                <h4>Sesi Kursus</h4> 
                <div className='card mt-3 mb-5'>
                    <div className='card-header d-flex align-items-center justify-content-between'>
                        <span className="text-white"><b>Sesi Kursus</b></span>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='table table-responsive mb-2'>
                              <thead className='thead-light'>
                                <tr>
                                  <th width="100%" className='text-left'>Judul Sesi</th>
                                  <th  className='text-center'>Opsi</th>
                                </tr>
                              </thead>
                              
                              <tbody>
                                {session.map(session => (
                                <tr key={session.id}>
                                  <td className='justify-content-center'>{session.nameSession}</td>
                                  <td><Link to={`/classroom/user/sesi-kursus/${session.course_id}/${session.id}`} className='btn btn-success'>Masuk</Link></td>
                                </tr>
                                ))}
                              </tbody>
                             
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                
            </div> 
            
        </div>
    </div>
    </SidebarClassroomSiswa>
  );
};

export default ClassroomSiswaSesiKursus