import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Dropdown = ({ title, iconClass, items, isOpen, toggleDropdown, closeDropdown, selectedItem, setSelectedItem }) => {
    const handleItemClick = (label) => {
        setSelectedItem(label);
        closeDropdown();
    };

    return (
        <li className="mx-3 py-4 text-gray-600 hover:text-gray-900 inline-block relative text-left">
            <a
                href="#"
                className="inline-flex text-sm items-center text-gray-600 dropdown-toggle"
                onClick={toggleDropdown}
            >
                <i className={`${iconClass} mr-1`}></i>
                <span>{title}</span>
                <i className={`bx bx-chevron-down ml-1 ${isOpen ? 'transform rotate-180' : ''}`}></i>
            </a>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg">
                    <div className="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1">
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className={`block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700 ${selectedItem === item.label ? 'border-b-2 border-blue-500' : ''}`}
                                    onClick={() => handleItemClick(item.label)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
};

export default Dropdown;
