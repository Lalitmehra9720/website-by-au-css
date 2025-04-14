import React from 'react';
import { assets } from '../assets/assests';
import {toast} from "au-css/js/toast.js";

const Product = () => {
    const toaster=()=>{
        toast({type: "success", title: "Product is added"})
    }
    const toaster1=()=>{
        toast({type: "success", title: "You have buy the Product"})
    }
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='py-[10px]'>
            <p className='font-roboto text-lg '>Product</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-2' >
        {
        assets.map((items,index)=>(
            <div key={index} className='card card-hover w-[300px] m-3  '>
                <img src={items.product_link} alt="" className='card-image h-[250px]' />
                <div class=" flex flex-col items-center justify-center card-body p-3">
        <h2 class="text-[20px]   m-2">{`₹${items.product_price}`}</h2>
        <p class="text-[30px] font-roboto ">{items.product_name}</p>
      </div>
      <div className='flex gap-[50px] items-end justify-center'>
        <button onClick={toaster}  className='w-[8vw] h-[25px] text-sm rounded-full bg-[#ffd814] border-3 cursor-pointer'>Add Cart</button>
        <button onClick={toaster1} className='w-[8vw] h-[25px] text-sm rounded-full bg-[#ffa41c] border-3 cursor-pointer' >Buy now</button>
      </div>
     </div>
        ))
      }
        </div>
     
    </div>
  );
}

export default Product;
