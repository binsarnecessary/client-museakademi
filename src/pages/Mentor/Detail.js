import React from 'react'
import DetailData from './DetailData'


export const Detail = () => {
    return (

        <section id="section-courses" class="py-2">
                        <div  class="container">
                            <div class="row">
                                <div class="mb-3 col-12">
                                    <div class="flex-row overflow-auto list-courses d-flex flex-nowrap align-items-stretch">
                                    {DetailData.map((item) => (
                                        <div key={item.id} class="mb-3 col-8 col-md-6 col-lg-3">
                                            <div class="card h-100 position-relative" data-toggle="tooltip" data-placement="top" title="Seni Budaya dan Keterampilan - Seni Rupa 2 Dimensi">
                                                <img class="card-img-top" src={item.image} alt="cover"></img>
                                                <div class="card-body p-3 d-flex flex-column justify-content-between">
                                                    <h6 class="d-flex align-items-center">
                                                        <span class="badge badge-pill badge-primary p-1 mr-2"></span>
                                                        <span>
                                                            {item.name}
                                                        </span>
                                                    </h6>
                                                    <div class="text-muted small">
                                                        {item.date}
                                                    </div>
                                                    <h6>
                                                        <span class="text-truncate">
                                                            {item.price}
                                                        </span>
                                                    </h6>
                
                                                </div>
                                            </div>
                                        </div>
                                        ))}  
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        
                    </section>  
        
         
    )
}
