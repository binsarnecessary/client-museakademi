import React from "react";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorClass = () => {
  return (
    <>
      <SidebarClassroomMentor>
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
              <div class="card mt-4">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <span>Video Pembelajaran 1</span>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-lg-10">
                      <card class="">
                        https://www.youtube.com/watch?v=R1GEe0TEe_k
                      </card>
                    </div>
                    <div class="col-12 col-lg-2 d-none d-sm-block">
                      <a class="btn btn-primary btn-sm float-left text-color-primary">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-4">
                <div class="card-header d-flex align-items-center justify-content-between">
                  <span>Video Pembelajaran 2</span>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-lg-10">
                      <card class="">
                        https://www.youtube.com/watch?v=R1GEe0TEe_k
                      </card>
                    </div>
                    <div class="col-12 col-lg-2 d-none d-sm-block">
                      <a class="btn btn-primary btn-sm float-left text-color-primary">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorClass;
