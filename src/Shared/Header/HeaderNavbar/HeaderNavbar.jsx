// headerNav css 
import './HeaderNavbar.css';

// icon 
import { HiBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";


const HeaderNavbar = () => {
    return (
        // header nav jsx markup
        <nav className='bg-black'>
            <div className="section-container flex items-center justify-between bg-black sm:hidden">
                {/* categories dropdown */}
                <div className='lg:w-1/4 md:w-1/3 bg-[var(--primary-color)]'>
                    <button className='flex items-center justify-between'>
                        <div className=" bg-[var(--high-light)] p-4">
                            <HiBars3 className=" text-white text-3xl" />
                        </div>
                        <h6>All categories</h6>
                    </button>
                </div>

                {/* ====================== */}
                <div className='w-full md:w-2/3 flex justify-between px-4'>
                    {/* menu */}

                    <ul className="w-full md:w-[80%] items-center flex space-x-10 md:space-x-4 sm:hidden">
                        <li><NavLink activeClassName="active">Home</NavLink></li>
                        <li><NavLink activeClassName="active">Shop</NavLink></li>
                        <li><NavLink activeClassName="active">About</NavLink></li>
                        <li><NavLink activeClassName="active">Contact</NavLink></li>
                    </ul>

                    {/* div buttons  */}
                    <div className='flex space-x-6 text-white'>
                        <button className='text-3xl'><FaRegHeart /></button>
                        <button className='text-3xl'><PiHandbagSimpleLight /></button>
                        <button className='text-3xl'><RxAvatar /></button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavbar;