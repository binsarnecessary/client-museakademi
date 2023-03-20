import React, { useState, useEffect } from "react";
import { ProductListFree } from "./ProductListFree";
import axios from "axios";

export const Free = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          "http://localhost:7000/api/course"
        );

        const currentCourseResponse = currentCourseRequest.data;

        if (currentCourseResponse.status) {
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
      {course.some((c) => !c.isCoursePaid) ? (
        <ProductListFree currentProducts={course} />
      ) : (
        <h5>Apapun</h5>
      )}
    </>
  );
  
};
