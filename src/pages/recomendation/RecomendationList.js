import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

export default function RecomendationList() {
/*     const filteredProducts = productData.filter(productData => productData.rekomendasi === rekomendasi); */
const [course, setCourse] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course`
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

  const {
    id,
    course_id,
    isCoursePaid,
    courseTitle,
    courseDescription,
    courseStartDate,
    courseEndDate,
    coursePrice,
    courseStatus,
    courseTimeStart,
    courseTimeEnd,
    coursePhoto,
    courseCategory,
    courseRating,
    courseDeadline,
    namaMentor,
    sesi1,
    link1,
    sesi2,
    link2,
    sesi3,
    link3,
    sesi4,
    link4,
    sesi5,
    link5,
    sesi6,
    link6,
    sesi7,
    link7,
    sesi8,
    link8,
  } = course;
  
return (
    <>
     <section id="section-courses" class="mt-4 mb-4">
                <div class="container">
                    <div class="row">

                        <div class="mb-3 col-12">
                            <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                                {course.map((item) => (
                                    <div  class="mb-3 col-8 col-md-6 col-lg-3">
                                        <div class="card h-100 position-relative" data-toggle="tooltip" data-placement="top" title="Seni Budaya dan Keterampilan - Seni Rupa 2 Dimensi">
                                            <img class="card-img-top" src={item.coursePhoto} alt="cover"></img>
                                            <div class="card-body p-3 d-flex flex-column justify-content-between">
                                                <h6 class="d-flex align-items-center">
                                                    <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                                                    <span>
                                                        {item.courseTitle}
                                                    </span>
                                                </h6>
                                                <div class="text-muted small">
                                                    {item.courseStartDate}
                                                </div>
                                                <h6>
                                                    <span class="text-truncate">
                                                        {item.coursePrice}
                                                    </span>
                                                </h6>
                                                <h6><Link href='#' class="btn btn-danger btn-sm btn-block text-center">Ikuti Kursus</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </>
  )
}
