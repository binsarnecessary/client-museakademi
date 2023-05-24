import { Card } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { MentorProfile } from "../../components/common/MentorProfile";
import Footer from "../../components/common/Footer";
import { Detail } from "../Mentor/Detail";
import RecomendationList from "../recomendation/RecomendationList";
import productData from "../Kursus/CardData";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import axios from "axios";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { Form, Container, Button, Alert } from "react-bootstrap";

export const HelloDetail = () => {
  const { itemId } = useParams();
  const [course, setCourse] = useState({});
  const [transactionURL, setTransactionURL] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token_key");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  // const detailProduct = course.find(course => course.id === parseInt(itemId));
  // const relatedProduct = course.filter(course => course.courseCategory === detailProduct.category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production-456b.up.railway.app/api/course/${itemId}`
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

  const courseid_field = useRef("");
  const courseprice_field = useRef("");

  const onPayment = async (e) => {
    e.preventDefault();
    if (!token) {
      navigate("/login");
    }
    try {
      const userToSubmitPayment = new FormData();

      userToSubmitPayment.append("course_id", courseid_field.current.value);
      userToSubmitPayment.append(
        "course_price",
        courseprice_field.current.value
      );

      const registerRequest = await axios.post(
        "https://server-museakademi-production-456b.up.railway.app/api/order",
        userToSubmitPayment
      );

      const registerResponse = registerRequest.data;
      const orderData = registerResponse.data.registered_course;

      window.location.href = `${orderData.transaction_url}`;
    } catch (err) {
      console.log(err);
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <>
      <Navbar />
      <section id="detailcourse">
        <div className="container">
          <div class="row">
            <div class="col-7 ">
              <div className="detail mt-5">
                <h4>{courseTitle}</h4>
                <div className="detailicon">
                  <div class="row justify-content-start">
                    <div class="col-3">
                      <Icon.StarFill class="ms-auto  text-warning ml-2 mr-2 " />
                      Ratings
                    </div>
                    <div class="col-3">
                      <Icon.PeopleFill class="ms-auto ml-2 mr-2" />
                      Siswa
                    </div>
                    <div class="col-4">
                      <Icon.BookmarksFill class="ms-auto  ml-2 mr-2" />
                      Kursus Panjang
                    </div>
                    <div className="col"></div>
                  </div>
                  <br />
                  <div className="price">
                    {isCoursePaid ? (
                      <h2>Rp.{coursePrice.toLocaleString("id-ID")}</h2>
                    ) : (
                      <h2>Rp. 0</h2>
                    )}
                  </div>
                  <br />
                </div>
                <hr />
                <div className="deskripsi ">
                  <h6>Deskripsi</h6>
                  <p>{courseDescription}</p>
                </div>
                <div className="cardlist">
                  <h5 className="mb-3">Jadwal Sesi Kursus</h5>
                  <div>
                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        <a
                          href={link1}
                          className="text-dark font-weight-normal"
                          target="_blank"
                        >
                          Sesi 1 : {sesi1}
                        </a>
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 2 : {sesi2}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 3 : {sesi3}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 4 : {sesi4}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 5 : {sesi5}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 6 : {sesi6}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 7 : {sesi7}
                      </Card.Body>
                    </Card>

                    <Card style={{ width: "38rem", marginBottom: "1rem" }}>
                      <Card.Body>
                        <Icon.Calendar2Week
                          size={45}
                          className="float-left mr-3 text-primary"
                        />
                        <Card.Text className="mt-2" />
                        Sesi 8 : {sesi8}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
              {/*here the content left*/}
            </div>
            <div class="col-5 mt-5">
              {/*here the content*/}
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src={coursePhoto} />
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <Card.Text>Batas Pendaftaran</Card.Text>
                      <Card.Text class="font-weight-bold">
                        {courseStartDate}
                      </Card.Text>
                    </div>

                    <div className="col">
                      <Card.Text>Harga Kursus</Card.Text>
                      {isCoursePaid ? (
                        <b>Rp.{coursePrice.toLocaleString("id-ID")}</b>
                      ) : (
                        <b>Rp. 0</b>
                      )}
                      {/*<small class="text-muted small"> <del>Rp 398.000</del></small>*/}
                      <br />
                    </div>
                  </div>
                  <a>
                    <Form onSubmit={onPayment}>
                      <Form.Control
                        ref={courseid_field}
                        value={course_id}
                        style={{ display: "none" }}
                      />
                      <Form.Control
                        ref={courseprice_field}
                        value={coursePrice}
                        style={{ display: "none" }}
                      />
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </Form>
                  </a>
                </Card.Body>
              </Card>
            </div>

            <h5 className="mt-2">Mentor</h5>
            <MentorProfile />
            <h5 className="mt-2 ">Kursus Yang Mungkin anda Sukai</h5>
            <RecomendationList
              productData={productData}
              rekomendasi={"Rekomendasi"}
            />
            <div class="mb-3 col-12 mt-2">
              <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                {relatedProduct.map((course) => (
                  <div key={course.id} class="mb-3 col-8 col-md-6 col-lg-3">
                    <div
                      class="card h-100 position-relative"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={course.title}
                    >
                      <img
                        class="card-img-top"
                        src={course.image}
                        alt="cover"
                      ></img>
                      <div class="card-body p-3 d-flex flex-column justify-content-between">
                        <h6 class="d-flex align-items-center">
                          <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                          <span>{course.title}</span>
                        </h6>
                        <div class="text-muted small ">{course.namaMentor}</div>
                        <h6>
                          {isCoursePaid ? (
                            <span class="text-truncate">
                              {" "}
                              Rp. {coursePrice.toLocaleString("id-ID")}
                            </span>
                          ) : (
                            <span class="badge badge-success"> Gratis</span>
                          )}
                        </h6>
                        <h6>
                          <Link
                            to={"/course/" + id}
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
              //{" "}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
