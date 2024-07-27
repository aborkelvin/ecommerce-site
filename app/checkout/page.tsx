import Image from "next/image";

function Checkout() {
    
    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] py-20" >
            <h1 className=" mb-8 lg:mb-10 text-3xl lg:text-5xl text-center lg:text-left font-semibold " >
                Checkout
            </h1>

            <h2 className="text-2xl lg:text-4xl font-medium mb-12" >
                Billing Details
            </h2>

            <div className="flex flex-col md:flex-row justify-between gap-16" >
                
                <div className="flex flex-col gap-7 lg:gap-8 text-[#676666] w-full md:w-2/3 text-sm lg:text-base " >
                    
                    <div className="flex flex-col md:flex-row gap-7 lg:gap-8 w-full ">                        
                        <div className="flex flex-col gap-2 w-full ">
                            <label htmlFor="firstName" className="text-sm lg:text-base" >
                                First Name <span className="text-[#DB4444] " >*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full ">
                            <label htmlFor="lastName" className="text-sm lg:text-base" >
                                Last Name <span className="text-[#DB4444] " >*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="streetAddress" className="text-sm lg:text-base" >
                            Street Address<span className="text-[#DB4444] " >*</span>
                        </label>
                        <input
                            type="text"
                            name="streetAddress"
                            id="street Address"
                            className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="apartment" className="text-sm lg:text-base" >
                            Apartment, floor, etc. (optional)
                        </label>
                        <input
                            type="text"
                            name="apartment"
                            id="apartment"
                            className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="town" className="text-sm lg:text-base" >
                            Town/City<span className="text-[#DB4444] " >*</span>
                        </label>
                        <input
                            type="text"
                            name="town"
                            id="town"
                            className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="town" className="text-sm lg:text-base" >
                            Phone Number<span className="text-[#DB4444] " >*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full ">
                        <label htmlFor="email" className="text-sm lg:text-base" >
                            Email Adress<span className="text-[#DB4444] " >*</span>
                        </label>
                        <input
                            type="email"                            
                            name="email"
                            id="email"
                            className="py-3 lg:py-4 px-4 lg:px-6 bg-[#F5F5F5] rounded outline-none w-full "
                        />
                    </div>
                    <div className="flex gap-3 md:gap-4 items-center " >
                        <input
                            type="checkbox"
                            name="reuseData"
                            id="reuseData"
                            className="w-4 md:w-6 h-4 md:h-6
                            appearance-none border-2 border-[#DB4444] rounded-sm md:rounded bg-white shrink-0 
                            checked:bg-[#DB4444] checked:border-none focus:outline-none
                            "
                        />
                        <label htmlFor="reuseData" className="text-xs md:text-base" >
                            Save this information for faster check-out next time
                        </label>
                    </div>                    

                </div>

                <div className="md:pt-8 w-full md:w-1/3 flex flex-col gap-6 md:gap-8 " >
                    <div className="flex flex-col gap-6 md:gap-8 ">
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="pt-1">
                        <div className="flex justify-between pb-3 lg:pb-4 text-sm lg:text-base border-b-[1px] border-[rgb(0,0,0,0.5)]" >
                            <span className="" >
                                Subtotal:
                            </span>
                            <span className="" >
                                $1362
                            </span>
                        </div>
                        <div className="flex justify-between py-3 lg:py-4 text-sm lg:text-base border-b-[1px] border-[rgb(0,0,0,0.5)]" >
                            <span className="" >
                                Shipping:
                            </span>
                            <span className="" >
                                Free
                            </span>
                        </div>
                            <div className="flex justify-between py-3 lg:py-4 text-sm lg:text-base" >
                            <span className="" >
                                Total:
                            </span>
                            <span className="" >
                                $1362
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 lg:gap-4" >
                        <input
                            type="text"
                            name="couponcode"
                            id="couponcode"
                            placeholder="Coupon code"
                            className="py-2 lg:py-3 px-3 lg:px-5 border-[rgb(0,0,0)] border-[1px] rounded max-w-[155px] lg:max-w-[175px] xl:max-w-[220px] h-fit outline-none"
                        />
                        <button className="text-sm lg:text-base font-medium bg-[#DB4444] text-[#FAFAFA] py-2 lg:py-3 px-3 lg:px-6
                            rounded max-w-fit lg:min-w-fit h-fit ">
                            Apply Coupon
                        </button>
                    </div>
                    <button                        
                        className="text-sm lg:text-base font-medium bg-[#DB4444] text-[#FAFAFA] py-3 lg:py-4 px-6 lg:px-12
                        rounded max-w-fit h-fit"                        
                    >
                        Place Order
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Checkout;



function CartItem(props:any) {
    
    return (
        <div className="flex justify-between items-center" >
            <div className="flex gap-4 md:gap-6 items-center" >
                <Image  
                    src={'/images/products/g92-2-500x500 1.png'}
                    alt="Product"
                    width={54}
                    height={54}
                    className="w-11 h-11 lg:w-[54px] lg:h-[54px] object-scale-down "
                />
                <p className="text-sm md:text-base" >
                    LCD Monitor
                </p>
            </div>
            <span className="text-sm md:text-base" >
                $650
            </span>
        </div>
    )
}
