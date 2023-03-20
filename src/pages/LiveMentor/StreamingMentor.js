import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import LiveData from '../Home/live/LiveData'
import { Form, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import { LiveCard } from '../Livestreaming/LiveCard';


export const StreamingMentor = () => {
    const [filter, setFilter] = useState('all');

    // filter data produk berdasarkan hari
    const filteredProducts = LiveData.filter(LiveData => {
        const eventStart = new Date(LiveData.eventStart);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const nextTwoDays = new Date(today);
        nextTwoDays.setDate(today.getDate() + 2);

        if (filter === 'today') {
            return eventStart.getDate() === today.getDate() &&
                eventStart.getMonth() === today.getMonth() &&
                eventStart.getFullYear() === today.getFullYear();
        } else if (filter === 'tomorrow') {
            return eventStart.getDate() === tomorrow.getDate() &&
                eventStart.getMonth() === tomorrow.getMonth() &&
                eventStart.getFullYear() === tomorrow.getFullYear();
        } else if (filter === 'nextTwoDays') {
            return (eventStart.getDate() === tomorrow.getDate() &&
                eventStart.getMonth() === tomorrow.getMonth() &&
                eventStart.getFullYear() === tomorrow.getFullYear()) ||
                (eventStart.getDate() === nextTwoDays.getDate() &&
                    eventStart.getMonth() === nextTwoDays.getMonth() &&
                    eventStart.getFullYear() === nextTwoDays.getFullYear());
        } else {
            return true;
        }
    });


    return (
        <>
            <Navbar />
            {/*Halaman livestreaming */}
            <div className="container my-5 ">
                <div className="row mt-lg-5">
                    <div className="col-12 mb-3">
                        <h5>Livestreaming</h5>
                        <p class="small">Temukan Chanel yang Sesuai dengan Anda</p>
                    </div>
                </div>

                <div class="row">

                    <div class="col-12 col-lg-3 mb-3">
                        <p class="text-muted small mb-2">Pencarian</p>
                        <form id="formFilter" method="get">
                            <div class="input-group mb-3">
                                <input class="form-control" type="search" aria-label="search-input" placeholder="Judul" />
                                <div class="input-group-append">
                                    <span class="input-group-text bg-white" id="search-addon">
                                        <Icon.Search />
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="text-muted small mb-2">Filter</div>
                        <div className='ml-2'>
                            <Form>
                                <Form.Check
                                    type="radio"
                                    label="Semua"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => setFilter('all')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Hari ini"
                                    name="radioOption"
                                    value="option2"
                                    onChange={() => setFilter('today')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Besok"
                                    name="radioOption"
                                    value="option3"
                                    onChange={() => setFilter('tomorrow')}
                                />
                                <Form.Check
                                    type="radio"
                                    label="2 hari kedepan"
                                    name="radioOption"
                                    value="option4"
                                    onChange={() => setFilter('nextTwoDays')}
                                />
                            </Form>
                        </div>

                        //routing ke halaman AlurStreaming.js
                        <div className='mt-3'>
                            <Link to={'/bukajadwal'}>
                                <Button>Buka Jadwal</Button>
                            </Link>
                        </div>
                        <div className='mt-4'>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            {filteredProducts.map((LiveData) => (
                                <LiveCard key={LiveData.id} LiveData={LiveData} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}
