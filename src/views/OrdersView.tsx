'use client'
import { useAuth } from '@/context/AuthContext'
import { getOrders } from '@/helpers/orders.helper';
import { IOrder } from '@/types';
import React, { useEffect, useState } from 'react'

const OrdersView = () => {
    const {userData} = useAuth();   
    const [orders, setOrders] = useState<IOrder[]>([]);

    const handleGetOrders = async () => {
        const response = await getOrders(userData?.token!)
        setOrders(response)
    }

    useEffect(() => {
        handleGetOrders();
    }, [])
    
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
        {
            orders.length ? (
                orders.map((order) => {
                    return (
                        <div className='flex flex-col gap-1 items-start justify-center' key={order.id}>
                            <p>Order N°: {order.id}</p>
                            <p>Status: {order.status.toLocaleUpperCase()}</p>
                            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                            {
                                order.products.map((product) => {
                                    return (
                                        <div key={product.id}>
                                            <p>{product.name}</p>
                                            <p>Price: ${product.price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            ) : (
                <div> You don't have orders </div>
            )
        }
    </div>
  )
}

export default OrdersView