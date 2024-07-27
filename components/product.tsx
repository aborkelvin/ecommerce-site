'use client';

import { nanoid } from '@/node_modules/nanoid/index';

import React from 'react'
import { useDispatch, UseDispatch, useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { addProductToWishList } from '@/app/redux/features/wishlist';
import { RootState } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/navigation';

export interface productProps {
    productImage: string;
    productName: string;
    percentageOff?: number;
    productOffPrice?: number;
    productPrice: number;
    rating?: number;
    review?: number;
}

const Product = ({ productImage, productName, percentageOff, productOffPrice, productPrice, rating, review }: productProps) => {
    const dispatch = useDispatch()

    const router = useRouter()

    const addtoWishList = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        event.preventDefault()

        // Get current wishlist and verify this product isnt in wishList yet
        //const wishList = useSelector((state:RootState) => state.wishList)

        // First Update the wishlist in redux and then update the wishlist in the database
        dispatch(addProductToWishList({
            productImage,
            productName,
            percentageOff,
            productOffPrice,
            productPrice,
            rating,
            review
        }))

        // Update wishlist in local storage for those that are not logged in

        // If wishlist in database fails, then revert the wishlist in redux to the previous state else do nothing
    }

    const addtoCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        event.preventDefault()

        // Get current cart and verify this product isnt in cart yet
        //const wishList = useSelector((state:RootState) => state.wishList)

        // First Update the wishlist in redux and then update the wishlist in the database
        /* dispatch(addProductToWishList({
            productImage,
            productName,
            percentageOff,
            productOffPrice,
            productPrice,
            rating,
            review
        })) */

        // Update wishlist in local storage for those that are not logged in

        // If wishlist in database fails, then revert the wishlist in redux to the previous state else do nothing
    }


    const ratingStars = () => {
        
        if (rating) {
            let stars = []
            for (let i = 0; i < rating; i++) {
                const userId = nanoid()
                stars.push(<img src="/images/starred.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' key={userId} />)
            }            

            let unratedstars = 5 - rating
            for (let i = 0; i < unratedstars; i++) {
                const userId = nanoid()
                stars.push(<img src="/images/star.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' key={userId} />)
            }
            
            return stars
        }
    }

    return (
        <div className='flex flex-col gap-4 min-w-[270px] scroll-item'>
            <div className='bg-[#F5F5F5] pt-3 px-3 relative h-[250px] flex items-center group cursor-pointer'
                onClick={() => {
                    router.push(`/${productName}`)
                }}
            >
                {percentageOff &&
                    <div className="absolute top-3 left-3 bg-[#DB4444] rounded px-2 py-1 " >
                        <span className="text-[#FAFAFA] text-xs font-semibold " > - {percentageOff}% off</span>   
                    </div>
                }
                <div className="absolute top-3 right-3 ">
                    <img
                        src="/images/fillheart.svg"
                        alt="add to wishlist"
                        className='mb-2 cursor-pointer'
                        onClick={addtoWishList}
                    />
                    <img src="/images/filleye.svg" alt="view" className='cursor-pointer' />
                </div>

                <img src={productImage} alt={productName} className='object-contain mx-auto max-w-[190px] ' />

                <button className='w-full absolute py-2 bg-black text-white font-medium text-center bottom-0 left-0
                    lg:hidden group-hover:block ' onClick={addtoCart} >
                    Add To Cart
                </button>
            </div>
            <div className='flex flex-col gap-1' >
                <span className='text-base font-medium' >{productName}</span>
                <p className='text-base font-medium' >
                    <span className={`${productOffPrice == null ? 'hidden' : ''} text-[#DB4444] mr-3`} >${productOffPrice}</span>
                    <span className={` ${productOffPrice == null ? 'text-[#DB4444]' : 'text-[rgb(0,0,0,0.5)] line-through decoration-[rgb(0,0,0,0.5)]'}  `} >${productPrice}</span>
                </p>
                <div className='flex gap-2 items-center' >
                    <div className='flex gap-1 items-center' >
                        {
                            rating ? ratingStars()?.map((star) => {
                                return star
                            }
                            ) : <span className='text-[rgb(0,0,0,0.5)]' >No rating yet</span>
                        }
                    </div>
                    <span className='pt-1 text-[rgb(0,0,0,0.5)] ' >
                        ({review})
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Product
