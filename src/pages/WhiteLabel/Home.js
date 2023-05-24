import React from "react";
import banner from "../../assets/image/illustration-banner.png";
import service1 from "../../assets/image/service1.png";
import service2 from "../../assets/image/service2.png";
import service3 from "../../assets/image/service3.png";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import "./landingpageLabel.css";
import "../../assets/css/course.css";
import Footer from "../../components/WhiteLabel/Footer";
import Navbar from "../../components/WhiteLabel/Navbar";
import * as Icon from "react-bootstrap-icons";

import { Incoming } from "./Incoming/Incoming";
import { Live } from "./live/Live";

const HomeLabel = () => {
  return (
    <>
      <Navbar />
      <body>
        <section id="section-hero">
          <div class="container">
            <div class="py-5 d-flex row">
              <div class="order-1 order-lg-2 col-sm-12 col-lg-6">
                <img src={banner} class="mx-auto d-block"></img>
              </div>
              <div class="order-2 order-lg-1 col-sm-12 col-lg-6">
                <p class="px-4 hero-header">
                  Herbalogy DRK Hadir sebagai solusi Kesehatan Alternatif
                  Bagi Masyarakat Indonesia dan Enterpreneurship Product Herbal
                </p>
                <p class="px-4 hero-description">
                  Bersama DRK Wujudkan kesehatan secara optimal melalui kursus cara meracik
                  berobat berbahan herbal alami Indonesia
                </p>
                <form class="d-none d-lg-block" action="#" method="get">
                  <div class="mx-4 input-group">
                    <input
                      type="search"
                      name="title"
                      class="form-control"
                      aria-label="search-input"
                      placeholder="Cari apa yang ingin Anda pelajari"
                    />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-primary">
                        <Icon.Search />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="section-services" class="p-2 mb-0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-12 col-lg-4">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-2 col-2">
                      <img src={service1} />
                    </div>
                    <div class="pl-4 col-10">
                      <h6 class="text-white">Standar Industri</h6>
                      <p class="text-white">
                        Menggunakan kurikulum adaptif dengan konsep DMSO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-4">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-2 col-2">
                      <img src={service2} />
                    </div>
                    <div class="pl-4 col-10">
                      <h6 class="text-white">Live Streaming</h6>
                      <p class="text-white">
                        Pembelajaran dilakukan dengan tatap muka secara online
                        dan live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-4">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-2 col-2">
                      <img src={service3} />
                    </div>
                    <div class="pl-4 col-10">
                      <h6 class="text-white">Sertifikasi</h6>
                      <p class="text-white">
                        Dapatkan sertifikat keahlian setelah mengikuti kursus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="py-2">
          <Live />
          <Incoming />
        </div>

        <section id="section-contact" class="py-4">
          <div class="container">
            <div class="row">
              <div class="justify-content-sm-center justify-content-lg-between">
                <div class="section-header">
                  <h5 class="section-title">Hubungi Kami</h5>
                  <p class="section-description">
                    Berikan masukan dan saran Anda melalui kontak form dibawah
                  </p>
                </div>
              </div>

              <div class="col-12 order-lg-2 col-lg-6">
                <div
                  class="alert alert-success alert-dismissible fade show d-none"
                  role="alert"
                >
                  Terima kasih, pesan Anda sudah kami terima.
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <form action="" name="submit-to-google-sheet">
                  <div class="form-group">
                    <label for="name">Nama</label>
                    <input
                      type="text"
                      id="name"
                      name="nama"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea
                      name="pesan"
                      id="message"
                      class="form-control"
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    name="submit"
                    class="btn btn-primary btn-kirim"
                  >
                    Kirim Pesan
                  </button>
                  <button
                    type="submit"
                    name="submit"
                    class="btn btn-primary btn-disabled d-none disabled"
                  >
                    Loading...
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default HomeLabel;
