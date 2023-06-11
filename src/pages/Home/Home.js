import React from "react";
import { Card, Container } from "react-bootstrap";
import banner from "../../assets/image/illustration-banner.png";
import service1 from "../../assets/image/service1.png";
import service2 from "../../assets/image/service2.png";
import service3 from "../../assets/image/service3.png";
import service4 from "../../assets/image/service4.svg";
import { Link } from "react-router-dom";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/landingpage.css";
import "../../assets/css/course.css";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import * as Icon from "react-bootstrap-icons";

import { Incoming } from "./Incoming/Incoming";
import { Free } from "./Free/Free";
import { Live } from "./live/Live";
import Mitra from "./Mitra/Mitra";

export const Home = () => {
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
                  The Future of Smart Learning is Muse Akademi Excellence
                  Learning Skills
                </p>
                <p class="px-4 hero-description">
                  Berani tingkatkan skillmu dibidang yang kamu pilih pada
                  layanan course Muse Akademi untuk wujudkan mimpimu sebagai
                  talent
                </p>
                <form class="d-none d-lg-block">
                  <div class="mx-4 input-group">
                    <input
                      type="search"
                      class="form-control"
                      aria-label="search-input"
                      placeholder="Cari apa yang ingin Anda pelajari"
                    />
                    <div class="input-group-append">
                      <Link to={"/course"}>
                        <button type="submit" class="btn btn-primary">
                          <Icon.Search />
                        </button>
                      </Link>
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
              <div class="col-sm-12 col-lg-3">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-3 col-2">
                      <img src={service1} width="50" height="50" />
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
              <div class="col-sm-12 col-lg-3">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-3 col-2">
                      <img src={service2} width="50" height="50" />
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
              <div class="col-sm-12 col-lg-3">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-3 col-2">
                      <img src={service3} width="50" height="50" />
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

              <div class="col-sm-12 col-lg-3">
                <div class="mt-3 service-item">
                  <div class="row">
                    <div class="pt-3 col-2">
                      <img src={service4} width="50" height="50" />
                    </div>
                    <div class="pl-4 col-10">
                      <h6 class="text-white">Bootcamp</h6>
                      <p class="text-white">
                        Pembelajaran yang dilakukan secara class offline
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

        <section id="section-courses" class="py-3">
          <div class="container">
            <div class="row">
              <div class="col justify-content-sm-center justify-content-lg-start">
                <div class="section-header">
                  <h5 class="text-black section-title">Mitra Kursus Kami</h5>
                  <p class="text-black section-description">
                    Paling banyak dicari oleh siswa di Indonesia
                  </p>
                </div>
              </div>
            </div>
            <Mitra />
          </div>
        </section>

        <section id="section-contact" class="py-4">
          <div class="container">
            <div class="row d-flex">
              <div class="mb-5 col-12 order-lg-3 col-lg-6">
                <div class="mt-4 embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.7965627577654!2d112.65960255599809!3d-7.979691598994575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0a21913e0b89d!2sJl.%20Selat%20Karimata%20No.E6%2F1%2C%20Lesanpuro%2C%20Kec.%20Kedungkandang%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065138!5e0!3m2!1sid!2sid!4v1596089738723!5m2!1sid!2sid"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>

              <div class="col-12 order-lg-1 justify-content-sm-center justify-content-lg-between">
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
