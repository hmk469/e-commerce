'use client'
import React from 'react';
import Container from './Container';
import { Link, PhoneCall, ScanFace, Smartphone, Watch } from 'lucide-react';
import { Product } from './Product';
import { getProducts } from '@/helpers';

const Products = async() => {
  const products = await getProducts();
  return (
    <div className='mt-10'>
      <Container>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center w-[70%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae fugit nostrum possimus odio quas laboriosam hic optio sunt totam, ea, ipsum porro consequatur ab asperiores unde magni alias delectus facere.
          </p>
        
          <div className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
            <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
              <Smartphone />
             
            </Link>
            <p>Phone</p>
            <div className='h-7 w-[1px] bg-designColor inline-flex'></div>

            <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
              <PhoneCall />
             
            </Link>
            <p>Phone call</p>
            <div className='h-7 w-[1px] bg-designColor inline-flex'></div>

            <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
              <Watch />
             
            </Link>
            <p>Watch</p>
            <div className='h-7 w-[1px] bg-designColor inline-flex'></div>
            <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
              <ScanFace />
             
            </Link>
            <p>Accessories</p>

          </div>

          <Product products ={products}/>

        </div>

      </Container>
    </div>
  );
}

export default Products;
