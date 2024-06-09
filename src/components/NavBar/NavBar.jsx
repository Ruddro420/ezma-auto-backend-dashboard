import { useState } from "react";
import Dropdown from "../DropDown/Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedItem, setSelectedItem] = useState('');

    const dashboardItems = [
        { href: 'publish-car', label: 'Publish Car' },
        { href: 'driver', label: 'Publish Driver' },
        { href: 'create-car', label: 'Create Car' }
    ];

    const uiComponentItems = [
        { href: './form.html', label: 'Form' },
        { href: './card.html', label: 'Card' },
        { href: '#', label: 'Chart' },
        { href: './button.html', label: 'Buttons' },
        { href: '#', label: 'Dropdown' },
        { href: '#', label: 'Navbar' },
        { href: '#', label: 'Maps' }
    ];

    const pagesItems = [
        { href: '#', label: 'Login' },
        { href: '#', label: 'Register' },
        { href: '#', label: 'User Profile' },
        { href: '#', label: 'User Settings' },
        { href: '#', label: 'Blog' },
        { href: '#', label: 'Timeline' }
    ];

    const layoutItems = [
        { href: '#', label: 'Vertical' },
        { href: '#', label: 'Vertical fluid' }
    ];

    const handleDropdownToggle = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <>
            
            <nav className="bg-white border-b border-gray-300">
                <div
                    className="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl">
                    <div className="flex items-center mx-2 py-3 md:py-0">
                        <div className="flex items-center">
                            <button className="md:hidden mx-3">
                                <i className="text-2xl bx bx-menu"></i>
                            </button>
                            <Link to="/" className="font-bold text-xl pr-6"
                            >Ezma<span className="text-gray-500 font-normal">Auto</span></Link>
                        </div>
                        <ul className="text-sm font-normal hidden md:flex">
                            <li
                                className="mx-3 py-4 font-medium text-green-500 border-b-2 border-green-500"
                            >
                                <Link to="/" className="inline-flex items-center">
                                    <i className="bx bx-home mr-1"></i>
                                    Home
                                </Link>
                            </li>
                            <Dropdown
                                title="Car"
                                iconClass="bx bx-pie-chart-alt"
                                items={dashboardItems}
                                isOpen={openDropdown === 'Car'}
                                toggleDropdown={() => handleDropdownToggle('Car')}
                                closeDropdown={() => setOpenDropdown(null)}
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                            <Dropdown
                                title="UI Component"
                                iconClass="bx bx-outline"
                                items={uiComponentItems}
                                isOpen={openDropdown === 'uiComponent'}
                                toggleDropdown={() => handleDropdownToggle('uiComponent')}
                                closeDropdown={() => setOpenDropdown(null)}
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                            <Dropdown
                                title="Pages"
                                iconClass="bx bx-book"
                                items={pagesItems}
                                isOpen={openDropdown === 'pages'}
                                toggleDropdown={() => handleDropdownToggle('pages')}
                                closeDropdown={() => setOpenDropdown(null)}
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                            <Dropdown
                                title="Layout"
                                iconClass="bx bx-dock-right"
                                items={layoutItems}
                                isOpen={openDropdown === 'layout'}
                                toggleDropdown={() => handleDropdownToggle('layout')}
                                closeDropdown={() => setOpenDropdown(null)}
                                selectedItem={selectedItem}
                                setSelectedItem={setSelectedItem}
                            />
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <button className="mt-1 relative mx-2">
                            <i className="bx bx-bell text-xl text-gray-600"></i>
                            <span
                                aria-hidden="true"
                                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                        </button>

                        <div className="inline-block relative text-left">
                            <a
                                className="flex items-center mx-2 dropdown-toggle"
                                href=""
                                data-dropdown="dropDownMenu">
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
                                        >Settings</a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            role="menuitem"
                                        >Logout</a>
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