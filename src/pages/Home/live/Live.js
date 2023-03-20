import React, { useState, useEffect } from 'react';
import productData from '../../Kursus/CardData'
import LiveData from './LiveData'
import { Link } from 'react-router-dom'
import { LiveHome } from './LiveHome';

export const Live = () => {


    // mengacak urutan produk
    const shuffledProducts = LiveData.sort(() => Math.random() - 0.5);
    // mengambil maksimal 4 produk dari array yang diacak
    const randomProducts = shuffledProducts.slice(0, 4);



    return (
        <section id="section-courses" className='py-4'>
            <div class="container">
                <div class="row">
                    <div class="mb-3 col-12 d-flex align-items-center justify-content-between">
                        <h5>Acara Livestreaming Gratis</h5>
                        <Link to={'/livestreaming'} target='_top' class="section-header-btn btn btn-sm btn-primary">Lihat Semua</Link>
                    </div>
                    <div class="mb-3 col-12">
                        <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                        {randomProducts.map((LiveData) => (
                            <LiveHome key={LiveData.id} LiveData={LiveData} />   
                        ))}
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}