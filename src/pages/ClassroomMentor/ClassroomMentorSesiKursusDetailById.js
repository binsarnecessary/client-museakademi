import React from "react";
import { Link, useParams } from "react-router-dom";
import items from "../ClassroomSiswa/Data/DataSesi";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import { FaRegFilePdf, FaRegFilePowerpoint } from "react-icons/fa";

const ClassroomSiswaSesiKursusDetailById = () => {
  const { id } = useParams();
  const item = items.find((p) => p.id === +id);
  return (
    <SidebarClassroomMentor>
      <div className="container-fluid mb-5 mt-3">
        <div className="row">
          <div key={item.id} className="col-12 mb-3">
            <h3>{item.sesi}</h3>
            <p>{item.deskripsi}</p>
            <i className="las la-calendar text-muted"></i>
            <span className="small text-muted ml-2">{item.tanggal}</span>
            <i className="las la-clock text-muted ml-5"></i>
            <span className="small text-muted ml-2">
              {item.timeStart} - {item.timeEnd}
            </span>
          </div>
          <div className="col-8 mb-5">
            <iframe
              width="560"
              height="315"
              src={item.url}
              allowfullscreen
            ></iframe>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="card mt-4">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <span>Modul Pembelajaran</span>
                </div>
                <div class="card-body">
                  <div class="row mb-2">
                    <div class="col-12 col-lg-10">
                      <FaRegFilePdf className="text-primary la-2x" />
                      <a
                        href={item.modul.pdfmodul}
                        target="_blank"
                        class="text-muted ml-2"
                      >
                        Materi PDF {item.sesi}
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-10">
                      <FaRegFilePowerpoint className="text-primary la-2x" />
                      <a
                        href={item.modul.pptmodul}
                        target="_blank"
                        class="text-muted ml-2"
                      >
                        Materi PPT {item.sesi}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card mt-3">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <span>Live Classes</span>
                    </div>
                    <div className="card-body">
                      <div className="row  no-gutters align-items-center">
                        <div className="col-md-2 pl-2">
                          <img
                            src={item.image}
                            className="card-img"
                            alt="cover"
                          ></img>
                        </div>
                        <div className="col-md-10">
                          <div className="card-body row">
                            <div className="col-12 col-lg-6">
                              <h6 className="card-title">
                                <span>Live Clasess {item.sesi}</span>
                              </h6>
                              <div className="d-flex align-items-left mb-2">
                                <span className="mx-2 small">
                                  {item.tanggal}
                                </span>
                                <span className="mx-2 small">
                                  {item.timeStart} - {item.timeEnd}
                                </span>
                              </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column flex-sm-row flex align-items-center justify-content-end">
                              <Link
                                to={`/mentor/classroom/sesi-kursus/sesi-kursus-id/${item.id}/${item.id}`}
                                className="btn btn-primary btn-sm block-in-mobile mx-sm-1 mb-2 mb-sm-0"
                              >
                                Masuk
                              </Link>
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

export default ClassroomSiswaSesiKursusDetailById;
