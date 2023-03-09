import React, { useState, useEffect } from "react";
import LiveData from "./LiveData";
import { Link } from "react-router-dom";

export const Live = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const now = new Date();
    const eventStart = new Date(LiveData.eventStart);
    const eventEnd = new Date(LiveData.eventEnd);

    if (now > eventStart && now < eventEnd) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [LiveData]);

  const eventDate = new Date(LiveData.eventStart);
  console.log(eventDate);
  const date = eventDate.getDate();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[eventDate.getMonth()];

  const year = eventDate.getFullYear();

  const formattedDate = `${date} ${month} ${year}`;

  const handleClick = () => {
    // Handler untuk event onClick pada button produk
    if (isButtonActive) {
      // Aksi ketika button aktif di-klik
      alert("Button clicked!");
    }
  };

  // mengacak urutan produk
  const shuffledProducts = LiveData.sort(() => Math.random() - 0.5);
  // mengambil maksimal 4 produk dari array yang diacak
  const randomProducts = shuffledProducts.slice(0, 4);

  return (
    <section id="section-courses" className="py-4">
      <div class="container">
        <div class="row">
          <div class="mb-3 col-12 d-flex align-items-center justify-content-between">
            <h5>Acara Livestreaming Gratis</h5>
            <Link
              to={"/livestreaming"}
              target="_top"
              class="section-header-btn btn btn-sm btn-primary"
            >
              Lihat Semua
            </Link>
          </div>

          <div class="mb-3 col-12">
            <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
              {randomProducts.map((item) => (
                <div key={item.id} class="mb-3 col-8 col-md-6 col-lg-3">
                  <div
                    class="card h-100 position-relative"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={item.name}
                  >
                    <img
                      class="card-img-top"
                      src={item.image}
                      alt="cover"
                    ></img>
                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                      <h6 class="d-flex align-items-center">
                        <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                        <span>{item.name}</span>
                      </h6>
                      <h6 class="text-muted small ">{item.chanel}</h6>
                      <div class="text-muted small row">
                        <div class="col">{formattedDate}</div>
                        <div class="col-sm">
                          <p>hehe</p>
                        </div>
                      </div>
                      <h6></h6>
                      <button
                        onClick={handleClick}
                        disabled={!isButtonActive}
                        className={
                          isButtonActive
                            ? "buy-button active"
                            : "buy-button disabled"
                        }
                      >
                        {isButtonActive ? "Join Live" : "Live Tidak Tersedia"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
