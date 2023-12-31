'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/type'; 
import { Heart } from 'lucide-react';
import FormattedPrice from './FormattedPrice';

interface Item {
  products: ProductType[];
}

export const Product = ({ products }: Item) => {
  
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10 relative text-center'>
        {products.map((item) => (
          <div key={item.id} className='relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden'>
            <Link href={{pathname:`/${item?._id}`,query:{_id:item?._id}}}>
              <Image
                src={item?.image}
                alt="Product image"
                width={270}
                height={300}
                className=' h-80 object-cover group-hover:scale-105 duration-300'
              />
            </Link>
            <Heart fill='black' className='absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200'/>
            <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
                <p className="group-hover:text-designColor durtation-300">{item?.title}</p>
                <p className='font-semibold'><FormattedPrice amount={item?.price}/></p>
                <div className="flex item-center justify-between text-sm mt-2">
                    <button className="uppercase font-semibold hover:text-designColor duration-200">Add to cart</button>
                    <Link className='uppercase font-semibold ' href={"/"}>More Info</Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
