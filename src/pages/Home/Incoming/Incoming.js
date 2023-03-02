import React from 'react'
import productData from '../../Kursus/CardData'
import ProductList from './ProductList'

export const Incoming = () => {
  return (
    <div>
        <ProductList productData={productData} label="Akan Datang"/>
    </div>
  )
}
