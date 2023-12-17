// headerNav css 
import './HeaderNavbar.css';

// icon 
import { HiBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { useState } from 'react';


const HeaderNavbar = () => {
    const [cate, setCate] = useState(false);
    const handleCate = () => {
        setCate(!cate);
    }
    console.log(cate);
    return (
        // header nav jsx markup
        <nav className='bg-black'>
            <div className='section-container'>
                <div className="w-full flex items-center justify-between bg-black sm:hidden space-x-6">
                    {/* categories dropdown */}
                    <div className='xl:w-[23.3%] lg:w-1/3 md:w-1/3 bg-[#333333]  text-white'>
                        <button onClick={handleCate} className='flex items-center justify-between'>
                            <div className=" bg-[var(--high-light)] p-4">
                                <HiBars3 className=" text-3xl" />
                            </div>
                            <h6 className='ms-2'>All categories</h6>
                        </button>
                    </div>

                    {/* ====================== */}
                    <div className='xl:w-3/4 lg:w-3/4  md:w-3/4 flex justify-between'>
                        {/* menu */}

                        <ul className="w-full md:w-[80%] items-center flex space-x-10 md:space-x-4 sm:hidden">
                            <li><NavLink activeclassname="active">Home</NavLink></li>
                            <li><NavLink activeclassname="active">Shop</NavLink></li>
                            <li><NavLink activeclassname="active">About</NavLink></li>
                            <li><NavLink activeclassname="active">Contact</NavLink></li>
                        </ul>

                        {/* div buttons  */}
                        <div className='flex space-x-6 text-white'>
                            <button className='text-3xl'><FaRegHeart /></button>
                            <button className='text-3xl'><PiHandbagSimpleLight /></button>
                            <button className='text-3xl'><RxAvatar /></button>
                        </div>
                    </div>
                </div>
                <div className={`categ ${cate ? 'openCate' : 'openClose'} z-10`}>
                    <ul><li>hello</li></ul>
                    <ul><li>hello</li></ul>
                    <ul><li>hello</li></ul>
                    <ul><li>hello</li></ul>
                    <ul><li>hello</li></ul>
                </div>

            </div>
        </nav >
    );
};

export default HeaderNavbar;