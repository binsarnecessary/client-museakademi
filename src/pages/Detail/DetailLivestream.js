import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import { Button, Card } from "react-bootstrap";
import gambar from "../../assets/image/course-img1.jpg";

export const DetailLivestream = () => {
  return (
    <div>
      <Navbar/>
      <section id="detailcourse">
        <div className="container mt-5 mb-5">
          <h4>Live Streaming</h4>
          <p>Temukan chanel yang sesuai dengan anda</p>
          <div class="row mt-3">
            <div class="col-5 ">
              <div className="poster">
                <Card style={{ width: "25rem" }}>
                  <Card.Img src={gambar} />
                </Card>
              </div>
              {/*here the content left*/}
            </div>
            <div class="col-7">
              {/*here the content*/}
              <Card>
                <Card.Body>
                  <h4>Memudahkan Belajar Animasi </h4>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title className="text-muted">
                        nurohman chanel
                      </Card.Title>
                      <Card.Text className="">10 Januari 2023</Card.Text>
                      <Card.Text>10.00 - 12.00 WIB</Card.Text>
                      <div className="row">
                        <Button class="btn btn-danger btn-sm btn-block text-center">
                          Join Live
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card.Subtitle className="mb-2 font-weight-bold">
                    Deskripsi
                  </Card.Subtitle>
                  <Card.Text>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/*disini sections baru setelah row dan colom  */}
      </section>
      <Footer />
    </div>
  );
};
