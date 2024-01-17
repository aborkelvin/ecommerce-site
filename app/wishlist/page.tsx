'use client';
import React from 'react'
import { useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { RootState } from '../types';
import Product from '@/components/product';

const WishListPage = () => {
    
    const wishListData = useSelector((state:RootState) => state.wishList)
    console.log(wishListData)

    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] py-20 " >
            
            <div className='mb-[60px] flex items-center justify-between gap-10' >
                <h3 className='text-base md:text-xl' > Wishlist ({wishListData.length}) </h3>

                <button className='px-6 md:px-12 py-2 md:py-4 rounded border-[1px] border-[rgb(0,0,0,0.5)] text-sm md:text-base hover:bg-[#db4444] hover:text-white ' >
                    Move All To Cart
                </button>
            </div>

            {/* <div className="flex items-center justify-around sm:justify-start flex-wrap md:gap-y-14 wishlistdisplay"> */}
            <div className='wishlistdisp px-5 gap-y-20 md:gap-y-14 ' >
                {
                    wishListData.map((product, i) => (
                        <Product
                            key={i}
                            productImage={product.productImage}
                            productName={product.productName}
                            percentageOff={product.percentageOff}
                            productOffPrice={product.productOffPrice}
                            productPrice={product.productPrice}
                            rating={product.rating}
                            review={product.review}
                        />
                    ) )
                }
            </div>
        </div>
    )
}

export default WishListPage
