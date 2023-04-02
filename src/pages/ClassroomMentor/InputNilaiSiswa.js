import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const InputNilaiSiswa = () => {
 

  return (
    <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>Input Nilai</b></span>
                            </div>
                            <div className='form card-body'>
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Tugas Ke :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" className='form-control'></input>
                                </div>
                                </div>
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Judul :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="text" className='form-control' ></input>
                                </div>
                                </div>
                                <div className='row mb-3'>
                                <div className='col-10 col-lg-2'>
                                    <span>Nilai :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" className='form-control'></input>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-10 col-lg-2'>
                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>
  )
}

export default InputNilaiSiswa