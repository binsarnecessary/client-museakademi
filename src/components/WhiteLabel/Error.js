import React from 'react'
import ImgError from '../../assets/image/404.png'
import '../../assets/css/error.css'
import Footer from './Footer'
import Navbar from './Navbar'


export const Error = () => {
  return (
 <>
 <Navbar />
    <div class="container py-lg-5 pb-5 mb-5 ">
		  <div class="row justify-content-center align-items-center mt-5 mb-5">
			  <div class="col-12 col-lg-3 text-center">
				<img src={ImgError} class="img-fluid" alt="">
                    </img>
			  </div>
			  <div class="col-12 col-lg-3 text-center text-lg-left">
				  <h1 class="text-primary display-1">404</h1>
				  <h5>Page Not Found</h5>
				  <p class="text-muted small">
					  Halaman yang Anda minta tidak dapat ditampilkan oleh server.
				  </p>
				  
			  </div>
		  </div>
	  </div>
      <Footer/>
      </>
  )
}
