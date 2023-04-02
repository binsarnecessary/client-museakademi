import React from 'react'
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import aturjadwal from "../../assets/image/atur-jadwal.jpg";
import { Image } from 'react-bootstrap';

const AturJadwalMentor = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <div className='row'>
            <div className='col-12 mt-5 mb-5'>
                <h3>Buat Jadwal</h3>
            </div>
            <div className='col-12 col-lg-10 mb-5'>
                <Image src={aturjadwal} className='mx-auto d-block' style={{width: "40%"}}></Image>
                <h5 className='text-center'>Silahkan Menghubungi Admin untuk Membuat Jadwal</h5>
                <div className='text-center'>
                <a href='https://wa.me/6285755055835' className='btn btn-primary btn-sm'>Hubungi Admin</a>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AturJadwalMentor