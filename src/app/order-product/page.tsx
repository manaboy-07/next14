"use client"

import React from 'react'
import { useRouter } from 'next/router'
function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log('Place your order')
        router.push('/')
        //router.back, forward, replace
    }
  return (
    <div>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default OrderProduct