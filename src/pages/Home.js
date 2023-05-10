import React from 'react'
import {products } from '../data'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <div className='grid mx-auto max-w-6xl space-y-10 space-x-5 min-h-[80-vh] xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product)=> (
          <Product key={product.id} product ={product}/>
        ))}
      </div>   
    </>
  )
}

export default Home