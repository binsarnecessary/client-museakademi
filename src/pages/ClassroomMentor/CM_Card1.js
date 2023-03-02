import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/bootstrap.css'
import '../../assets/css/style.css'

const CM_Card1 = () => {
  return (
    <div className="card mt-3">
        <div className="card-body">
            <div className="table-responsive">
                <thead>
                    <tr className="small text-muted">
                
                        <td width="30%">Sesi</td>
                        <td width="15%">Tanggal</td>
                        <td width="15%">Pukul</td>
                        <td width="5%">Status</td>
                        <td width="5%">Opsi</td>
                    </tr>
                </thead>
                <tbody height="100px">
                    <tr className="">
                  
                        <td>Pengenalan UI/UX Design Aplication <br></br><p className='small'>Lorem ipsum dolor sit amet. Sit eligendi veritatis </p></td>
                        <td>Jumat, 24 Juli 2020</td>
                        <td>14.00-16.00 WIB</td>
                        <td><span class="badge badge-pill badge-success"><small>Selesai</small></span></td>
                        <td><Link to="" class="btn btn-primary p-1">
                                <i class="las la-angle-right" title="Detail"></i>
                            </Link></td>
                    </tr>

                    <tr className="">
                  
                        <td>Pengenalan UI/UX Design Aplication <br></br><p className='small'>Lorem ipsum dolor sit amet. Sit eligendi veritatis </p></td>
                        <td>Jumat, 24 Juli 2020</td>
                        <td>14.00-16.00 WIB</td>
                        <td><span class="badge badge-pill badge-warning"><small>Akan Datang</small></span></td>
                        <td><Link to="/live3" class="btn btn-primary p-1">
                                <i class="las la-angle-right" title="Detail"></i>
                            </Link></td>
                    </tr>

                    

                    
                </tbody>
            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CM_Card1