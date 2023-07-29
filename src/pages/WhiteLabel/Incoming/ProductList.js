import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import axios from "axios";

export const ProductList = () => {
const [course, setCourse] = useState([]);
const { slug } = useParams();
const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/mitra/${slug}`
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  const currentProducts = course;


  return (
    <>
      <div>
      <section id="section-partner-courses" class="py-4">
        <div class="container">
          <div class="row">
            <div class="mb-3 col-12 d-flex align-items-center justify-content-between">
              <div class="col justify-content-sm-center justify-content-lg-start">
                <div class="section-header">
                  <h5 class="text-white section-title">Kursus Mitra</h5>
                </div>
              </div>
              <Link
                to={"/course"}
                target="_top"
                class="section-header-btn btn btn-sm btn-outline-light"
              >
                Lihat Semua
              </Link>
            </div>
            <div class="row">
              <div class="col-12 col-lg-2 mb-3 text-white">
                <div className="large mb-2 text-white">Kategori</div>
                <div className="ml-2">
                  <Form>
                    <Form.Check
                      type="radio"
                      label="Animasi"
                      name="radioOption"
                      value="option1"
                      onChange={() => handleCategorySelect("Animasi")}
                    />
                    <Form.Check
                      type="radio"
                      label="Desain"
                      name="radioOption"
                      value="option2"
                      onChange={() => handleCategorySelect("Desain")}
                    />
                    <Form.Check
                      type="radio"
                      label="User Interface"
                      name="radioOption"
                      value="option3"
                      onChange={() => handleCategorySelect("User Interface")}
                    />
                    <Form.Check
                      type="radio"
                      label="Fashion"
                      name="radioOption"
                      value="option4"
                      onChange={() => handleCategorySelect("Fashion")}
                    />
                    <Form.Check
                      type="radio"
                      label="Semua"
                      name="radioOption"
                      value="option5"
                      onChange={() => handleCategorySelect(null)}
                    />
                  </Form>
                </div>
              </div>
              <div class="mb-3 col-10">
                <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                  {currentProducts.map((currentProducts) => (
                    <div
                      key={currentProducts.id}
                      class="mb-3 col-10 col-md-6 col-lg-4"
                    >
                      <div
                        class="card h-100 position-relative"
                        data-toggle="tooltip"
                        data-placement="top"
                        title={currentProducts.courseTitle}
                      >
                        <img
                          class="card-img-top"
                          src={currentProducts.coursePhoto}
                          alt="cover"
                        ></img>
                        <div class="card-body p-3 d-flex flex-column justify-content-between">
                          <h6 class="d-flex align-items-center">
                            <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                            <span>{currentProducts.courseTitle}</span>
                          </h6>

                          <div class="text-muted small ">
                            {currentProducts.namaMentor}
                          </div>
                          <h6>
                            {currentProducts.isCoursePaid ? (
                              <span class="text-truncate">
                                {" "}
                                Rp. {currentProducts.coursePrice.toLocaleString("id-ID")}
                              </span>
                            ) : (
                              <span class="badge badge-success"> Gratis</span>
                            )}
                          </h6>
                          <h6>
                            <Link
                              to={"/course/" + currentProducts.id}
                              target="_top"
                              class="btn btn-danger btn-sm btn-block text-center"
                            >
                              Ikuti Kursus
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
