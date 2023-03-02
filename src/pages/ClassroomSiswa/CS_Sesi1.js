import React from "react";
import CS_CardSesi from "./CS_CardSesi";
import CS_Sidebar2 from "./CS_Sidebar2";

const CS_Sesi1 = () => {
  return (
    <>
      <CS_Sidebar2>
        <div class="container-fluid mb-5 mt-3">
          <div class="row">
            <div class="col-12 mb-3">
              <h3>Sesi 1: Pengenlan UI/UX</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <i className="las la-calendar text-muted"></i>
              <span className="small text-muted ml-2">
                Jumat, 24 Januari 2023
              </span>

              <i className="las la-clock text-muted ml-5"></i>
              <span className="small text-muted ml-2">14.00 - 16.00</span>
            </div>
            <div class="col-12 mb-5">
              <CS_CardSesi />
              <CS_CardSesi />
            </div>
          </div>
        </div>
      </CS_Sidebar2>
    </>
  );
};

export default CS_Sesi1;
