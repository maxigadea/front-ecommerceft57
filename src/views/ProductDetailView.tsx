'use client'
import { useAuth } from '@/context/AuthContext'
import { IProduct } from '@/types'
import Image from 'next/image'
import React from 'react'

const ProductDetailView: React.FC<IProduct> = ({name, id, description, stock, price, image, categoryId}) => {
  const {userData} = useAuth();
  const handleAddToCart = () => {
    if(!userData?.token) {
      alert("You must be logged to add products")
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((item: IProduct) => {
        if(item.id === id) return true;
        return false
      })
      if(productExist) {
        alert("This product is in your cart")
      } else {
        cart.push({
          name,
          id,
          description,
          stock,
          price,
          image, 
          categoryId
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Product added to your cart")
      }
    }
  }

  return (
    <div>
        <h1>{name}</h1>
        <Image src={image} alt={`${name} - Product Image - ${description}`} width={600} height={600} />
        <p>{description}</p>
        <p>Stock: {stock} Units</p>
        <p>Price: ${price}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default ProductDetailView 