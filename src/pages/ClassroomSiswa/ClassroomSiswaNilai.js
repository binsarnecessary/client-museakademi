import React, { useState, useEffect } from "react";
import data from './Data/DataKursus'
import musebg from '../../assets/image/muselogo.png'
import SidebarClassroomSiswa from './SidebarClassroomSiswa'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/authSlice";

const ClassroomSiswaNilai = () => {
  const [userId,setUserId] = useState(0)


const { itemId } = useParams();
const { tugasId } = useParams();
const [nilai, setNilai] = useState([]);
const [nilai2, setNilai2] = useState([]);
const [nilaiData, setNilaiData] = useState([]);


// user yg login

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [isLoggedin, setIsLoggedIn] = useState(false);
 const [user, setUser] = useState({});
 const [idData, setIdData] = useState([]);
const [tugas, setTugas] = useState([])



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
         userData(currentUserResponse.data.user.id)
       } else {
         setIsLoggedIn(false);
       }
     } catch (err) {
       setIsLoggedIn(false);
     }
   };
   

useEffect(() => {

   fetchData();
 }, []);

 const userData = async (user) => {
  try {
    //Check Valid Token From API
    const currentNilaiRequest = await axios.get(
      `https://server-museakademi-production.up.railway.app/api/nilai/user/${user}`
    );
    const currentNilaiResponse = currentNilaiRequest.data;
   
    // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
if (currentNilaiResponse.status){
   
     
      // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
      // set to redux
      // console.log(currentCourseResponse.data.course)

  
      
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

  
  const nilaiByTugas = async (tugasId) => {
    try {
      //Check Valid Token From API
      const nilaiByTugasReq = await axios.get(
        `https://server-museakademi-production.up.railway.app/api/nilai/tugas/${tugasId}`
      );
      console.log(tugasId)
      const nilaiByTugasRes = nilaiByTugasReq.data;
      // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

      if (nilaiByTugasRes.status) {
        // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
        // set to redux
        // console.log(currentCourseResponse.data.course)

   
        setNilai2(nilaiByTugasRes.data.nilai);
        console.log(nilaiByTugasRes.data)

      }
    } catch (err) {
      setNilai2(false);
    }
  };

  useEffect(() =>{

  })



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

const [data, setData] = useState(mergedData);

  return (
    <SidebarClassroomSiswa>
    <div className='container-fluid mt-2'>
        <div className='row'>  
            <div className='col-12 mb-2'>
                <h4>Nilai Tugas & Evaluasi</h4>
            </div>
        </div>
        <div className='row mt-lg-3'>
            <div className='col-12 col-lg-12 order-lg-1'>
                <div className='card mb-3'>
                    <div className='card-header d-flex justify-content-between'>
                        <span><b>Tugas & Evaluasi</b></span>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 col-lg-12'>
                                <div className='table custom-table mb-2'>
                                    <thead className='thead-light'>
                                        <tr>
                                            <th width="90%" clasName="text-center">Judul</th>
                                            <th width="20%">Nilai</th>
                                        </tr>
                                  
                                    </thead>  
                                    <tbody  style={{fontSize: '15px'}}>
                                   {test.map(n=>(
                                  
                                      <tr key={n.id}>
                                        <td>{n.data1}</td>
                                        <td>{n.data2}</td>
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
    </SidebarClassroomSiswa>
  )};



export default ClassroomSiswaNilai;