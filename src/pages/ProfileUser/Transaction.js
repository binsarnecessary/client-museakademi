import React, { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import example from '../../assets/image/course-img1.jpg'
import './Transaction.css';
import { ButtonGroup, Tab, Tabs, Button, ListGroup } from 'react-bootstrap';

const data = [
    {
        id: 1,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-326',
        price: 200000,
        status: 'menunggu pembayaran',
    },
    {
        id: 2,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-327',
        price: 200000,
        status: 'menunggu pembayaran',
    },
    {
        id: 3,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-328',
        price: 200000,
        status: 'menunggu pembayaran',
    },
    {
        id: 4,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-329',
        price: 200000,
        status: 'menunggu konfirmasi',
    },
    {
        id: 5,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-330',
        price: 200000,
        status: 'selesai',
    },
    {
        id: 6,
        image: example,
        judul: 'Membuat Anmimasi 2 dimensi',
        invoice: 'INV-46-61-331',
        price: 200000,
        status: 'tidak valid',
    },
];




const Transaction = () => {
    const [filter, setFilter] = useState('Semua');
    const handleFilter = (filter) => {
        setFilter(filter); // set filter yang dipilih
    };
    const filteredData = data.filter(item => {
        if (filter === 'semua') {
            return true;
        }
        return item.status.toLowerCase() === filter.toLowerCase();
    });
    return (
        <>
            <Navbar />
            <div class='container'>
            <h1 class='mt-5'>Riwayat Transaksi</h1>
            </div>

            <div class="container">
                <div class="row border bold mb-2">
                    <div class="col">
                        <div class="btn-group" >
                            <button type="button active" className={`btn mr-2 ${filter === 'Semua' ? 'active' : ''}`} onClick={() => handleFilter('semua')} >Semua </button>
                            <button type="button" className={`btn mr-2`} onClick={() => handleFilter('menunggu pembayaran')}>Menunggu Pembayaran</button>
                            <button type="button" className={`btn mr-2`} onClick={() => handleFilter('menunggu konfirmasi')}>Menunggu Konfirmasi</button>
                            <button type="button" className={`btn mr-2`} onClick={() => handleFilter('selesai')}>Selesai</button>
                            <button type="button" className={`btn `} onClick={() => handleFilter('tidak valid')}>Tidak valid</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class='container'>
                {filteredData.map(item => (
                    <div class="col" key={item.id}>
                        <div class="card mb-3" >
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-3 d-none d-md-block">
                                    <img src={item.image} style={{ borderRadius: '20px', width: '15rem' }} alt="cover" />
                                </div>
                                <div class="col-12 col-md-9">
                                    <div class="card-body d-md-flex align-items-center justify-content-between">
                                        <div >
                                            <h6 class="card-title text-truncate w-100">{item.judul}</h6>
                                            <div class="d-flex align-items-center mb-2">

                                                <span class="mx-2 small">{item.invoice}</span>
                                            </div>
                                            <div class="mb-2">
                                                {`Rp ${item.price}`}
                                                <span class="text-muted small"><del>Rp 398.000</del></span>
                                            </div>
                                            <div>
                                                <span class={`badge ${item.status === 'menunggu pembayaran' ? 'badge-warning' : item.status === 'menunggu konfirmasi' ? 'badge-info' : item.status === 'selesai' ? 'badge-success' : 'badge-danger'}`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Transaction