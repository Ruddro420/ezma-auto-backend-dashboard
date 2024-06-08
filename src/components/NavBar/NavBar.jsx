
const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-b border-gray-300">
                <div
                    className="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl"
                >
                    <div className="flex items-center mx-2 py-3 md:py-0">
                        <div className="flex items-center">
                            <button className="md:hidden mx-3">
                                <i className="text-2xl bx bx-menu"></i>
                            </button>
                            <a href="#" className="font-bold text-xl pr-6"
                            >Ezma<span className="text-gray-500 font-normal">Auto</span></a
                            >
                        </div>
                        <ul className="text-sm font-normal hidden md:flex">
                            <li
                                className="mx-3 py-4 font-medium text-green-500 border-b-2 border-green-500"
                            >
                                <a href="#" className="inline-flex items-center">
                                    <i className="bx bx-home mr-1"></i>
                                    Home
                                </a>
                            </li>
                            <li
                                className="mx-3 py-4 text-gray-600 hover:text-gray-900 inline-block relative text-left"
                            >
                                <a
                                    href="#"
                                    className="inline-flex text-sm items-center text-gray-600 dropdown-toggle"
                                    data-dropdown="dropdownMenuDashboard"
                                >
                                    <i className="bx bx-pie-chart-alt mr-1"></i>
                                    <span>Dashboard</span>
                                    <i className="bx bx-chevron-down ml-1"></i>
                                </a>

                                <div
                                    className="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden"
                                    id="dropdownMenuDashboard"
                                >
                                    <div
                                        className="rounded-md bg-white shadow-xs"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1">
                                            <a
                                                href="./../index.html"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Dashboard v1</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Dashboard v2</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Dashboard v3</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left"
                            >
                                <a
                                    href="#"
                                    className="inline-flex items-center dropdown-toggle"
                                    data-dropdown="uiComponentMenu"
                                >
                                    <i className="bx bx-outline mr-1"></i>
                                    <span>UI Component</span>
                                    <i className="bx bx-chevron-down ml-1"></i>
                                </a>

                                <div
                                    className="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden"
                                    id="uiComponentMenu"
                                >
                                    <div
                                        className="rounded-md bg-white shadow-xs"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1">
                                            <a
                                                href="./form.html"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Form</a
                                            >
                                            <a
                                                href="./card.html"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Card</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Chart</a
                                            >
                                            <a
                                                href="./button.html"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Buttons</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Dropdown</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Navbar</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Maps</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left"
                            >
                                <a
                                    href="#"
                                    className="inline-flex items-center dropdown-toggle"
                                    data-dropdown="pagesNav"
                                >
                                    <i className="bx bx-book mr-1"></i>
                                    <span>Pages</span>
                                    <i className="bx bx-chevron-down ml-1"></i>
                                </a>

                                <div
                                    className="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden"
                                    id="pagesNav"
                                >
                                    <div
                                        className="rounded-md bg-white shadow-xs"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Login</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Register</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >User Profile</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >User Settings</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Blog</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Timeline</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left"
                            >
                                <a
                                    href="#"
                                    className="inline-flex items-center dropdown-toggle"
                                    data-dropdown="layoutNav"
                                ><i className="bx bx-dock-right mr-1"></i>
                                    <span> Layout</span>
                                    <i className="bx bx-chevron-down ml-1"></i
                                    ></a>

                                <div
                                    className="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden"
                                    id="layoutNav"
                                >
                                    <div
                                        className="rounded-md bg-white shadow-xs"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Vertical</a
                                            >
                                            <a
                                                href="#"
                                                className="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                            >Vertical fluid</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <button className="mt-1 relative mx-2">
                            <i className="bx bx-bell text-xl text-gray-600"></i>
                            <span
                                aria-hidden="true"
                                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                            ></span>
                        </button>

                        <div className="inline-block relative text-left">
                            <a
                                className="flex items-center mx-2 dropdown-toggle"
                                href=""
                                data-dropdown="dropDownMenu"
                            >
                                <img
                                    className="w-8 h-8 mr-3 rounded-full object-cover"
                                    src="./avatar/nis.png"
                                    alt="Avatar"
                                />
                                <div className="mt-1 hidden md:block">
                                    <div className="leading-3 text-sm text-gray-700">
                                        Zero Black Coder
                                    </div>
                                    <small className="text-xs text-gray-500">Anggota DPR</small>
                                </div>
                            </a>

                            <div
                                className="origin-top-right absolute right-0 mt-3 z-56 w-56 rounded-md shadow-lg hidden"
                                id="dropDownMenu"
                            >
                                <div
                                    className="rounded-md bg-white shadow-xs"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            role="menuitem"
                                        >Settings</a
                                        >
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            role="menuitem"
                                        >Logout</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;