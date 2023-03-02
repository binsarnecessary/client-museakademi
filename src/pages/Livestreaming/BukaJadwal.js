import React from 'react'
import pana from '../../assets/image/pana.png'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'

export const BukaJadwal = () => {
    return (
        <>
        <Navbar/>
            <div className='mt-5 container'>
                <h5>Live Streaming</h5>
                <p class="small">Temukan chanel yang Sesuai dengan Anda</p>
            </div>
            
            <section id="section-flow" class="py-5 bg-light">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <div class="mb-4 text-center section-header">
                                <h5 class="section-title"><b>Alur Pembuatan Live Streaming</b></h5>
                                <p class="section-description">
                                    Berikut merupakan tahap pembuatan live streaming di Muse Akademi.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img src={pana} class="mx-auto d-block" />
                        </div>
                        <div class="mt-3 col-12 col-lg-7">
                            <div class="row no-gutters">
                                <div class="col-2 position-relative d-flex justify-content-center">
                                    <div class="bg-primary rounded-circle" style={{width: "20px",height: "20px"}}></div>
                                    <div class="position-absolute bg-primary" style={{width: "2px",height: "100%"}} ></div>
                                </div>
                                <div class="col-10">
                                    <h6 class=" text-primary"><b>Hubungi Admin</b></h6>
                                    <p class="mt-2 small">
                                    Hubungi Admin untuk membuat link live streaming di youtube,  Jika sudah maka otomatis jadwal tersebut akan muncul di bagian jadwal mentor dan mitra
                                    </p>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-2 position-relative d-flex justify-content-center">
                                    <div class="bg-primary rounded-circle" style={{width: "20px",height: "20px"}}></div>
                                    <div class="position-absolute bg-primary" style={{width: "2px",height: "100%"}} ></div>
                                </div>
                                <div class="col-10">
                                    <h6 class=" text-primary"><b>Buka Jadwal</b></h6>
                                    <p class="mt-2 small">
                                    Buka jadwal kemudian klik preview, jika ada menu open live kemudian klik saja maka otomatis akan join di dalam forum
                                    </p>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-2 position-relative d-flex justify-content-center">
                                    <div class="bg-primary rounded-circle" style={{width: "20px",height: "20px"}} ></div>
                                    <div class="position-absolute bg-primary" style={{width: "2px",height: "100%"}}></div>
                                </div>
                                <div class="col-10">
                                    <h6 class=" text-primary"><b>Buka Preview</b></h6>
                                    <p class="mt-2 small">
                                    Buka Preview untuk melihat detail dan untuk memulai kegiatan webinar 
                                    </p>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-2 position-relative d-flex justify-content-center">
                                    <div class="bg-primary rounded-circle" style={{width: "20px",height: "20px"}} ></div>
                                    <div class="position-absolute bg-primary" style={{width: "2px",height: "100%"}}></div>
                                </div>
                                <div class="col-10">
                                    <h6 class=" text-primary"><b>Buka Live</b></h6>
                                    <p class="mt-2 small">
                                    Click open live untuk memulai webinar atau join ke dalam acara. “ WAJIB Mempunyai zoom meet ”
                                    </p>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-2 position-relative d-flex justify-content-center">
                                    <div class="bg-primary rounded-circle" style={{width: "20px",height: "20px"}}></div>
                                </div>
                                <div class="col-10">
                                    <h6 class=" text-primary"><b>Otomatis Hilang</b></h6>
                                    <p class="mt-2 small">
                                    Jadwal yang sidah di atur waktunya akan otomatis hilang sesuai waktu yang telah di tentukan
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            



            <Footer/>
        </>
    )
}
