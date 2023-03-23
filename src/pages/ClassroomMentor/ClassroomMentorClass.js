import React from "react";
import { DataJadwalSesi } from "../ClassroomSiswa/Data/DataJadwalSesi";
import CardMentorVideoPembelajaran from "./CardMentorVideoPembelajaran";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorClass = () => {
  return (
    <>
      <SidebarClassroomMentor>
        <div class="container-fluid mb-5 mt-3">
          {DataJadwalSesi.map((item) => (
          <div class="row">
            <div class="col-12 mb-3">
              <h3>{item.sesi}</h3>
              <p>
                {item.deskripsi}
              </p>
              <i className="las la-calendar text-muted"></i>
              <span className="small text-muted ml-2">
              {item.tanggal}
              </span>

              <i className="las la-clock text-muted ml-5"></i>
              <span className="small text-muted ml-2">{item.timeStart} - {item.timeEnd}</span>
            </div>
            <div class="col-12 mb-5">
              <CardMentorVideoPembelajaran/>
            </div>
          </div>
          ))}
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorClass;
