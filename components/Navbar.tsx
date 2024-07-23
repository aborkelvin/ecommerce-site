'use client';
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import { usePathname, useRouter } from '@/node_modules/next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from '@/node_modules/react-redux/dist/react-redux';
import { RootState } from '@/app/types';


const Navbar = () => {

    const pathname = usePathname()
    const router = useRouter()
    const [currentPath, setCurrentPath] = useState('Home')

    const wishListData = useSelector((state:RootState) => state.wishList)

    /* useEffect(() => {
        if (pathname === '/') {            
            setCurrentPath('Home')
        }else if (pathname === '/shop') {
            setCurrentPath('Shop')
        } else if (pathname === '/signup') {
            setCurrentPath('Sign Up')
        } else if (pathname === '/signin') {
            setCurrentPath('Sign In')
        }
    }) */

    return (
        <div className="pt-5 md:pt-10 pb-3 md:pb-5 px-3 phones:px-[17px] md:px-[47.5px] 2xl:px-[135px] border-b-[0.5px] border-[rgb(0,0,0,0.3)]
            md:flex md:justify-between md:items-center " >
            <h1 className="text-black font-bold text-lg md:text-2xl leading-5 tracking-[0.72px] hidden md:block cursor-pointer "
                onClick={() => {
                    setCurrentPath('Home')
                    router.push('/')
                } }
            >
                {/* UcComms */}
                Exclusive
            </h1>
            <nav className='text-sm md:text-base hidden lg:flex gap-5 xl:gap-10 leading-5 ' >
                <Link href = '/' className = {` ${ pathname === '/' ? ' bg-gray-300 ' : 'hover:bg-gray-200' } p-1 px-3 rounded   `} >
                    Home
                </Link>
                <Link href = '/shop' className = {` ${ pathname === '/shop' ? ' bg-gray-300 ' : 'hover:bg-gray-200' } p-1 px-3 rounded   `} >
                    Shop
                </Link>
                <Link href = '/signup' className = {` ${ pathname === '/signup' ? ' bg-gray-300 ' : 'hover:bg-gray-200' } p-1 px-3 rounded   `} >
                    Sign Up
                </Link>
                <Link href = '/signin' className = {` ${ pathname === '/signin' ? ' bg-gray-300 ' : 'hover:bg-gray-200' } p-1 px-3 rounded   `} >
                    Sign In
                </Link>
            </nav>

            <div className='flex justify-between md:justify-normal gap-1 phones:gap-3 md:gap-5 w-full md:w-fit ' >
                <input
                    type="search"
                    name="search"
                    id="search"
                    className='py-2 px-4 bg-[#F5F5F5] rounded w-[243px] outline-none text-xs md:text-sm '
                    placeholder="What are you looking for?"
                />
                <Link className="relative w-fit" href= '/wishlist' >
                    <img
                        src="/images/like.svg"
                        alt="wishlist"
                        className='w-8 h-8 hidden md:block cursor-pointer'
                    />
                    <div className='bg-[#DB4444] w-6 h-6 absolute -top-2 -right-2 text-sm hidden md:flex items-center justify-center rounded-full' >{wishListData.length}</div>
                </Link>
                <Link className="relative w-fit" href= '/cart' >
                    <img
                        src="/images/cart.svg"
                        alt="cart"                    
                        className='w-8 h-8 cursor-pointer'
                    />
                </Link>
                <Image
                    src="/images/user.svg"
                    alt="user"
                    width={32}
                    height={32}
                    className='hidden md:block cursor-pointer'
                />

            </div>
        </div>
)
}

export default Navbar
