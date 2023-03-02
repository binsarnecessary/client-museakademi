import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

import * as Icon from 'react-bootstrap-icons'
import { Form } from 'react-bootstrap';
import { Incoming } from '../Home/Incoming/Incoming';
import productData from './CardData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Course = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    }
    const filteredProducts = selectedCategory ? productData.filter(productData => productData.category === selectedCategory) : productData;

    return (
        <>
        
        <Navbar/>

            <div className="container my-5 ">
                <div className="row mt-lg-5">
                    <div className="col-12 mb-3">
                        <h5>Kursus</h5>
                        <p class="small">Temukan Kursus yang Sesuai dengan Minat Anda</p>
                    </div>
                </div>

                <div class="row">

                    <div class="col-12 col-lg-3 mb-3">
                        <p class="text-muted small mb-2">Pencarian</p>
                        <form id="formFilter" method="get">
                            <div class="input-group mb-3">
                                <input class="form-control" type="search" aria-label="search-input" placeholder="Cari kursus, kategori, mentor" />
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
                                    label="Animasi"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => handleCategorySelect('Animasi')}

                                />
                                <Form.Check
                                    type="radio"
                                    label="Desain"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => handleCategorySelect('Desain')}

                                />
                                <Form.Check
                                    type="radio"
                                    label="User Interface"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => handleCategorySelect('User Interface')}

                                />
                                <Form.Check
                                    type="radio"
                                    label="Fashion"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => handleCategorySelect('Fashion')}

                                />
                                <Form.Check
                                    type="radio"
                                    label="Semua"
                                    name="radioOption"
                                    value="option1"
                                    onChange={() => handleCategorySelect(null)}
                                />
                            </Form>
                        </div>
                        <div class="text-muted small mt-2">
                            Harga
                        </div>
                        <div> 
                            {/*Here last update  22 02 2023*/}
                        <Form.Range />
                        </div>
                    </div>
                    <div className='col'>
                        <section className='row'>
                            {filteredProducts.map((productData) => (
                                <div key={productData.id} class="col-6 col-lg-4 mb-3 grid-template-columns-repeat">
                                    <div class="card h-100 position-relative" data-toggle="tooltip" data-placement="top" >
                                        <img class="card-img-top " src={productData.image}></img>
                                        <div class="card-body p-3 d-flex flex-column justify-content-between">
                                            <h6 class="d-flex align-items-center">
                                                <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                                                <span>
                                                    {productData.name}
                                                </span>
                                            </h6>
                                            <div class="text-muted small ">
                                                {productData.date}
                                            </div>
                                            <h6>
                                                <span class="text-truncate">
                                                    {productData.price}
                                                </span>
                                                <span class="badge badge-success">{productData.gratis}
                                                </span>
                                            </h6>
                                            <h6><Link to={'/course/' + productData.id} target='_top' class="btn btn-danger btn-sm btn-block text-center" >Ikuti Kursus</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
