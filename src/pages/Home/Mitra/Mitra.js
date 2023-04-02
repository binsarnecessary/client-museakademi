import React from 'react'
import mitra from './DataMitra'

const Mitra = () => {
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
      {mitra.map((item) => (
        <div class="mb-3 col-lg-3 col-6" key={item.id} >
          
            <div class="category-items" >
              <div style={textContainerStyle}>
                <a href='/um-malang'>
                  <img height={'60px'} src={item.image} alt={item.name} />
                </a>
                <div class="media-body">
                  <h6 class="mt-1 mb-0 text-small">
                    <small>{item.name}</small>
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