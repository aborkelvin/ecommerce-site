import Link from "next/link";


export async function generateStaticParams() {
    
    const products = [
        {
            name: "Havic HV G-92 Gamepad",
            price: 192.00,
            description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
            images: [
                "/images/products/detail/Frame 894.png",
                "/images/products/detail/Frame 895.png",
                "/images/products/detail/Frame 896.png",
                "/images/products/detail/Frame 897.png",                
            ],
            banner: "/images/products/detail/Frame 919.png",
        },
        {
            name: "Obrio Microwave Sheets",
            price: 72.00,
            description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
            images: [
                "/images/products/detail/Frame 894.png",
                "/images/products/detail/Frame 895.png",
                "/images/products/detail/Frame 896.png",
                "/images/products/detail/Frame 897.png",                
            ],
            banner: "/images/products/detail/Frame 919.png",
        },
    ]

    return products;
}


function Page() {
    
    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] pb-20 pt-[40px] md:pt-[80px] " >
            <div className="flex flex-col xl:flex-row w-full gap-10 md:gap-[60px] lg:gap-24 xl:gap-40 2xl:gap-44 ">
                <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-[30px] " >
                    <div className="flex flex-row justify-between md:flex-col gap-1 md:gap-4 h-full " >
                        <img src="/images/products/detail/Frame 895.png" alt="product image" className="w-[60px] phones:w-[72px] xphones:w-[92px] md:w-auto h-auto md:flex-1 object-cover max-w-[250px] " />
                        <img src="/images/products/detail/Frame 896.png" alt="product image" className="w-[60px] phones:w-[72px] xphones:w-[92px] md:w-auto h-auto md:flex-1 object-cover" />
                        <img src="/images/products/detail/Frame 897.png" alt="product image" className="w-[60px] phones:w-[72px] xphones:w-[92px] md:w-auto h-auto md:flex-1 object-cover" />
                        <img src="/images/products/detail/Frame 919.png" alt="product image" className="w-[60px] phones:w-[72px] xphones:w-[92px] md:w-auto h-auto md:flex-1 object-cover" />
                    </div>
                    <img src="/images/products/detail/Frame 894.png" alt="product image" className="h-full" />
                </div>
                
                <div className=" w-full lg:max-w-[700px] xl:max-w-[400px] ">
                    <h1 className="mb-2 md:mb-4 text-[20px] md:text-[24px] font-semibold  " >
                        Havic HV G-92 Gamepad
                    </h1>
                    <div className="mb-2 md:mb-4 flex gap-2 phones:gap-3 md:gap-4 items-center ">
                        <div className='flex gap-1 items-center relative bottom-[2px] ' >
                            <img src="/images/starred.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' />
                            <img src="/images/starred.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' />
                            <img src="/images/starred.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' />
                            <img src="/images/starred.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' />
                            <img src="/images/star.svg" alt="star" className='w-[15px] lg:w-5 h-[15px] lg:h-5 ' />
                        </div>
                        <span className="text-[14px] md:text-[16px] text-[#000000] opacity-50 " > (150 Reviews)</span>
                        <span className="text-[16px] text-[#000000] opacity-50 " > | </span>
                        <span className="text-[14px] md:text-base text-[#00FF66]  " >In stock</span>
                    </div>
                    <h2 className="mb-4 md:mb-6 text-[20px] md:text-[24px]" >
                        $192.00
                    </h2>
                    <p className="mb-6 text-[14px] md:text-base" >
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                    </p>
                    <hr className="mb-6 border-t-[2px] border-t-[rgb(0,0,0,0.5)] opacity-50 w-full " />
                    <div className="mb-6 flex items-center" >
                        <span className="text-[18px] md:text-[20px] mr-4 md:mr-6" >
                            Colours:
                        </span>
                        <div className="mr-2 w-6 h-6 border-black border-2 p-[2px] rounded-full " >
                            <div className="w-full h-full bg-[#A0BCE0] rounded-full " ></div>
                        </div>
                        <div className="w-6 h-6 bg-[#E07575] rounded-full " >

                        </div>
                    </div>
                    <div className="mb-6 flex items-center" >
                        <span className="text-[18px] md:text-[20px] mr-4 md:mr-6" >
                            Size:
                        </span>
                        <div className="flex gap-2 phones:gap-3 md:gap-4"  >
                            <div className="w-8 h-8 p-[2px] text-[14px] font-medium border-[rgb(0,0,0,0.5)] border-[1px] 
                                rounded flex items-center justify-center cursor-pointer " > 
                                XS
                            </div>
                            <div className="w-8 h-8 p-[2px] text-[14px] font-medium border-[rgb(0,0,0,0.5)] border-[1px] 
                                rounded flex items-center justify-center cursor-pointer " > 
                                S
                            </div>
                            <div className="w-8 h-8 p-[2px] text-[14px] font-medium bg-[#DB4444] text-white
                                rounded flex items-center justify-center " > 
                                M
                            </div>
                            <div className="w-8 h-8 p-[2px] text-[14px] font-medium border-[rgb(0,0,0,0.5)] border-[1px] 
                                rounded flex items-center justify-center cursor-pointer " > 
                                L
                            </div>
                            <div className="w-8 h-8 p-[2px] text-[14px] font-medium border-[rgb(0,0,0,0.5)] border-[1px] 
                                rounded flex items-center justify-center cursor-pointer " > 
                                XL
                            </div>
                        </div>
                    </div>

                    <div className=" mb-6 md:mb-10 flex gap-3 md:gap-4 items-center" >
                        <div className="flex border-[1px] border-[rgb(0,0,0,0.5)] h-10 md:h-[44px] w-[140px] phones:w-[160px] rounded " >
                            <button className="text-base md:text-xl hover:bg-[#DB4444] text-black hover:text-white border-r-[1px] border-r-[rgb(0,0,0,0.5)] w-[38%] h-full flex items-center justify-center ">
                                -
                            </button>
                            <div className="text-base md:text-lg w-full h-full flex items-center justify-center border-r-[1px] border-r-[rgb(0,0,0,0.5)] ">
                                2
                            </div>
                            <button className="text-base md:text-xl hover:bg-[#DB4444] text-black hover:text-white w-[38%] h-full flex items-center justify-center  ">
                                +
                            </button>
                        </div>
                        <button className="bg-[#DB4444] w-[145px] md:w-[165px] h-10 md:h-11 rounded font-medium text-white " >
                            Buy Now
                        </button>
                        <div className="w-10 h-10 md:h-11 p-[2px] text-[14px] font-medium border-[rgb(0,0,0,0.5)] border-[1px] 
                                rounded flex items-center justify-center " > 
                            <img src="/images/like.svg" alt="" />
                        </div>                        
                    </div>

                    <div className="border-[1px] border-[rgb(0,0,0,0.5)] w-full py-4 md:py-6 rounded " >
                        <div className=" pb-4 px-3 phones:px-4 flex gap-4 items-center "  >
                            <img src="/images/products/detail/icondelivery.svg" alt="delivery icon" className="w-9 md:w-10 h-10" />
                            <div>
                                <h4 className="font-medium mb-1 phones:mb-2" >
                                    Free Delivery
                                </h4>                                
                                <Link href = '#' >
                                    <p className="text-[13px] font-medium underline " >
                                        Enter your postal code for Delivery Availability
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="border-t-[1px] border-t-[rgb(0,0,0,0.5)] pt-4 px-3 phones:px-4 flex gap-4 items-center " >
                            <img src="/images/products/detail/Icon-return.svg" alt="delivery icon" className="w-9 md:w-10 h-10" />
                            <div>
                                <h4 className="font-medium mb-1 phones:mb-2" >
                                    Return Delivery
                                </h4>                                
                                <p className="text-[13px] font-medium" >                                      
                                    Free 30 Days Delivery Returns. <Link href='#' className="underline"  > Details </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page;