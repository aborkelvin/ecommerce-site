import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black min-h-[440px] pt-20 pb-6 px-[17px] md:px-[47.5px] xl:px-[135px] flex flex-col gap-[60px] bottom-0 w-full ' >
            
            <div className='flex flex-wrap gap-5 phones:gap-7 xphones:gap-5 lg:gap-[87px] justify-between text-[#FAFAFA]  ' >
                <div className="flex flex-col">
                    <span className='text-xl md:text-2xl font-bold mb-3 md:mb-6 ' >Exclusive</span>
                    <span className='text-lg md:text-xl font-medium mb-3 md:mb-6 ' >Suscribe</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >Get 10% off your first order</span>
                    <div className='relative w-fit h-fit ' >
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className="rounded py-2 px-4 max-w-[170px] md:max-w-[240px] border-[1.5px] border-[#FAFAFA] text-[rgb(250,250,250,0.4)] text-sm md:text-base bg-inherit outline-none "
                            
                        />
                        <img src="/images/footer/icon-send.svg" alt="send icon" className='absolute right-2 top-1/2 -translate-y-1/2 w-4 md:w-5 ' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className='text-lg md:text-xl font-medium mb-3 md:mb-6 ' >Support</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >exclusive@gmail.com</span>
                    <span className='text-sm md:text-base' >+88015-88888-9999</span>
                    
                </div>

                <div className="flex flex-col">
                    <span className='text-lg md:text-xl font-medium mb-3 md:mb-6 ' >Quick Link</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >Privacy Policy</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >Terms Of Use</span>
                    <span className='text-sm md:text-base mb-2 md:mb-4 ' >FAQ</span>
                    <span className='text-sm md:text-base' >Contact</span>                    
                </div>

                <div className='flex flex-col gap-3 md:gap-6'>
                    <span className='text-lg md:text-xl font-medium' >Download App</span>
                    
                    <div className='grid grid-cols-[repeat(2,100x)] md:grid-rows-[20px,45px,45px] gap-2 ' >
                        <span className='text-xs text-[rgb(250,250,250,0.4)] col-span-2' >
                            Save s3 with app new user only
                        </span>
                        <img src="/images/footer/qrcode.png" alt="qr code" className='row-span-2 h-full w-full ' />
                        <img src="/images/footer/GooglePlay.png" alt="Google Play" className='h-full w-full' />
                        <img src="/images/footer/AppStore.png" alt="App store" className='h-full w-full' />

                    </div>

                    <div className='flex gap-6 items-center' >
                        <img src="/images/footer/facebook.svg" alt="facebook icon" className='w-5 md:w-6' />
                        <img src="/images/footer/instagram.svg" alt="instagram icon" className='w-5 md:w-6' />
                        <img src="/images/footer/twitter.svg" alt="twitter icon" className='w-5 md:w-6' />
                        <img src="/images/footer/linkedin.svg" alt="linkedin icon" className='w-5 md:w-6' />
                    </div>
                </div>

            </div>
            
            <div className='flex gap-2 justify-center items-center opacity-[0.4] ' >
                <img src="/images/footer/copyright.svg" alt="copyright mark" className='' />
                <p className='text-[#FFFFFF] text-sm md:text-base ' >Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
