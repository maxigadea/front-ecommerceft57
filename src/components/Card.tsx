import { IProduct } from '@/types'
import Link from 'next/link'
import React from 'react'

const Card: React.FC<IProduct> = ({name, image, price}) => {
  return (
   
<div className="max-w-[340px] w-full h-[200px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100  ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 ">Price - ${price}</p>
    </div>
</div>

  )
}

export default Card