import React from 'react'
import Link from '@/node_modules/next/link'

const SignUp = () => {
    return (
        <div className='pt-20 pb-[140px] px-4 phones:px-6 lg:px-0 lg:flex xl:items-center lg:gap-10 xl:gap-28' >
            <img src="/images/authentication/dl.beatsnoop 1.png" alt="" className='hidden lg:block max-w-[55%]' />
            <form action="" className='mx-auto lg:mx-0 flex flex-col gap-5 w-full md:w-[370px] ' >
                <h2 className='text-3xl phones:text-4xl mb-1 font-medium ' >Create an account</h2>
                <p className='mb-5 text-base phones:text-lg' >Enter your details below</p>

                <input
                    type="text"
                    name="name" id="name"
                    placeholder='Name'
                    className='mb-5 w-full md:w-[370px] placeholder-[#a4a2a2] text-lg py-1 border-b-2 border-[#bdbdbd] outline-none autocomplete-off '
                />

                <input
                    type="email"
                    name="email" id="email"
                    placeholder='Email'
                    className='mb-5 w-full md:w-[370px] placeholder-[#a4a2a2] text-lg py-1 border-b-2 border-[#bdbdbd] outline-none autocomplete-off '
                />

                <input
                    type="password"
                    name="password" id="password"
                    placeholder='Password'
                    className='mb-5 w-full md:w-[370px] placeholder-[#a4a2a2] text-lg py-1 border-b-2 border-[#bdbdbd] outline-none autocomplete-off '
                />

                <button className='bg-[#DB4444] w-full py-3 md:py-4 px-1 rounded text-[#fafafa] font-medium text-lg  ' >
                    Create Account
                </button>

                <button className='mb-3 flex items-center justify-center gap-4 w-full py-3 md:py-4 px-1 rounded border-[1px] border-[rgba(0,0,0,0.40)] ' >
                    <img src="/images/authentication/Google.svg" alt="google icon" className='w-6 h-6' />
                    <span className='text-lg' >Sign up with Google</span>
                </button>

                <p className='text-lg text-[rgb(0,0,0,0.7)] mx-auto ' >
                    Already have an account?
                    <span className='ml-1 cursor-pointer text-[rgb(0,0,0,0.9)] underline ' >
                        <Link href= "/signin" >Log in</Link>
                    </span>
                </p>

            </form>
        </div>
    )
}

export default SignUp
