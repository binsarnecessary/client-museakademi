import { Card, Button,Container,Form,InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

import pic1 from '../../assets/image/course-img1.jpg'
import * as Icon from 'react-bootstrap-icons'
import { MentorProfile } from '../../components/common/MentorProfile';
import Footer from '../../components/common/Footer';
import { Detail } from '../Mentor/Detail';
import RecomendationList from '../recomendation/RecomendationList';
import productData from '../Kursus/CardData';



export const HelloDetail = () => {

    const {itemId} = useParams();
    const detailProduct = productData.find(item => item.id === parseInt(itemId))
    const {id,name,price,image,rating} = detailProduct;



    return (
        <>
        <section id='detailcourse'>
        <div className='container'>
          <div class='row'>
            <div class="col-7 "  >
              <div className='detail mt-5' >
                <h4>{name}</h4>
                <div className='detailicon'>
                <div class="row justify-content-start">
                            <div class="col-3">
                                <Icon.StarFill class='ms-auto  text-warning ml-2 mr-2 ' />
                                Ratings
                            </div>
                            <div class="col-3">
                                <Icon.PeopleFill class='ms-auto ml-2 mr-2'/>
                                Siswa 
                            </div>
                            <div class="col-4">
                                <Icon.BookmarksFill class='ms-auto  ml-2 mr-2'/>
                                Kursus Panjang
                            </div>
                            <div className='col'>

                            </div>
                            
                        </div>
                  <br />
                  <div className='price'>
                    <h2>RP.1.200.000</h2>
                  </div>
                  <br />

                </div>
                <hr />
                <div className='deskripsi'>
                  <h6>Deskripsi</h6>
                  <p>Apakah kamu ingin menjadi desainer 3D Modeling handal? Ingin belajar membuat 3D Modeling dengan software Blender? Di kursus ini, kamu akan belajar from zero to hero. Mulai dari pengenalan user interface hingga pembuatan environment kelas untuk game (.fbx).</p>
                  

                </div>
                <div className='cardlist'>
                <h5 className='mb-3'>Jadwal Sesi Kursus</h5>
                        <div >
                            <Card style={{ width: '38rem', marginBottom: '1rem' }}>
                                <Card.Body>
                                    <Icon.Calendar2Week size={45} className='float-left mr-3 text-primary' />
                                    <Card.Text className='mt-2' />Sesi 1 : Pengenalan
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '38rem', marginBottom: '1rem' }}>
                                <Card.Body>
                                    <Icon.Calendar2Week size={45} className='float-left mr-3 text-primary' />
                                    <Card.Text className='mt-2' />Sesi 2 : Pengenalan
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '38rem', marginBottom: '1rem' }}>
                                <Card.Body>
                                    <Icon.Calendar2Week size={45} className='float-left mr-3 text-primary' />
                                    <Card.Text className='mt-2' />Sesi 3 : Pengenalan
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '38rem', marginBottom: '1rem' }}>
                                <Card.Body>
                                    <Icon.Calendar2Week size={45} className='float-left mr-3 text-primary' />
                                    <Card.Text className='mt-2' />Sesi 4 : Pengenalan
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '38rem', marginBottom: '1rem' }}>
                                <Card.Body>
                                    <Icon.Calendar2Week size={45} className='float-left mr-3 text-primary' />
                                    <Card.Text className='mt-2' />Sesi 5 : Pengenalan
                                </Card.Body>
                            </Card>
                        </div>

                </div>
              </div>
              {/*here the content left*/}
            </div>
            <div class="col-5 mt-5">
              {/*here the content*/} 
              <Card style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <div className='row'>
                                <div className='col'>
                                    <Card.Text>Batas Pendaftaran</Card.Text>
                                    <Card.Text class='font-weight-bold' >Kamis, 8 Febuari 2023</Card.Text>
                                </div>

                                <div className='col'>
                                    <Card.Text>Harga Kursus</Card.Text>
                                    <b>Rp 199.000</b>
                                    <small class="text-muted small"> <del>Rp 398.000</del></small>
                                    <br />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-danger btn-block btn-lg">Beli Kursus</button>


                        </Card.Body>
                    </Card>
            </div>

            <h5 className='mt-2'>Mentor</h5>
            <MentorProfile/>
            <h5 className='mt-2'>Kursus Yang Mungkin anda Sukai</h5>
            <RecomendationList productData={productData} rekomendasi={'Rekomendasi'}/>
          </div>
          
        </div>
      </section>
        </>

    )
}
