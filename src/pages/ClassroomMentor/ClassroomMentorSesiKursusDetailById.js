import React from 'react'
import { Link, useParams } from "react-router-dom";
import data from "../ClassroomSiswa/Data/DataKursus";
import SidebarClassroomMentor from './SidebarClassroomMentor';
import { FaRegFilePdf, FaRegFilePowerpoint } from 'react-icons/fa';

const ClassroomSiswaSesiKursusDetailById = () => {
    const { kursus, id } = useParams();
    const p = data.find(l => l.kursus === kursus);
    const sesi = p.sesiKursus.find(sesi => sesi.id === +id);
  return (
    <SidebarClassroomMentor>
        <div key={sesi.id} className='container-fluid mb-5 mt-3'>
            <div className='row'>      
                <div className='col-12 mb-3'>
                    <h3>{sesi.nameSesi}</h3>
                    <p>{sesi.deskripsi}</p>
                    <i className="las la-calendar text-muted"></i>
                    <span className="small text-muted ml-2">{sesi.tanggalSesi}</span>
                    <i className="las la-clock text-muted ml-5"></i>
                    <span className="small text-muted ml-2">{p.timeStart} - {p.timeEnd}</span>
                </div>
                <div className='col-8 mb-5'>
                    <iframe width='560' height='315' src={sesi.url.urlvideo}
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
                                    <a href={sesi.url.pdfmodul} target="_blank" class="text-muted ml-2">Materi PDF {sesi.nameSesi}</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-10">
                                    <FaRegFilePowerpoint className='text-primary la-2x'/>
                                    <a href={sesi.url.pptmodul} target="_blank" class="text-muted ml-2">Materi PPT {sesi.nameSesi}</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='row'>
                    <div className='col-12'>
                        <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span>Live Classes</span>
                            </div>
                            <div className='card-body'>
                                <div className='row  no-gutters align-items-center'>
                                    <div className='col-md-2 pl-2'>
                                        <img src={sesi.image} className='card-img' alt='cover'></img>
                                    </div>
                                    <div className='col-md-10'>
                                        <div className='card-body row'>
                                            <div className='col-12 col-lg-6'>
                                                <h6 className='card-title'>
                                                    <span>Live Clasess {sesi.nameSesi}</span>
                                                </h6>
                                                <div className='d-flex align-items-left mb-2'>
                                                    <span className='mx-2 small'>{sesi.tanggalSesi}</span>
                                                    <span className='mx-2 small'>{p.timeStart} - {p.timeEnd}</span>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 d-flex flex-column flex-sm-row flex align-items-center justify-content-end'>
                                                <Link to={`/mentor/classroom/sesi-kursus/${p.kursus}/${sesi.id}/${sesi.id}`} className='btn btn-primary btn-sm block-in-mobile mx-sm-1 mb-2 mb-sm-0'>Masuk</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </div>  
            </div>
        </div>
    </SidebarClassroomMentor>
  );
};

export default ClassroomSiswaSesiKursusDetailById