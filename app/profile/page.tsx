import Link from "next/link";

function Profile() {

    // TODO : Make a layout for profile so the subpages can just fit in as children

    return (
        <div className="px-[17px] md:px-[47.5px] 2xl:px-[135px] py-20">
            <div className="flex gap-3 ">
                <aside className="hidden lg:block border-[1px] border-gray-300 w-1/4 max-w-[300px] min-w-[250px] rounded " >
                    <h1 className="text-lg  border-b-[1px]  border-gray-300 py-3 px-3 ">My Account</h1>
                    <nav className="flex flex-col">
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200 ">Profile</Link>
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200 ">Inbox</Link>
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200">Orders</Link>
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200">Wishlist</Link>
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200">Address Book</Link>
                        <Link href="/profile" className=" py-2 px-3 hover:bg-gray-200">Account Details</Link>
                    </nav>
                </aside>
                <section className="w-3/4 border-[1px] border-gray-300 rounded " >
                    <h1 className="text-lg  border-b-[1px]  border-gray-300 py-3 px-3  "> Orders </h1>
                </section>
            </div>
        </div>
    )
}

export default Profile;