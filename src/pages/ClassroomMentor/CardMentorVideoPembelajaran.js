import React from "react";
import { Link } from "react-router-dom";
import { DataVideoPembelajaran } from "../ClassroomSiswa/Data/DataVideoPembelajaran";

const CardMentorVideoPembelajaran = () => {
  console.log(DataVideoPembelajaran)
  return (
    <>
    <div>
    {DataVideoPembelajaran.map((item) => (
    <div class="card mt-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <span>{item.judul}</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-10">
            <card class="">{item.link}</card>
          </div>
          <div class="col-12 col-lg-2 d-none d-sm-block">
            <Link class="btn btn-primary btn-sm float-left text-color-primary">
              Open
            </Link>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </>
  );
};

export default CardMentorVideoPembelajaran;
