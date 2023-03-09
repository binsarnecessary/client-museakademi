import React from "react";
import { Card } from "react-bootstrap";
import DetailData from "../../pages/Mentor/DetailData";
import pic from "../../assets/image/Profil.png";

export const MentorProfile = () => {
  return (
    <>
      <div className="row">
        {DetailData.map((item) => (
          <div class="my-4 col" key={item.id}>
            <div class="mb-4 d-flex justify-content-start">
              <div>
                <img
                  className="rounded-circle mr-3"
                  style={{ width: "64px", borderRadius: "50%" }}
                  src={item.image}
                ></img>
              </div>
              <div>
                <div class="media-body">
                  <a href="/mentor/profile/2461" class="text-dark">
                    <strong>{item.name}</strong>
                  </a>
                  <i class="mt-1 mb-2 small text-muted d-block">{item.job}</i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
