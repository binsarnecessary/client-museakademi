import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import LogoLarge from "../../assets/image/logo-large.png";
import Intara from "../../assets/image/intara.png";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";

function Footer() {
  const [mitra, setMitra] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentMitraRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/mitra/${slug}`
        );

        const currentMitraResponse = currentMitraRequest.data;

        if (currentMitraResponse.status) {
          setMitra(currentMitraResponse.data.Mitra);
        }
      } catch (err) {
        setMitra(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3 mb-4 text-center">
              <img src={mitra.logoMitra} alt="logo footer" class="logo img-fluid" />
            </div>
            <div class="col-12 col-lg-4 mb-4">
              <h6>Kontak</h6>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Envelope></Icon.Envelope>
                </div>
                <div class="col-11">
                  <a
                    href= {mitra.emailMitra}
                    class="text-white"
                  >
                    <small>{mitra.emailMitra}</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Instagram></Icon.Instagram>
                </div>
                <div class="col-11">
                  <a
                    href="https://www.instagram.com/{mitra.instagramMitra}/"
                    class="text-white"
                    target="_blank"
                  >
                    <small>{mitra.instagramMitra}</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Facebook></Icon.Facebook>
                </div>
                <div class="col-11">
                  <a
                    href="https://www.facebook.com/"
                    class="text-white"
                    target="_blank"
                  >
                    <small>{mitra.facebookMitra}</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Whatsapp></Icon.Whatsapp>
                </div>
                <div class="col-11">
                  <a
                    href="https://wa.me/6285173336607"
                    class="text-white"
                    target="_blank"
                  >
                    <small>{mitra.waMitra}</small>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <Icon.House></Icon.House>
                </div>
                <div class="col-11">
                  <span>
                    <small>
                      {mitra.alamatMitra}
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-2 mb-4">
              <form action="//simbis.museakademi.com/login" method="POST">
                <input type="hidden" value="{{user.id}}" name="id"></input>
                <h6>Info</h6>
                <ul>
                  <li>
                    <a href="#!">
                      <small>Profil Produk</small>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/12o25hHgCiGHPOKwWg_ychu_tPs2ZL3Pm/view?usp=sharing"
                      target="_blank"
                    >
                      <small>Buku Manual</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>Lisensi</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>HAKI</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>Penghargaan</small>
                    </a>
                  </li>
                </ul>
              </form>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <h6>Supported By</h6>
              <a href="https://digistaro.com/" target="_blank">
                <img
                  alt="digistar"
                  class="another-logo mb-3"
                  src={LogoLarge}
                  width="150"
                />{" "}
              </a>{" "}
            </div>
          </div>
          <p>Copyright &copy; 2019. Muse Akademi</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;