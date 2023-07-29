import React, {useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import  data  from "../ClassroomSiswa/Data/DataKursus";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";
import { format } from 'date-fns';
import id from 'date-fns/locale/id';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/slices/authSlice";

const ClassroomMentorTugas = () => {

  const { itemId } = useParams();
  const [tugas, setTugas] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentTugasRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/tugas/course/${itemId}`
        );

        const currentTugasResponse = currentTugasRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentTugasResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setTugas(currentTugasResponse.data.tugas);
        }
      } catch (err) {
        setTugas(false);
      }
    };

    fetchData();
  }, []);

  // data course yg diakses

  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/${itemId}`
        );

        const currentCourseResponse = currentCourseRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
console.log(currentCourseResponse)
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
  
 // user yg login

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [isLoggedin, setIsLoggedIn] = useState(false);
 const [user, setUser] = useState({});

 useEffect(() => {
   const fetchData = async () => {
     try {
       //Get Token From Local Storage
       const token = localStorage.getItem("token_key");

       if (!token) {
         setIsLoggedIn(false);
         return;
       }

       //Check Valid Token From API
       const currentUserRequest = await axios.get(
         "https://server-museakademi-production.up.railway.app/auth/me",
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );

       const currentUserResponse = currentUserRequest.data;

       if (currentUserResponse.status) {
         // set to redux
         dispatch(
           addUser({
             user: currentUserResponse.data.user,
             token: token,
           })
         );

         setUser(currentUserResponse.data.user);
         setIsLoggedIn(true);
       } else {
         setIsLoggedIn(false);
       }
     } catch (err) {
       setIsLoggedIn(false);
     }
   };

   fetchData();
 }, []);

  // POST TUGAS

const user_id = useRef("")
const course_id = useRef("")
const linkTugas = useRef("");
const judulTugas = useRef("");
const petunjukPengerjaan = useRef("");
const tugasStart = useRef("");
const tugasEnd = useRef("");

const [errorResponse, setErrorResponse] = useState({
  isError: false,
  message: "",
});

const addTugasMentor = async (e) => {
  e.preventDefault();

  try {
    const postTugas = new FormData();

    postTugas.append("user_id", user_id.current.value);
    postTugas.append("course_id", course_id.current.value);
    postTugas.append("linkTugas", linkTugas.current.value);
    postTugas.append("judulTugas", judulTugas.current.value);
    postTugas.append("petunjukPengerjaan", petunjukPengerjaan.current.value);
    postTugas.append("tugasStart", tugasStart.current.value);
    postTugas.append("tugasEnd", tugasEnd.current.value);

    const postTugasRequest = await axios.post(
      "https://server-museakademi-production.up.railway.app/api/tugas",
      postTugas,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const postTugasResponse = postTugasRequest.data;

    if(postTugasResponse.status) {
       Swal.fire({
          title: 'Sukses!',
          text: 'Anda berhasil menambahkan tugas',
          icon: 'success',
          confirmButtonText: 'OK',
          willClose(popup) {
            window.location.reload()
          }
        })
    }
  } catch (err) {
    console.log(err);
    const response = err.response.data;

    setErrorResponse({
      isError: true,
      message: response.message,
    });

    Swal.fire({
      title: 'Gagal!',
      text: "Periksa Kembali Data Isian Anda",
      icon: 'error',
      confirmButtonText: 'OK'
    });

  }
};

// DELETE TUGAS

const handleDelete = (itemId) => {
  // Replace 'your-api-url' with the actual endpoint URL for deleting the data.
  const apiUrl = `https://server-museakademi-production.up.railway.app/api/tugas/${itemId}`;
  
  axios.delete(apiUrl)
    .then(response => {
      Swal.fire({
        title: 'Berhasil!',
        text: "Berhasil Menghapus Tugas",
        icon: 'success',
        confirmButtonText: 'OK',
        willClose(popup) {
          window.location.reload()
        }
      });
      window.location.reload()
      // Perform any additional actions after successful deletion.
    })
    .catch(error => {
      Swal.fire({
        title: 'Gagal!',
        text: "Gagal Menghapus Tugas",
        icon: "error",
        confirmButtonText: 'OK'
      });
    });
};



  return (
   
      <SidebarClassroomMentor>
        <div className="container-fluid">
          <div className="row mt-lg-3">
            <div  className="col-12 mb-5">
              <h4 className="mb-3">Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span>Buat Tugas & Evaluasi</span>
                </div>
                <form onSubmit={addTugasMentor}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Course id</label>
                      <input type="text" className="form-control" name="course" ref={course_id}  value={course.id}></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">User id</label>
                      <input type="text" className="form-control" name="mentor" ref={user_id}  value={user.id}></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Link</label>
                      <input type="text" className="form-control" name="linkTugas" ref={linkTugas}></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Judul</label>
                      <input type="text" className="form-control" name="judulTugas" ref={judulTugas}></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Petunjuk Pengerjaan</label>
                      <input type="text" className="form-control" name="petunjukPengerjaan" ref={petunjukPengerjaan}></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-muted">Lama Pengerjaan</label>
                      <input type="datetime-local" className="form-control mb-2" name="tugasStart" ref={tugasStart}></input>

                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-white"> - </label>
                      <input type="datetime-local" className="form-control mb-2" name="tugasEnd" ref={tugasEnd}></input>

                    </div>
                    <div class="col-12 d-none d-sm-block">
                      <button type="submit" class="btn btn-success btn-sm float-left text-color-primary">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>

            <div className="col-12">
              <h4 className="mb-3">Riwayat Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-body">
                  <div className="table table-responsive">
                    <thead className="thead-light">
                      <tr className="small text-muted">
                        <th width="5%">id</th>
                        <th width="20%">Judul</th>
                        <th width="40%">Petunjuk Pengerjaan</th>
                        <th width="20%">Mulai</th>
                        <th width="20%">Selesai</th>
                        <th width="10%">Delete</th>
                      </tr>
                    </thead>
                    <tbody height="150px">
                      {tugas.map(tugas=>(
                        <tr key={tugas.id}>
                        <td>{tugas.id}</td>
                        <td>{tugas.judulTugas}</td>
                        <td>{tugas.petunjukPengerjaan}</td>
                        <td>{format(new Date(tugas.tugasStart), 'dd MMMM yyyy HH:mm', { locale: id })}</td>
                        <td>{format(new Date(tugas.tugasEnd), 'dd MMMM yyyy HH:mm', { locale: id })}</td>
                  
                        <td>
                        <button onClick={() => handleDelete(tugas.id)} className='btn btn-danger'><FaTrash/></button>
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
      </SidebarClassroomMentor>
 
  );
                      
};

export default ClassroomMentorTugas;
