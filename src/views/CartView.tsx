'use client'
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/orders.helper';
import { IProduct } from '@/types'
import React, { useEffect, useState } from 'react'

const CartView = () => {
    const {userData} = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const storedCart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
        if(storedCart) {
            let totalCart = 0;
            storedCart?.map((product) => {
                totalCart = totalCart + product.price
            })
            setTotal(totalCart)
            setCart(storedCart)
        }
    }, [])

    const handleCheckout = async () => {
        const idProducts = cart?.map((product) => product.id)
        await createOrder(userData?.token!, idProducts);
        localStorage.setItem("cart", "[]")
        setCart([])
        setTotal(0)
    }


  return (
    <div className='flex flex-row items-center justify-between w-full'>
        <div>
            {
            cart.length 
            ? 
            (cart.map((product) => {
                return (
                    <div>
                        <p>{product.name}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                )
            })) 
            : 
            (<p>You don't have products in your cart yet</p>)
            }
        </div>

        <div>
            <p>Total: ${total}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    </div>
  )
}

export default CartView