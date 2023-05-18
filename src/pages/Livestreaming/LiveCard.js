import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./StyleCard.css";
export const LiveCard = (props) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const eventDate = new Date(props.LiveData.liveStart);
  // Mengubah props.LiveData.time menjadi objek Date

  //membuat time start
  const eventTime = props.LiveData.liveStart;
  const timePart = eventTime.split("T")[1];
  const hours = timePart.split(":")[0];
  const minutes = timePart.split(":")[1];
  //membuat time end
  const endEventTime = props.LiveData.liveEnd;
  const endTime = endEventTime.split("T")[1];
  const endHours = endTime.split(":")[0];
  const endMinutes = endTime.split(":")[1];

  const date = eventDate.getDate();
  const month = new Intl.DateTimeFormat("id", { month: "long" }).format(
    eventDate
  );
  const year = eventDate.getFullYear();

  const formattedDate = `${date} ${month} ${year}`;

  useEffect(() => {
    const now = new Date();
    const eventStart = new Date(props.LiveData.liveStart);
    const eventEnd = new Date(props.LiveData.liveEnd);

    if (now > eventStart && now < eventEnd) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [props.LiveData]);

  const handleClick = () => {
    // Handler untuk event onClick pada button produk
    if (isButtonActive) {
      // Aksi ketika button aktif di-klik
      window.open(props.LiveData.youtubeUrl, "_blank");
    }
  };

  return (
    <div
      key={props.LiveData.id}
      class="col-6 col-lg-4 mb-3 grid-template-columns-repeat"
    >
      <div
        class="card h-100 position-relative"
        data-toggle="tooltip"
        data-placement="top"
      >
        <img
          class="card-img-top "
          src={props.LiveData.thumbnailLivestreaming}
        ></img>
        <div class="card-body p-3 d-flex flex-column justify-content-between">
          <h6 class="d-flex align-items-center">
            <span class="badge badge-pill badge-primary p-1 mr-2"></span>
            <span>{props.LiveData.titleLivestreaming}</span>
          </h6>
          <h6 class="text-muted small ">{props.LiveData.namaChanel}</h6>
          <div class="text-muted small row ">
            <div class="col">{formattedDate}</div>
            <div class="col-sm">
              <p>
                {hours}.{minutes}-{endHours}.{endMinutes} WIB
              </p>
            </div>
          </div>
          <h6>
            <span class="text-truncate">{props.LiveData.price}</span>
          </h6>
          <button
            onClick={handleClick}
            disabled={!isButtonActive}
            className={
              isButtonActive ? "buy-button active" : "buy-button disabled"
            }
          >
            {isButtonActive ? "Join Live" : "Live Tidak Tersedia"}
          </button>
          <div className="text-center mt-2 justify-content-center">
            {/* <Link to={'/livestreaming/' + props.LiveData.id} className='tes'>Detail</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
