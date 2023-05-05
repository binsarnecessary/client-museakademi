import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        <div class="mb-3 col-lg-3 col-6" key={mitra.id} >
          
            <div class="category-items" >
              <div style={textContainerStyle}>
              <a href={`/${mitra.slug}`}>
                  <img height={'60px'} src={mitra.logoMitra} alt={mitra.nameMitra} />
                </a>
                <div class="media-body">
                  <h6 class="mt-1 mb-0 text-small">
                    <small>{mitra.courseMitra}</small>
                  </h6>
                </div>
              </div>
            </div>
          
        </div>
      ))}

    </div>
  )
}

export default Mitra