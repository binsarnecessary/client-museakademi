import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { default as mitra } from "./DataMitra"
import { Link } from 'react-router-dom';

const Mitra = () => {
  const [mitra, setMitra] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentMitraRequest = await axios.get(
          "https://server-museakademi-production.up.railway.app/api/mitra"
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

  console.log(mitra)

  const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px'
};

const textContainerStyle = {
    textAlign: 'center'
};
  return (
    <div id="list-categories" class="d-flex" style={{ overflowX: "auto" }}>
      {mitra.map((mitra) => (
        <div class="mb-3 col-lg-3 col-6">
          
            <div class="category-items" >
              <div class="media" style={textContainerStyle}>
                <Link to={`/${mitra.slug}`}>
                  <img height={'60px'} src={mitra.logoMitra} alt={mitra.nameMitra} />
                </Link>
                <div class="media-body">
                  <h6 class="mt-3 mb-0 text-small"><small><b>{mitra.courseMitra}</b></small></h6>
                    <span>{mitra.nameMitra}</span>
                 
                </div>
              </div>
            </div>
          
        </div>
      ))}

    </div>
  )
}

export default Mitra