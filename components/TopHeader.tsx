import Link from "@/node_modules/next/link"

export default function TopHeader() {

    return (
        <div className="bg-black h-14 md:h-[48px] flex w-full items-center justify-center text-xs md:text-sm text-white leading-[21px] p-4" >
            <span className="" >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <Link href='/' className = 'underline font-semibold ml-2 ' >
                    ShopNow
                </Link>
            </span>
        </div>
    )
}