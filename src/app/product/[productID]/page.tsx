import { getProductsById } from '@/helpers/products.helper'
import ProductDetailView from '@/views/ProductDetailView'
import React from 'react'

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ productID: string }>
}) => {
    const { productID } = await params 
    const product = await getProductsById(productID) 
    
    return <ProductDetailView {...product} />
}

export default ProductDetail
