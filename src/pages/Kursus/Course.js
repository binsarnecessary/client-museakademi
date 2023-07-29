import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

import * as Icon from "react-bootstrap-icons";
import { Form, InputGroup } from "react-bootstrap";
import { Incoming } from "../Home/Incoming/Incoming";
// import productData from "./CardData";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Course.css";
import axios from "axios";

export const Course = () => {
  {
    /*filter kategori */
  }
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [course, setCourse] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          'https://server-museakademi-production.up.railway.app/api/course'
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

  // console.log(course[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentProducts = course;

  // const filteredProducts = useMemo(() => {
  //   let filteredProducts = Object.values(course);

  //   if (selectedCategory) {
  //     filteredProducts = filteredProducts.filter(
  //       (course) => course.courseCategory === selectedCategory
  //     );
  //   }

  //   if (minPrice) {
  //     filteredProducts = filteredProducts.filter(
  //       (course) => course.coursePrice >= Number(minPrice)
  //     );
  //   }

  //   if (maxPrice) {
  //     filteredProducts = filteredProducts.filter(
  //       (course) => course.coursePrice <= Number(maxPrice)
  //     );
  //   }

  //   return filteredProducts;
  // }, [selectedCategory, minPrice, maxPrice]);

  // const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  // const currentProducts = filteredProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  return (
    <>
      <Navbar />

      <div className="container my-5 ">
        <div className="row mt-lg-5">
          <div className="col-12 mb-3">
            <h5>Kursus</h5>
            <p class="small">Temukan Kursus yang Sesuai dengan Minat Anda</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-3 mb-3">
            <p class="text-muted small mb-2">Pencarian</p>
            <form id="formFilter" method="get">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="search"
                  aria-label="search-input"
                  placeholder="Cari kursus, kategori, mentor"
                />
                <div class="input-group-append">
                  <span class="input-group-text bg-white" id="search-addon">
                    <Icon.Search />
                  </span>
                </div>
              </div>
            </form>
            <div className="text-muted small mb-2">Kategori</div>
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

            <div>
              {/*Here last update  22 02 2023*/}
              <Form.Group className="mt-2">
                <Form.Label className="text-muted small">Harga</Form.Label>
                <div>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>Rp</InputGroup.Text>
                    <Form.Control
                      type="number"
                      placeholder="Harga minimum"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text>Rp</InputGroup.Text>

                    <Form.Control
                      type="number"
                      placeholder="Harga maksimum"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </InputGroup>
                </div>
              </Form.Group>
            </div>
          </div>
          <div className="col">
          <section className="row">
  {currentProducts.map((course, index) => (
    <div
      key={course.id}
      className="col-6 col-lg-4 mb-3 grid-template-columns-repeat"
    >
      <div
        className="card h-100 position-relative"
        data-toggle="tooltip"
        data-placement="top"
      >
        <img className="card-img-top " src={course.coursePhoto}></img>
        <div
          key={index}
          className="card-body p-3 d-flex flex-column justify-content-between"
        >
          <h6 className="d-flex align-items-center">
            <span className="badge badge-pill badge-primary p-1 mr-2"></span>
            <span>{course.courseTitle}</span>
          </h6>
          <div className="text-muted small ">{course.namaMentor}</div>
          <h6>
            {course.isCoursePaid ? (
              <span className="text-truncate">
                {" "}
                Rp. {course.coursePrice.toLocaleString("id-ID")}
              </span>
            ) : (
              <span className="badge badge-success"> Gratis</span>
            )}
          </h6>
          <h6>
            <Link
              to={"/course/" + course.id}
              target="_top"
              className="btn btn-danger btn-sm btn-block text-center"
            >
              Ikuti Kursus
            </Link>
          </h6>
        </div>
      </div>
    </div>
  ))}
</section>

            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              // pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousClassName={"previous"}
              nextClassName={"next"}
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
