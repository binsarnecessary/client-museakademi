import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ productData, label }) {
    const filteredProducts = productData.filter(productData => productData.label === label);

    return (
        <div>
            <section id="section-partner-courses" class="py-4">
                <div class="container">
                    <div class="row">
                        <div class="mb-3 col-12 d-flex align-items-center justify-content-between">
                            <div class="col justify-content-sm-center justify-content-lg-start">
                                <div class="section-header">
                                    <h5 class="text-white section-title">
                                        Kursus Akan Datang
                                    </h5>
                                </div>
                            </div>
                            <Link to={'/course'} target='_top' class="section-header-btn btn btn-sm btn-outline-light">Lihat Semua</Link>
                        </div>
                        <div class="mb-3 col-12">
                            <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                                {filteredProducts.map((productData) => (
                                    <div key={productData.id} class="mb-3 col-8 col-md-6 col-lg-3">
                                        <div class="card h-100 position-relative" data-toggle="tooltip" data-placement="top" title={productData.name}>
                                            <img class="card-img-top" src={productData.image} alt="cover"></img>
                                            <div class="card-body p-3 d-flex flex-column justify-content-between">
                                                <h6 class="d-flex align-items-center">
                                                    <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                                                    <span>
                                                        {productData.name}
                                                    </span>
                                                </h6>
                                                <div class="text-muted small">
                                                    {productData.date}
                                                </div>
                                                <h6>
                                                    <span class="text-truncate">
                                                        {productData.price}
                                                    </span>
                                                </h6>

                                                <h6><Link to={'/course/' + productData.id} target='_top' class="btn btn-danger btn-sm btn-block text-center">Ikuti Kursus</Link></h6>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProductList;
