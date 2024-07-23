
function Cart(){
    
    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] py-20" >
            <div className="max-w-[1000px] flex flex-col gap-10 ">
                <CartContent />
                <CartContent />
            </div>
        </div>
    )
}

export default Cart;


function CartContent() {
    
    return (
        <div className="max-w-[1000px] rounded-lg shadow-lg w-full flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 bg-slate-50 " >
            <img src="/images/perfume.png" alt="" className="max-w-[65px] phones:max-w-[90px] md:max-w-[100px] h-auto" />
            
            <div className="w-full flex flex-col md:flex-row gap-2 md:justify-between" >                
                <span className="text-base font-medium flex-1 " >
                    LCD Monitor
                </span>

                <div className="w-full flex-1 flex gap-5 justify-between items-start md:items-center">
                    <span className="font-medium" >
                        $681
                    </span>
                    <div className="flex gap-2 items-center" >
                        <span className="font-semibold text-base md:text-lg" >
                            1
                        </span>
                        <div className="flex flex-col justify-center items-start gap-2" >
                            <img src="/images/arrowup.svg" alt="Up arrow" className="w-5 cursor-pointer " />
                            <img src="/images/arrowup.svg" alt="Down arrow" className="w-5 rotate-180 relative left-[0.9px] cursor-pointer" />
                        </div>
                    </div>
                    <img src="/images/delete.svg" alt="delete icon" className="w-5 md:w-6 cursor-pointer" />
                </div>
            </div>

        </div>
    )
}