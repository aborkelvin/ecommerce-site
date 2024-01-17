'use client'
import React from "react"
import Product from "@/components/product"
import CategoryItem from "@/components/categoryItem"
import Image from "@/node_modules/next/image"
import {products, categories} from "@/lib/data"
import { useRef, useState } from "react"
import { useSelector } from "@/node_modules/react-redux/dist/react-redux"
import Link from '@/node_modules/next/link'
import { RootState } from "./types"







const Home = () => {
    
    const products = useSelector((state: RootState) => state.products)

    const productScrollContainerRef = useRef<HTMLDivElement>(null);
    const categoryScrollContainerRef = useRef<HTMLDivElement>(null);

    const [scrollState, setScrollState] = useState({
        products: {
            isAtRightEnd: false,
            isAtLeftEnd: false,
        },
        categories: {
            isAtRightEnd: false,
            isAtLeftEnd: false,
        }
    });

    const handleScroll = (containerRef: React.RefObject<HTMLDivElement>, direction:'left' | 'right' ) => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            const scrollItemWidth = (scrollContainer?.firstChild as HTMLElement).offsetWidth;
            const visibleItemCount = Math.floor(scrollContainer.offsetWidth / scrollItemWidth);
            const scrollAmount = scrollItemWidth * visibleItemCount;

            if (direction === 'left') {
                scrollContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                })
            } else {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }

            /* // After scrolling stops, adjust to the beginning of the left edge element
            setTimeout(() => {
            scrollContainer.scrollTo({
                left: Math.floor(scrollContainer.scrollLeft / scrollItemWidth) * scrollItemWidth,
                behavior: 'smooth',
            });
            }, 50000); */

            
            // Check if we are at the end of the scroll container            
            handleScrollCheck(containerRef)            
        }
    };

    const handleScrollCheck = (containerRef: React.RefObject<HTMLDivElement>) => {
        const scrollContainer = containerRef.current;        

        // Check if we are at the end of the scroll container and set the scroll state
        if(scrollContainer){
            
            // first check if there's no scroll and display all the arrows
            if (scrollContainer.scrollWidth <= scrollContainer.offsetWidth) {  
                //alert('no scroll')
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    products: {
                        isAtRightEnd: containerRef == productScrollContainerRef ?  false : prevScrollState.products.isAtRightEnd,
                        isAtLeftEnd: containerRef == productScrollContainerRef ? false : prevScrollState.products.isAtLeftEnd ,
                    },
                    categories: {
                        isAtRightEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtRightEnd,
                        isAtLeftEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtLeftEnd,                   
                    
                    }
                }));
                return;
            }

            if (Math.ceil(scrollContainer.scrollLeft + scrollContainer.offsetWidth) >= Math.floor(scrollContainer.scrollWidth)) {                
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    products: {
                        isAtRightEnd: containerRef == productScrollContainerRef ?  true : prevScrollState.products.isAtRightEnd,
                        isAtLeftEnd: containerRef == productScrollContainerRef ? false : prevScrollState.products.isAtLeftEnd ,
                    },
                    categories: {
                        isAtRightEnd: containerRef == categoryScrollContainerRef ? true : prevScrollState.categories.isAtRightEnd,
                        isAtLeftEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtLeftEnd,                    
                    }
                }));
                //alert('right')
            }else if (scrollContainer.scrollLeft <= 0) {
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    products: {
                        isAtRightEnd: containerRef == productScrollContainerRef ?  false : prevScrollState.products.isAtRightEnd,
                        isAtLeftEnd: containerRef == productScrollContainerRef ? true : prevScrollState.products.isAtLeftEnd ,
                    },
                    categories: {
                        isAtRightEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtRightEnd,
                        isAtLeftEnd: containerRef == categoryScrollContainerRef ? true : prevScrollState.categories.isAtLeftEnd,                    
                    
                    }
                }));
                //alert('left')
            } else {
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    products: {
                        isAtRightEnd: containerRef == productScrollContainerRef ?  false : prevScrollState.products.isAtRightEnd,
                        isAtLeftEnd: containerRef == productScrollContainerRef ? false : prevScrollState.products.isAtLeftEnd ,
                    },
                    categories: {
                        isAtRightEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtRightEnd,
                        isAtLeftEnd: containerRef == categoryScrollContainerRef ? false : prevScrollState.categories.isAtLeftEnd,                    
                    
                    }
                }));
                //alert('middle')
            }
        }   
    }

    const [selectedCategory, setSelectedCategory] = useState(categories[0].categoryName)


    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] pb-20 " >
            <div className="hidden lg:flex mb-[70px] md:mb-[150px] " >
                <div className=" md:border-r-[0.5px] border-[rgb(0,0,0,0.3)] pt-10 pr-4 pb-1  " >
                    <ul className="flex gap-4 flex-col" >
                        <li className='cursor-pointer flex gap-[51px] justify-between' >
                            <span>Women's Fashion</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Men's Fashion</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Electronics</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Medicine</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Sports & Outdoor</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Baby’s & Toys</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Groceries & Pets</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Health & Beauty</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>
                        <li className='cursor-pointer flex justify-between' >
                            <span>Home & Lifestyle</span>
                            <Image
                                src="/images/dropdown.svg"
                                alt="arrow image"
                                width={24}
                                height={24}                                
                            />
                        </li>                        
                    </ul>
                </div>
                <div className="pl-[45px] pt-[40px] flex-grow flex-shrink-0 max-w-[80%] xl:max-w-[85%] hidden md:block " >
                    {/* <Image
                        src="/images/banner.png"
                        alt="banner image"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className='cursor-pointer'
                    /> */}
                    <img
                        src="/images/banner.png"
                        alt="banner image   "
                        className="w-full h-[300px] xl:h-[350px]" />
                </div>
            </div>

            <div className="pt-10 lg:pt-0 flex gap-4 items-center mb-6" >
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm " ></div>
                <span className="text-[#DB4444] font-semibold text-base " >Today's</span>
            </div>

            <div className="mb-10 flex flex-row justify-between md:items-center" >
                <div className="flex md:items-center flex-col md:flex-row gap-3 md:gap-4 lg:gap-14 xl:gap-[100px] ">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold xphones:pt-1 md:pt-3 " >Flash Sales</h3>
                    <div className="flex gap-1 phones:gap-2 md:gap-4 items-center " >
                        <section className="flex flex-col gap-[0px]" >
                            <span className="text-xs font-medium " >
                                Days
                            </span>
                            <span className="text-2xl md:text-[32px] font-bold " >
                                03
                            </span>
                        </section>
                        <img src="/images/semiclone.svg" alt="time semicolon divider" className="pt-4" />
                        <section className="flex flex-col gap-[0px]" >
                            <span className="text-xs font-medium " >
                                Hours
                            </span>
                            <span className="text-2xl md:text-[32px] font-bold " >
                                16
                            </span>
                        </section>
                        <img src="/images/semiclone.svg" alt="time semicolon divider" className="pt-4" />
                        <section className="flex flex-col gap-[0px]" >
                            <span className="text-xs font-medium " >
                                Minutes
                            </span>
                            <span className="text-2xl md:text-[32px] font-bold " >
                                42
                            </span>
                        </section>
                        <img src="/images/semiclone.svg" alt="time semicolon divider" className="pt-4" />
                        <section className="flex flex-col gap-[0px]" >
                            <span className="text-xs font-medium " >
                                Seconds
                            </span>
                            <span className="text-2xl md:text-[32px] font-bold " >
                                56
                            </span>
                        </section>
                        
                    </div>
                </div>
                <div className="flex gap-2" >
                    <img src="/images/leftarrow.svg" alt="left arrow" className={` ${scrollState.products.isAtLeftEnd ? ' opacity-5 ' : 'cursor-pointer'}  left-arrow w-8 md:w-[46px] h-8 md:h-[46px] `}
                        onClick={() => {
                            handleScroll(productScrollContainerRef, 'left')
                        }}
                    />
                    <img src="/images/rightarrow.svg" alt="right arrow " className={` ${scrollState.products.isAtRightEnd ? ' opacity-5 ' : 'cursor-pointer'}  right-arrow w-8 md:w-[46px] h-8 md:h-[46px] `}
                        onClick={() => {
                            handleScroll(productScrollContainerRef, 'right')
                        }}
                    />
                </div>

            </div>

            <div className="flex gap-4 md:gap-7 xl:gap-10 overflow-x-auto scrollContainer" ref={productScrollContainerRef}
                onScroll={() => {
                    handleScrollCheck(productScrollContainerRef)
                }}
                >
                {
                    products.filter(product => product.hasOwnProperty('percentageOff')).map((product, i) => (
                        <Product
                            key={i}
                            productImage={product.productImage}
                            productName={product.productName}
                            percentageOff={product.percentageOff}
                            productOffPrice={product.productOffPrice}
                            productPrice={product.productPrice}
                            rating={product.rating}
                            review = {product.review}
                        />
                    ))
                }
            </div>

            <button className="mx-auto my-[60px] block py-2 md:py-3 lg:py-4 px-6 md:px-7 lg:px-12 bg-[#DB4444] rounded text-sm md:text-base text-[#FAFAFA] font-semibold " >
                View All Products
            </button>
            <hr className="mb-20 h-[1px] bg-[rgb(0,0,0,0.3)] " />
            
            <div className="flex gap-4 items-center mb-5" >
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm " ></div>
                <span className="text-[#DB4444] font-semibold text-base " >Categories</span>
            </div>
            <div className="mb-[60px] flex flex-row justify-between md:items-center" >
                <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold xphones:pt-1 md:pt-3 " >
                    Browse By Category
                </h3>
                <div className="flex gap-2" >
                    <img src="/images/leftarrow.svg" alt="left arrow" className={` ${scrollState.categories.isAtLeftEnd ? ' opacity-5 ' : 'cursor-pointer'}  left-arrow w-8 md:w-[46px] h-8 md:h-[46px] `}
                        onClick={() => {
                            handleScroll(categoryScrollContainerRef, 'left')
                        }}
                    />
                    <img src="/images/rightarrow.svg" alt="right arrow " className={` ${scrollState.categories.isAtRightEnd ? ' opacity-5 ' : 'cursor-pointer'}  right-arrow w-8 md:w-[46px] h-8 md:h-[46px] `}
                        onClick={() => {
                            handleScroll(categoryScrollContainerRef, 'right')
                        }}
                    />
                </div>
            </div>
            <div className="flex gap-4 md:gap-7 xl:gap-10 md:justify-between overflow-x-auto scrollContainer " ref={categoryScrollContainerRef}
                onScroll={() => {
                    handleScrollCheck(categoryScrollContainerRef)
                } }
                >
                {
                    categories.map((category, i) => (
                        <CategoryItem
                            key={i}
                            categoryName={category.categoryName}
                            categoryImage={category.categoryImage}
                            selectedCategoryImage={category.selectedCategoryImage}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    ))
                }
            </div>
            <hr className="my-[70px] h-[1px] bg-[rgb(0,0,0,0.3)] " />
            
            <div className="flex gap-4 items-center mb-5" >
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm " ></div>
                <span className="text-[#DB4444] font-semibold text-base " >This Month</span>
            </div>
            <div className="mb-[60px] flex flex-row justify-between md:items-center" >
                <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold xphones:pt-1 md:pt-3 " >
                    Best Selling Products
                </h3>
                <button className="py-2 md:py-3 lg:py-4 px-6 md:px-7 lg:px-12 bg-[#DB4444] rounded text-sm md:text-base text-[#FAFAFA] font-semibold " >
                    View All
                </button>
            </div>
            
            <div className="mb-[140px] flex md:justify-between gap-4 md:gap-7 xl:gap-10 overflow-x-auto scrollContainer ">
                {
                    // Currently filters out products with percentageOff property but will be later changed to filter in products with best selling property
                    products.filter((product => !product.hasOwnProperty('percentageOff'))).map((product, i) => (
                        <Product
                            key={i}
                            productImage={product.productImage}
                            productName={product.productName}                            
                            productOffPrice={product.productOffPrice}
                            productPrice={product.productPrice}
                            rating={product.rating}
                            review = {product.review}
                        />
                    ))
                }
            </div>

            <div className="mb-[71px] md:h-[500px] py-14 md:py-0 px-5 md:px-0 w-full bg-gradient-to-r from-black to-gray-800 color-[#D9D9D9]
                rounded lg:rounded-none flex flex-col-reverse md:flex-row md:items-center gap-[70px] md:gap-0
            " >
                <div className="flex-1 flex flex-col gap-5 lg:gap-8 md:py-[69px] md:pl-5 lg:pl-[56px] xl:pl-[80px] " >
                    <span className=" text-[#0F6] font-semibold text-base " >
                        Categories
                    </span>
                    <span className="text-[#FAFAFA] text-[48px] leading-[60px] font-semibold" >Enhance Your <br /> Music Experience</span>
                    <div className="flex gap-2 phones:gap-3 md:gap-6 " >
                        <div className="bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center" >
                            <span className="font-semibold" >4</span>
                            <span className="text-xs -mt-1 " >Days</span>
                        </div>
                        <div className="bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center" >
                            <span className="font-semibold" >23</span>
                            <span className="text-xs -mt-1 " >Hours</span>
                        </div>
                        <div className="bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center" >
                            <span className="font-semibold" >48</span>
                            <span className="text-xs -mt-1 " >Minutes</span>
                        </div>
                        <div className="bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center" >
                            <span className="font-semibold" >10</span>
                            <span className="text-xs -mt-1 " >Seconds</span>
                        </div>
                    </div>
                    <button className="bg-[#0F6] rounded py-4 px-12 font-semibold text-[#FAFAFA] w-fit " >
                        Buy Now!
                    </button>
                </div>

                <div className="flex-1 w-full h-full flex items-center justify-start ">
                    <img src="/images/jblboombox.png" alt="jbl speaker" />
                </div>
            </div>

            <div className="flex gap-4 items-center mb-5" >
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm " ></div>
                <span className="text-[#DB4444] font-semibold text-base " >Our Products</span>
            </div>
            <div className="mb-[60px] flex flex-row justify-between md:items-center" >
                <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold xphones:pt-1 md:pt-3 " >
                    Explore Our Products
                </h3>
                <button className="py-2 md:py-3 lg:py-4 px-6 md:px-7 lg:px-12 bg-[#DB4444] rounded text-sm md:text-base text-[#FAFAFA] font-semibold " >
                    View All
                </button>
            </div>
            
            <div className="mb-[140px] flex md:justify-between gap-4 md:gap-7 xl:gap-10 overflow-x-auto scrollContainer ">
                {
                    products.filter((product => !product.hasOwnProperty('productOffPrice'))).map((product, i) => (                    
                        <Product
                            key={i}
                            productImage={product.productImage}
                            productName={product.productName}
                            productPrice={product.productPrice}
                            rating={product.rating}
                            review={product.review}
                        />
                    ))
                }
            </div>

            <div className="flex gap-4 items-center mb-5" >
                <div className="w-5 h-10 bg-[#DB4444] rounded-sm " ></div>
                <span className="text-[#DB4444] font-semibold text-base " >Featured</span>
            </div>
            <h3 className=" mb-[60px] text-xl md:text-3xl lg:text-4xl font-semibold xphones:pt-1 md:pt-3 " >
                New Arrivals
            </h3>

            <div className="mb-20 md:mb-[400px] lg:mb-[140px] flex flex-col lg:flex-row  md:h-[670px] gap-7 " >

                <div className="flex-1 bg-black h-full relative flex items-end justify-center min-h-[350px] phones:min-h-[450px] " >
                    <img src="/images/playstation.png" alt="ps5 playstation" className="" />
                    <div className="flex flex-col gap-1 md:gap-4 text-[#FAFAFA] absolute left-4 md:left-8  bottom-4 md:bottom-8 "  >
                        <span className="text-2xl font-semibold" >PlayStation 5</span>
                        <span className="text-lg xphones:text-xl" >Black and White version of the PS5 <br /> coming out on sale.</span>
                        <Link href={'/'} className = "font-medium underline text-lg " >
                            Shop Now
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 " >
                    
                    <div className="flex-1 bg-[rgb(0,0,0,0.95)] h-full relative flex items-end justify-end min-h-[240px] " >
                        <img src="/images/woman.png" alt="attractive woman posing in black background" className="h-full" />
                        <div className="flex flex-col gap-1 md:gap-3 text-[#FAFAFA] absolute left-4 md:left-8 bottom-4 md:bottom-8 "  >
                            <span className="text-2xl font-semibold" >Women’s Collections</span>
                            <span className="text-lg md:text-xl" >Featured woman collections that <br /> give you another vibe.</span>
                            <Link href={'/'} className = "font-medium underline text-lg " >
                                Shop Now
                            </Link>
                        </div>
                    </div>    
                    <div className="flex-1 h-full relative flex gap-1 md:gap-7 min-h-[170px] " >
                        
                        <div className="flex-1 bg-[rgb(0,0,0,0.95)] relative flex items-center justify-center  " >
                            <img src="/images/speakers.png" alt="speakers" className="max-w-[70%]" />
                            <div className="flex flex-col gap-[1px] md:gap-1 text-[#FAFAFA] absolute left-3 md:left-6 bottom-3 md:bottom-6 "  >
                                <span className="text-lg md:text-xl font-semibold" >Speakers</span>
                                <span className="text-base md:text-lg" >Amazon wireless speakers</span>
                                <Link href={'/'} className = "font-medium underline text-base md:text-lg " >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 bg-[rgb(0,0,0,0.95)] relative flex items-center justify-center " >
                            <img src="/images/perfume.png" alt="perfume" className="max-w-[60%]" />
                            <div className="flex flex-col gap-1 text-[#FAFAFA] absolute left-3 md:left-6 bottom-3 md:bottom-6 "  >
                                <span className="text-lg md:text-xl font-semibold" >Perfume</span>
                                <span className="text-base md:text-lg" >Gucci Intense OUD EDP</span>
                                <Link href={'/'} className = "font-medium underline text-base md:text-lg " >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className="mb-[62px] flex flex-col md:flex-row gap-14 md:gap-[88px] w-fit mx-auto " >
                <div className="flex flex-col text-center items-center" >
                    <img src="/images/Services.png" alt="delivery services" className="mb-6" />
                    <span className="text-xl font-semibold mb-2" >FREE AND FAST DELIVERY</span>
                    <span className="text-base" >Free delivery for all orders over $140</span>
                </div>
                <div className="flex flex-col text-center items-center" >
                    <img src="/images/Services2.png" alt="delivery services" className="mb-6" />
                    <span className="text-xl font-semibold mb-2" >24/7 CUSTOMER SERVICE</span>
                    <span className="text-base" >Friendly 24/7 customer support</span>
                </div>
                <div className="flex flex-col text-center items-center" >
                    <img src="/images/Services3.png" alt="delivery services" className="mb-6" />
                    <span className="text-xl font-semibold mb-2" >MONEY BACK GUARANTEE</span>
                    <span className="text-base" >We refund within 30 days</span>
                </div>
            </div>

            <img src="/images/leftarrow.svg" alt="up arrow" className=" rotate-90 m-0 ml-auto mb-8 cursor-pointer "
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
            />
            
        </div>
    )
}

export default Home
