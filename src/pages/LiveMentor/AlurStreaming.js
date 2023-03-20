import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import { Card, Table } from 'react-bootstrap'

import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import pic from '../../assets/image/pana.svg'
import { Link } from 'react-router-dom';
import LiveData from '../Home/live/LiveData';
import ReactPaginate from 'react-paginate';


export const AlurStreaming = () => {
    const [activePage, setActivePage] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
      }


    return (
        <div>
            <Navbar/>
            <section id='detailcourse'>
                <div className='container mt-5 '>
                    <h4 >Live Streaming</h4>
                    <p>Temukan chanel yang sesuai dengan anda</p>
                </div>
                {/*disini sections baru setelah row dan colom  */}
            </section>

            {/* section flow  */}
            <section id="section-flow" className="py-5 bg-light">
                <div className="container">
                    <div className="row">

                        <div className="col-12 ">
                            <div className="mb-4 text-center section-header">
                                <h5 className="section-title"><b>Alur Pembuatan Live Streaming</b></h5>
                                <p className="section-description">
                                    Berikut merupakan tahapan pembuatan live streaming di Muse Akademi.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <img className=" d-block mt-4" src={pic} />
                        </div>
                        <div className="mt-3 col-12 col-lg-7">
                            <div className="row no-gutters">
                                <div className="col-2 position-relative d-flex justify-content-center">
                                    <div className="bg-primary rounded-circle" style={{ width: "20px", height: "20px" }}></div>
                                    <div className="position-absolute bg-primary" style={{ width: "2px", height: "100%" }}></div>
                                </div>
                                <div className="col-10">
                                    <h6 className=" text-primary"><b>Hubungi Admin</b></h6>
                                    <p className="mt-2 small">
                                        Upload video mengajar Anda ke platform Youtube, Google Drive, dsb dan kirimkan link video tersebut melalui form kirim video.
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2 position-relative d-flex justify-content-center">
                                    <div className="bg-primary rounded-circle" style={{ width: "20px", height: "20px" }}></div>
                                    <div className="position-absolute bg-primary" style={{ width: "2px", height: "100%" }}></div>
                                </div>
                                <div className="col-10">
                                    <h6 className=" text-primary"><b>Buka Jadwal</b></h6>
                                    <p className="mt-2 small">
                                        Tim Muse Akademi akan memberi review terhadap video Anda selama kurang lebih 7 hari kerja.
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2 position-relative d-flex justify-content-center">
                                    <div className="bg-primary rounded-circle" style={{ width: "20px", height: "20px" }}></div>
                                    <div className="position-absolute bg-primary" style={{ width: "2px", height: "100%" }}></div>
                                </div>
                                <div className="col-10">
                                    <h6 className=" text-primary"><b>Buka Preview</b></h6>
                                    <p className="mt-2 small">
                                        Isi biodata Anda pada halaman Profil Mentor setelah pengajuan mentor disetujui oleh Tim Muse Akademi
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2 position-relative d-flex justify-content-center">
                                    <div className="bg-primary rounded-circle" style={{ width: "20px", height: "20px" }}></div>
                                    <div className="position-absolute bg-primary" style={{ width: "2px", height: "100%" }}></div>
                                </div>
                                <div className="col-10">
                                    <h6 className=" text-primary"><b>Open Live</b></h6>
                                    <p className="mt-2 small">
                                        Isi biodata Anda pada halaman Profil Mentor setelah pengajuan mentor disetujui oleh Tim Muse Akademi
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2 position-relative d-flex justify-content-center">
                                    <div className="bg-primary rounded-circle" style={{ width: "20px", height: "20px" }}></div>
                                </div>
                                <div className="col-10">
                                    <h6 className=" text-primary"><b>Otomatis Hilang</b></h6>
                                    <p className="mt-2 small">
                                        Anda dapat mengajukan kelas yang ingin Anda buka kepada Tim Muse Akademi sesuai dengan bakat dan minat Anda.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* section jadwal live  */}

            <section >
                <div className='container mt-3'>
                    <h4>Jadwal Live</h4>
                </div>
                {/*filter */}
                <div className='container' >
                    <Card className="mt-4">
                        <Card.Body>
                            <div >
                                <Table borderless  >
                                    <thead >
                                        <tr>
                                            <th width="15%">Gambar</th>
                                            <th width="25%">Tema</th>
                                            <th width="15%">Waktu Mulai</th>
                                            <th width="15%">Waktu Selesai</th>
                                            <th width="15%">Tanggal</th>
                                            <th width="5%">Opsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {LiveData.slice(currentPage * perPage, (currentPage + 1) * perPage).map((item) => (
                                            <tr key={item.id}>
                                                <td><img src={item.image} width='120px'></img></td>
                                                <td>{item.name}</td>
                                                <td>{new Date(item.eventStart).toLocaleTimeString('Id', { hour: '2-digit', minute: '2-digit' })} WIB</td>
                                                <td>{new Date(item.eventEnd).toLocaleTimeString('Id', { hour: '2-digit', minute: '2-digit' })} WIB</td>
                                                <td>{new Date(item.eventStart).toLocaleDateString('Id', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                                                //arahin ke halaman livestreaming/itemId
                                                <td><a  target='_blank' rel='noreferrer'><Icon.ArrowRightSquareFill size={'25px'} style={{ color: '#3ABCD8' }} /></a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(LiveData.length / 5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />

            </section>


            <Footer />
        </div>
    )
}

