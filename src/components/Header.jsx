function Header() {
    return (
        <>
            <header className="">
                <nav className="container mx-auto lg:px-32 w-full py-5 px-3">
                    <ul className="flex lg:justify-end justify-center text-slate-500">
                        <li className="mr-2 text-md font-semibold hover:text-slate-800">Work</li>
                        <li className="mr-2 text-md font-semibold hover:text-slate-800">Blog</li>
                        <li className="mr-2 text-md font-semibold hover:text-slate-800">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;