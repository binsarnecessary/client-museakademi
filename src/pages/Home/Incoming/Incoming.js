import React, { useState, useEffect } from "react";
import { ProductList } from "./ProductList";
import axios from "axios";

export const Incoming = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          "http://localhost:7000/api/course"
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
  

  return (
    <>
      {course.isCoursePaid ? (
        <ProductList currentProducts={course} />
      ) : (
        <ProductList currentProducts={course} />
      )}
    </>
  );
};
