import React, {useRef, useState, useEffect } from "react";
import { FaEdit, FaPenSquare, FaTrash } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import {default as items} from '../ClassroomSiswa/Data/DataSiswa'
import SidebarClassroomMentor from './SidebarClassroomMentor'
import Data from '../ClassroomSiswa/Data/DataKursus'
import axios from "axios";
import Swal from "sweetalert2";


const ClassroomMentorInputNilai = () => {

/*     const { id } = useParams();
    const [siswa, setSiswa] = useState([]);
    const [tugas, setTugas] = useState([]);
    const [nilai, setNilai] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          //Check Valid Token From API
          const currentSiswaRequest = await axios.get(
            `https://server-museakademi-production.up.railway.app/api/users/${id}`
          );
          const currentTugasRequest = await axios.get(
            `https://server-museakademi-production.up.railway.app/api/tugas`
          );
          const currentNilaiRequest = await axios.get(
            `https://server-museakademi-production.up.railway.app/api/nilai`
          );
  
          const currentSiswaResponse = currentSiswaRequest.data.user;
          const currentTugasResponse = currentTugasRequest.data.data.tugas;
          const currentNilaiResponse = currentNilaiRequest.data.data.nilai;
          setSiswa(currentSiswaResponse)
          setTugas(currentTugasResponse)
          setNilai(currentNilaiResponse)

        }catch (err){
            console.log(err);
        }
      };
  
      fetchData();
    }, []); */

/*     const test = tugas.map(res => {
        const findSimilarData = nilai.find(
            each=> res.id === each.tugas_id
        )
        return {id:res.id, data1: res.judulTugas, data2: findSimilarData?.skorNilai}
    })
 */
    const { itemId } = useParams();
    const siswaId  = useParams();
    const [siswa, setSiswa] = useState([]);
    const [nilai, setNilai] = useState([]);
    const [tugas, setTugas] = useState([])
    const currentPath = window.location.pathname
        const lastPath = currentPath.split('/').filter((segment)=>segment !=='').pop()
   

      const fetchData = async () => {
        
        console.log(lastPath)
        try {
          //Check Valid Token From API
          const currentSiswaRequest = await axios.get(
            `https://server-museakademi-production.up.railway.app/api/users/${lastPath}`
          );
  
          const currentSiswaResponse = currentSiswaRequest.data;
          // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
            console.log(currentSiswaResponse)
          if (currentSiswaResponse.status) {
            // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
            // set to redux
            // console.log(currentCourseResponse.data.course)
            console.log(currentSiswaResponse.data.user.name)
            setSiswa(currentSiswaResponse.data.user);
            userData(currentSiswaResponse.data.user.id)
          }
        } catch (err) {
          setSiswa(false);
        }
      };
  
    useEffect(() => {
      fetchData();
    }, []);

    // const { itemId } = useParams();
    // const { sesiId } = useParams();
    // const [nilai, setNilai] = useState([]);
    // const [tugas, setTugas] = useState([]);
   
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       //Check Valid Token From API
    //       const nilaiRequest = await axios.get(
    //         `https://server-museakademi-production.up.railway.app/api/nilai/user/${itemId}`
    //       );
    //       const tugasRequest = await axios.get(`https://server-museakademi-production.up.railway.app/api/tugas/course/${itemId}`);
  
    //       const tugasResponse = tugasRequest.data.data.tugas;
    //         const nilaiResponse = nilaiRequest.data.data.nilai;
    //         setTugas(tugasResponse)
    //         setNilai(nilaiResponse)
    //     } catch (err) {
    //       setTugas(false);
    //     }
    //   };
  
    //   fetchData();
    // }, []);

    // const test = tugas.map(res=> {
    //   const findSimilarData = nilai.find(
        
    //       each=> res.id === each.tugas_id
          
    //   )
     
    //   return {id:res.id,data1: res.judulTugas, data2: findSimilarData?.skorNilai}
     
    // })

    const userData = async (siswa) => {
      try {
        //Check Valid Token From API
        const currentNilaiRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/nilai/user/${siswa}`
        );
  
        const currentNilaiResponse = currentNilaiRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
  
        if (currentNilaiResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)
  
          console.log(currentNilaiResponse)
          
          setNilai(currentNilaiResponse.data.nilai);
        }
      } catch (err) {
        setNilai(false);
      }
    };



    const tugasByCourse = async () => {
      try {
        //Check Valid Token From API
        const tugasByCourseReq = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/tugas/course/${itemId}`
        );
    
        const tugasByCourseRes = tugasByCourseReq.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
        if (tugasByCourseRes.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)
  
     
          // setTugas(tugasByCourseRes.data.tugas[0]);
          // for(let i=0; i<=tugasByCourseRes.data.tugas.length-1; i++){
          //   console.log("Called ",i)
          //   nilaiByTugas(tugasByCourseRes.data.tugas[i].id)
          // }
  
  
          setTugas(tugasByCourseRes.data.tugas);
          console.log(tugasByCourseRes)
        }
      } catch (err) {
        setTugas(false);
      }
    };
  
    useEffect(() => {
  
      tugasByCourse();
    }, []); 


    
  //Fungsi untuk menggabungkan data dari dua tabel
const mergeTables = (nilai, tugas) => {
  return tugas.map(item2 => {
    const item = nilai.find((item) => item.tugas_id == item2.id);
    return { ...item2, ...item };
});
};

// Menggabungkan data
const mergedData = mergeTables(nilai, tugas);
console.log(mergedData)

const test = tugas.map(res=> {
  const findSimilarData = mergedData.find(
    
      each=> res.id == each.tugas_id
  )
  console.log(findSimilarData);
  return {id:res.id,data1: res.judulTugas, data2: findSimilarData?.skorNilai}
 
}) 

// POST NILAI

const tugas_id = useRef("")
const user_id = useRef("");
const skorNilai = useRef("");


const [errorResponse, setErrorResponse] = useState({
  isError: false,
  message: "",
});

const addNilaiMentor = async (e) => {
  e.preventDefault();

  try {
    const postNilai = new FormData();

    postNilai.append("tugas_id", tugas_id.current.value);
    postNilai.append("user_id", user_id.current.value);
    postNilai.append("skorNilai", skorNilai.current.value);

    const postTugasRequest = await axios.post(
      "https://server-museakademi-production.up.railway.app/api/nilai",
      postNilai,
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
          text: 'Anda berhasil menambahkan nilai',
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

// DELETE NILAI

const handleDelete = (siswaId) => {
    // Replace 'your-api-url' with the actual endpoint URL for deleting the data.
    const apiUrl = `https://server-museakademi-production.up.railway.app/api/nilai/${siswaId}`;
    console.log("pppppppppp",siswaId)
    axios.delete(apiUrl)
      .then(response => {
        Swal.fire({
          title: 'Berhasil!',
          text: "Berhasil Menghapus Nilai",
          icon: 'success',
          confirmButtonText: 'OK',
          willClose(popup) {
            window.location.reload()
          }
        });
     
        // Perform any additional actions after successful deletion.
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        // Handle errors if necessary.
      });
  };
  return (
    <SidebarClassroomMentor>
        <div  className='container-fluid'>
            <div className='row mt-lg-3'>
                <div className='col-12 col-lg-10 mb-3'>
                    <h3>Penilaian Siswa</h3>
                </div>
                <div className="col-12 col-lg-2 d-none d-sm-block">
                    {/* <Link
                        to={`/mentor/classroom/siswa-mentor/${co.id}`}
                        className="btn btn-primary btn-block"
                    >
                        <i className="las la-reply mr-2"></i>
                        <span>Kembali</span>
                    </Link> */}
                </div>
                    <div className='col-12'>
                    <div className='card'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>{siswa.name}</b></span>
                            </div>
                            <div className='card-body'>
                                <div className='table table-responsive'>
                                    <thead className='thead-light' style={{color: "red"}}>
                                        <tr>
                                       
                                            <th width="10%"><b>Tugas id</b></th>
                                            <th width="50%"><b>Judul</b></th>
                                            <th width="20%"><b>Nilai</b></th>
                                            {/* <th width="10%">Delete</th> */}
                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {test.map(out => (
                                        <tr>
                                            <td>{out.id}</td>
                                            <td>{out.data1}</td>
                                            <td>{out.data2}</td>
                                            {/* <td>
                                                <button onClick={() => handleDelete(out.data2.id)} className='btn btn-danger'><FaTrash/></button>
                                                
                                            </td> */}
                                        </tr>
                                        ))}
                                    </tbody>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={addNilaiMentor}> 
                        <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>Input Nilai</b></span>
                            </div>
                            <div className='form card-body'>
                            <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>User id :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" name='judul' className='form-control' ref={user_id} value={siswa.id}></input>
                                </div>
                                </div>
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Tugas id :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" name='judul' className='form-control' ref={tugas_id}></input>
                                </div>
                                </div>
                                <div className='row mb-3'>
                                <div className='col-10 col-lg-2'>
                                    <span>Nilai :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" name='nilai' className='form-control' ref={skorNilai}></input>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-10 col-lg-2'>
                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            </SidebarClassroomMentor>
  )
}


export default ClassroomMentorInputNilai;