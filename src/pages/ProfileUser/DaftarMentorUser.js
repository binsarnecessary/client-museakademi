import CompProfileUser from "../../components/profileMentor/CompProfileUser";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import "react-phone-input-2/lib/style.css";
import Footer from "../../components/common/Footer";

const DaftarMentorUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div class="container mt-5"></div>
      <div class="container mb-5">
        <div class="row mt-lg-5 ">
          <div class="col-12 col-lg-3">
            <CompProfileUser />
          </div>
          <div class="col-12 col-lg-9">
            <h5>Mendaftar Sebagai Mentor</h5>
            <p class="small text-muted">
              Ayo daftarkan diri Anda sebagai mentor dengan cara melengkapi isian dibawah ini
            </p>

            <form method="post" action="" enctype="multipart/form-data">
                        <input type="hidden" name="csrfmiddlewaretoken" value="F16jngT8I67YgYP50or563UDNP3GL9304MBDh5OApO7QF3sUlRCa6f6DzJJRkmpE"/>
                        <div class="row">
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_firstname">Nomor KTP</label>
                                    <input class="form-control" name="NomorKTP" type="text" placeholder="Nomor Kartu Tanda Penduduk " fdprocessedid="to1rph"/>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_firstname">Scan KTP</label>
                                    <input type="file" name="ScanKTP" class="form-control" placeholder="JPG Maks 300 KB" required="" id="id_firstname" fdprocessedid="4nyfx5"/>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_lastname">File Sertifikasi</label>
                                    <input type="file" name="Sertifikasi" class="form-control" placeholder="PDF Maks 300 KB" required="" id="id_lastname" fdprocessedid="2kq6cc"/>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_username">File CV</label>
                                    <input type="file" name="CV" class="form-control" placeholder="PDF Maks 300 KB" minlength="8" required="" id="id_username" fdprocessedid="wmtt0e"/>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_phone">Portofolio</label>
                                    <input type="file" name="Portofolio" class="form-control" placeholder="PDF Maks 300 KB" maxlength="15" minlength="10" required="" id="id_phone" fdprocessedid="n5a3a"/>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_address">Surat Lamaran</label>
                                    <input type="file" name="SuratLamaran" class="form-control" placeholder="PDF Maks 100 KB" required="" id="id_address"></input>
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <label for="id_address">Link Video</label>
                                    <input type="url" name="SuratLamaran" class="form-control" placeholder="" required="" id="id_address"></input>
                            </div>
                            <div class="col-12">
                                <button type="submit" name="action" class="btn btn-primary btn-block" fdprocessedid="dok02l">Simpan Perubahan</button>
                            </div>
                        </div>
                    </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );


};

export default DaftarMentorUser;
