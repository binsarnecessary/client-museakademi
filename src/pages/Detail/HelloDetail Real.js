import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";
import { MentorProfile } from "../../components/common/MentorProfile";
import Footer from "../../components/common/Footer";
import { Detail } from "../Mentor/Detail";
import RecomendationList from "../recomendation/RecomendationList";
import productData from "../Kursus/CardData";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

export const HelloDetail = () => {
  const { itemId } = useParams();
  const detailProduct = productData.find(
    (item) => item.id === parseInt(itemId)
  );
  const {
    id,
    name,
    deskripsi,
    ispaid,
    price,
    image,
    rating,
    date,
    sesi1,
    sesi2,
    sesi3,
    sesi4,
    sesi5,
  } = detailProduct;
  const relatedProduct = productData.filter(
    (item) => item.category === detailProduct.category
  );

  return (
    <>
      <Navbar />
      <section id="detailcourse">
        <div className="container">
          <div class="row">
            <div class="col-7 ">
              <div className="detail mt-5">
                <h4>{name}</h4>
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
                    {ispaid ? (
                      <h2>Rp.{price.toLocaleString("id-ID")}</h2>
                    ) : (
                      <h2>Rp. 0</h2>
                    )}
                  </div>
                  <br />
                </div>
                <hr />
                <div className="deskripsi ">
                  <h6>Deskripsi</h6>
                  <p>{deskripsi}</p>
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
                        Sesi 1 : {sesi1}
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
                  </div>
                </div>
              </div>
              {/*here the content left*/}
            </div>
            <div class="col-5 mt-5">
              {/*here the content*/}
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <Card.Text>Batas Pendaftaran</Card.Text>
                      <Card.Text class="font-weight-bold">{date}</Card.Text>
                    </div>

                    <div className="col">
                      <Card.Text>Harga Kursus</Card.Text>
                      {ispaid ? (
                        <b>Rp.{price.toLocaleString("id-ID")}</b>
                      ) : (
                        <b>Rp. 0</b>
                      )}
                      {/*<small class="text-muted small"> <del>Rp 398.000</del></small>*/}
                      <br />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-danger btn-block btn-lg">
                    Beli Kursus
                  </button>
                </Card.Body>
              </Card>
            </div>

            <h5 className="mt-2">Mentor</h5>
            <MentorProfile />
            <h5 className="mt-2 ">Kursus Yang Mungkin anda Sukai</h5>
            {/*<RecomendationList productData={productData} rekomendasi={'Rekomendasi'}/>*/}
            <div class="mb-3 col-12 mt-2">
              <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                {relatedProduct.map((productData) => (
                  <div
                    key={productData.id}
                    class="mb-3 col-8 col-md-6 col-lg-3"
                  >
                    <div
                      class="card h-100 position-relative"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={productData.name}
                    >
                      <img
                        class="card-img-top"
                        src={productData.image}
                        alt="cover"
                      ></img>
                      <div class="card-body p-3 d-flex flex-column justify-content-between">
                        <h6 class="d-flex align-items-center">
                          <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                          <span>{productData.name}</span>
                        </h6>
                        <div class="text-muted small ">
                          {productData.mentor}
                        </div>
                        <h6>
                          {productData.ispaid ? (
                            <span class="text-truncate">
                              {" "}
                              Rp. {productData.price.toLocaleString("id-ID")}
                            </span>
                          ) : (
                            <span class="badge badge-success"> Gratis</span>
                          )}
                        </h6>
                        <h6>
                          <Link
                            to={"/course/" + productData.id}
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
        <Footer />
      </section>
    </>
  );
};
