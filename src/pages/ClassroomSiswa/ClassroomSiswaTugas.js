import React from "react";
import CardSiswaTugas from "./CardSiswaTugas";
import SidebarClassroomSiswa from "./SidebarClassroomSiswa";

const ClassroomSiswaTugas = () => {
  let t = 3;
  return (
    <>
      <SidebarClassroomSiswa>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12 mb-3">
              <h3>Tugas & Evaluasi</h3>
            </div>
          </div>
          <CardSiswaTugas />
        </div>
      </SidebarClassroomSiswa>
    </>
  );
};

export default ClassroomSiswaTugas;
