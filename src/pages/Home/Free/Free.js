import React from 'react'
import productData from '../../Kursus/CardData'
import { ProductListFree } from './ProductListFree'

export const Free = () => {
  return (
    <ProductListFree productData={productData} label="Free"/>
  )
}
