import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './StyleCard.css'
export const LiveCard = (props) => {

    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        const now = new Date();
        const eventStart = new Date(props.LiveData.eventStart);
        const eventEnd = new Date(props.LiveData.eventEnd);

        if (now > eventStart && now < eventEnd) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [props.LiveData]);

    const handleClick = () => {
        // Handler untuk event onClick pada button produk
        if (isButtonActive) {
            // Aksi ketika button aktif di-klik
            alert('Button clicked!');
        }
    };

    return (
        <div key={props.LiveData.id} class="col-6 col-lg-4 mb-3 grid-template-columns-repeat">
            <div class="card h-100 position-relative" data-toggle="tooltip" data-placement="top" >
                <img class="card-img-top " src={props.LiveData.image}></img>
                <div class="card-body p-3 d-flex flex-column justify-content-between">
                    <h6 class="d-flex align-items-center">
                        <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                        <span>
                            {props.LiveData.name}
                        </span>
                    </h6>
                    <h6 class="text-muted small ">{props.LiveData.chanel}</h6>
                    <div class="text-muted small row ">
                        <div class='col'>{props.LiveData.date}</div>
                        <div class='col-sm'><p>{props.LiveData.time}</p></div>
                    </div>
                    <h6>
                        <span class="text-truncate">
                            {props.LiveData.price}
                        </span>
                    </h6>
                    <button  onClick={handleClick} disabled={!isButtonActive} className={isButtonActive ? 'buy-button active' : 'buy-button disabled'}>{isButtonActive ? 'Join Live' : 'Live Tidak Tersedia'}</button>
                    <div className='text-center mt-3  ' >
                    <Link to={'/livestreaming/'+ props.LiveData.id}className='link'>Detail</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
