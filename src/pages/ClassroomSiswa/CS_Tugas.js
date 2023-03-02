import React from "react";
import CS_CardTugas from "./CS_CardTugas";
import CS_Sidebar2 from "./CS_Sidebar2";

const CS_Tugas = () => {
  return (
    <>
      <CS_Sidebar2>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12 mb-3">
              <h3>Tugas & Evaluasi</h3>
            </div>
          </div>
          <CS_CardTugas />
        </div>
      </CS_Sidebar2>
    </>
  );
};

export default CS_Tugas;
