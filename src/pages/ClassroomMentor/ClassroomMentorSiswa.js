import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import items from "../ClassroomSiswa/Data/DataKursus";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import axios from "axios";

const ClassroomMentorSiswa = () => {
const [search, setSearch] = useState('')

const { itemId } = useParams();
const [user, setUser] = useState([]);
const [course, setCourse] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentUserRequest = await axios.get(
          "https://server-museakademi-production.up.railway.app/api/users/role/user"
        );

        const currentUserResponse = currentUserRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentUserResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setUser(currentUserResponse.data.user);
        }
      } catch (err) {
        setUser(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/${itemId}`
        );

        const currentCourseResponse = currentCourseRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentCourseResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setCourse(currentCourseResponse.data.course);
        }
      } catch (err) {
        setCourse(false);
      }
    };

    fetchData();
  }, []);

console.log(user)

  return (
    <>
      <SidebarClassroomMentor>
        <div  className="container-fluid mt-3">
          <div className="row">
            <h4>Siswa</h4>
            <div className="col-12 mb-5 mt-3">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span className="text-muted">Daftar Siswa</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <form action="">
                        <div class="row no-gutters">
                          <div class="col-12 col-lg-6 pr-4">
                            <div class="form-group">
                              <div class="input-group">
                                <input
                                  class="form-control"
                                  onChange={(e) => setSearch(e.target.value)}
                                  type="search"
                                  aria-label="search-input"
                                  placeholder="Pencarian"
                                ></input>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </form>
                    </div>

                    <div className="card col-12">
                      <div className="card-header">
                        <div className="table table-responsive">
                          <thead className="thead-light">
                            <tr className="small text-muted">
                              <th width="35%">Nama Siswa</th>
                              <th width="30%">Telepon</th>
                          
                              <th width="10%">Opsi</th>
                            </tr>
                          </thead>
                          
                          <tbody height="">
                           {user.filter((users) => {
                              return search.toLowerCase() === '' ? users : users.name.toLowerCase().includes(search);
                            }).map((users) => ( 
                           
                            <tr key={users.id}>
                              <td>{users.name}</td>
                              <td>{users.phone}</td>
                            
                              <td>
                                 <Link
                                  to={`/mentor/classroom/siswa-mentor/${course.id}/${users.id}`}
                                  class="small badge badge-pill badge-primary"
                                >
                                  Nilai
                                </Link>
                              </td>
                            </tr>
                           ))}
                          </tbody>
                           
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
    </>
  );
};

export default ClassroomMentorSiswa;
