
import { Card } from "react-bootstrap";
import DetailData from "../../pages/Mentor/DetailData";
import pic from "../../assets/image/Profil.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const MentorProfile = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      //Check Valid Token From API
      const dataReq = await axios.get(
        "https://server-museakademi-production.up.railway.app/api/users/role/mentor"
      );

      const dataResp = dataReq.data;

      if (dataResp.status) {
        setData(dataResp.data.user);
      }
    } catch (err) {
      setData(false);
    }
  };


  useEffect(() => {
    
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        {data.map((item) => (
          <div class="my-4 col" key={item.id}>
            <div class="mb-4 d-flex justify-content-start">
              <div>
                <img
                  className="rounded-circle mr-3"
                  style={{ width: "64px", borderRadius: "50%" }}
                  src={item.profile_picture}
                ></img>
              </div>
              <div>
                <div class="media-body">
                 { <span class="text-dark">
                    <strong>{item.name}</strong>
                  </span>}
                  <i class="mt-1 mb-2 small text-muted d-block"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
