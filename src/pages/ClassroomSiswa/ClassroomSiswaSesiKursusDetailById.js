import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import SidebarClassroomSiswa from './SidebarClassroomSiswa'
import data from "./Data/DataKursus";
import { FaRegFilePdf, FaRegFilePowerpoint, FaVideoSlash } from 'react-icons/fa';
import axios from "axios";
import { BsPersonVideo2, BsPersonVideo3 } from 'react-icons/bs';
const ClassroomSiswaSesiKursusDetailById = () => {

    const { sesiId } = useParams();
    const [session, setSession] = useState([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          //Check Valid Token From API
          const currentSessionRequest = await axios.get(
            `https://server-museakademi-production.up.railway.app/api/session/${sesiId}`
          );
  
          const currentSessionResponse = currentSessionRequest.data;
          // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
            console.log(currentSessionResponse)
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

    const {
       id,
       nameSession,
        course_id,
        linkvideo,
        linkzoom,
        linkpdf,
        linkppt,
    } = session;

  return (
    <SidebarClassroomSiswa>
        <div key={id}  className='container-fluid mb-5 mt-3'>

            <div className='row'>  
            
                <div className='col-12 mb-3'>
                   
                    <h3>{nameSession}</h3>
                    <p>Ikuti setiap sesi dalam kursus dan dapatkan materi-materi seputar kursus berupa video, modul pdf, modul ppt dan juga pembelajaran secara langsung melalui live streaming. Pantau terus untuk mendapatkan perkembangan terbaru yaa :v</p>
                </div>
                <div className='col-8 mb-5'>
                    <iframe width='560' height='315' src={linkvideo}
                        allowfullscreen>
                        </iframe>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div class="card mt-4">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <span>Modul Pembelajaran</span>
                            </div>
                            <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-12 col-lg-10">
                                    <FaRegFilePdf className='text-primary la-2x'/>
                                    <a href={linkpdf} target="_blank" class="text-muted ml-2">Materi PDF {nameSession}</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-10">
                                    <FaRegFilePowerpoint className='text-primary la-2x'/>
                                    <a href={linkppt} target="_blank" className="text-muted ml-2">Materi PPT {nameSession}</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='row'>
                    <div className='col-12'>
                    <div class="card mt-4">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <span>Live Class</span>
                            </div>
                            <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-12 col-lg-10">
                                    <BsPersonVideo2 className='text-primary la-2x'/>
                                    <span href="" target="_blank" class="text-muted ml-2">Live Class {nameSession}</span>
                                </div>
                                <div className='col-12 col-lg-2 d-flex flex-column flex-sm-row flex align-items-center justify-content-end'>
                                    <a href={linkzoom} target="_blank" className='btn btn-primary btn-sm block-in-mobile mx-sm-1 mb-2 mb-sm-0'>Open</a>
                                </div>
                            </div>
                        </div> 
                        {/* <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span>Live Classes</span>
                            </div>
                            <div className='card-body'>
                                <div className='row  no-gutters align-items-center'>
                                        <div className='card-body'>
                                            <div className='row'>
                                            <div className='col-12 col-lg-10'>
                                                <p>
                                                <BsPersonVideo3 className='text-primary la-3x'/><span></span>
                                                    <span> Live Clasess {linkpdf}</span>
                                                </p>
                                            </div>
                                            <div className='col-12 col-lg-2 d-flex flex-column flex-sm-row flex align-items-center justify-content-end'>
                                            <a href={linkzoom} target="_blank" className='btn btn-primary btn-sm block-in-mobile mx-sm-1 mb-2 mb-sm-0'>Open</a>
                                            </div>
                                            </div>
                                        </div>
                                   
                                </div>
                            </div> */}
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

export default ClassroomSiswaSesiKursusDetailById