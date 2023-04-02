import React from "react";
import SidebarClassroomSiswa from "./SidebarClassroomSiswa";
import CardSiswaPengenalan from "./CardSiswaPengenalan";
import { default as DataSesi } from "./Data/DataSesi";

const ClassroomSiswaPengenalan = () => {
  console.log(DataSesi)
  return (
    
      <SidebarClassroomSiswa>
        <div class="container-fluid mb-5 mt-3">
        {DataSesi.map((item) => (
          <div key={item.id} class="row">
            <div class="col-12 mb-3">
            
              <h3>{item.sesi}</h3>
              <p>{item.deskripsi}</p>
              <i className="las la-calendar text-muted"></i>
              <span className="small text-muted ml-2">{item.tanggal}</span>
              <i className="las la-clock text-muted ml-5"></i>
              <span className="small text-muted ml-2">{item.timeStart} - {item.timeEnd}</span>
              
            </div>
            <div class="col-12 mb-5">
              <CardSiswaPengenalan />
            </div>  
          </div>
          ))}
        </div>
      </SidebarClassroomSiswa>
   
  );
};

export default ClassroomSiswaPengenalan;
