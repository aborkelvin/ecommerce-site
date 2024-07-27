'use client';
import { useRouter } from "next/navigation";

function Cart() {
    const router = useRouter();

    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] py-20" >
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-9 mx-auto mb-10 lg:mb-12 ">
                    <CartContent />
                    <CartContent />
                </div>
                <div className="mb-10 lg:mb-20 flex justify-between" >
                    <button
                        className="text-sm lg:text-base font-medium text-black py-3 lg:py-4 px-6 lg:px-12 
                        border-[rgb(0,0,0,0.5)] border-[1px] rounded " >
                       Return To Shop
                    </button>
                    <button
                        className="text-sm lg:text-base font-medium text-black py-3 lg:py-4 px-6 lg:px-12 
                        border-[rgb(0,0,0,0.5)] border-[1px] rounded " >
                       Update Cart
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-14 lg:gap-[100px] xl:gap-[120px] ">
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-5" >
                        <input
                            type="text"
                            name="couponcode"
                            id="couponcode"
                            placeholder="Coupon code"
                            className="py-3 lg:py-4 px-4 lg:px-6 border-[rgb(0,0,0)] border-[1px] rounded max-w-[300px] h-fit outline-none"
                        />
                        <button className="text-sm lg:text-base font-medium bg-[#DB4444] text-[#FAFAFA] py-3 lg:py-4 px-6 lg:px-12
                            rounded max-w-fit lg:min-w-fit h-fit ">
                            Apply Coupon
                        </button>
                    </div>
                    <div className="w-full max-w-[470px] border-[rgb(0,0,0)] border-[1.5px] rounded px-4 lg:px-6 py-6 lg:py-8 flex flex-col " >
                        <h2 className="text-base lg:text-xl font-medium mb-4 lg:mb-6 " >
                            Cart Total
                        </h2>                    
                        <div className="">
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
                        <button
                            onClick={() => router.push('/checkout')}
                            className="text-sm lg:text-base font-medium bg-[#DB4444] text-[#FAFAFA] py-3 lg:py-4 px-6 lg:px-12
                            rounded max-w-fit h-fit mx-auto "                        
                        >
                            Proceed to checkout
                        </button>
                                                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;


function CartContent() {
    
    return (
        <div className="max-w-[1200px] rounded-lg shadow-lg w-full flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 bg-slate-50 " >
            <img src="/images/perfume.png" alt="" className="max-w-[65px] phones:max-w-[90px] md:max-w-[100px] h-auto object-cover" />
            
            <div className="w-full flex flex-col md:flex-row gap-2 md:justify-between" >                
                <span className="text-base font-medium flex-1 " >
                    LCD Monitor
                </span>

                <div className="w-full flex-1 flex gap-5 justify-between items-start md:items-center">
                    <span className="font-medium" >
                        $681
                    </span>
                    <div className="flex gap-2 items-center" >
                        <img src="/images/arrows/arrowright2.svg" alt="Up arrow" className="rotate-180 cursor-pointer w-[6px] h-[12px] md:h-[18px] " />
                        <span className="font-semibold text-base md:text-lg" >
                            3
                        </span>
                        <img src="/images/arrows/arrowright2.svg" alt="Up arrow" className="cursor-pointer w-[6px] h-[12px] md:h-[18px] " />
                        {/* <div className="flex flex-col justify-center items-start gap-2" >
                            <img src="/images/arrowup.svg" alt="Up arrow" className="w-5 cursor-pointer " />
                            <img src="/images/arrowup.svg" alt="Down arrow" className="w-5 rotate-180 relative left-[0.9px] cursor-pointer" />
                        </div> */}
                    </div>
                    <img src="/images/delete.svg" alt="delete icon" className="w-5 md:w-6 cursor-pointer" />
                </div>
            </div>

        </div>
    )
}