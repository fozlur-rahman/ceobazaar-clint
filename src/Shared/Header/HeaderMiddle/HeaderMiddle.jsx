import { FaRegHeart } from 'react-icons/fa';
import logo from '../../../assets/images/logo/Logo.png';
import { BiPhoneCall } from "react-icons/bi";
import { PiHandbagSimpleLight } from 'react-icons/pi';
import { RxAvatar } from 'react-icons/rx';


const HeaderMiddle = () => {
    return (
        // header middle bar jsx markup
        <div>
            <div className='section-container flex justify-between py-5'>

                {/* site logo */}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* header middle search area */}
                <div className='sm:hidden '>
                    <form className='flex' action="">
                        <input className='border px-4 py-2 xl:w-full lg:w-full rounded-s outline-none' type="text" placeholder='Search' />
                        <button className='bg-[var(--high-light)] text-white py-2 px-4 border border-[var(--high-light)] rounded-e'>search</button>
                    </form>
                </div>

                {/* header middle contact info */}
                <div className='flex items-center space-x-2 md:hidden'>
                    <div>
                        <BiPhoneCall className='text-4xl' />
                    </div>
                    <div>
                        <p>Customers services</p>
                        <h4 className='text-xl text-black'>(219) 555-0114</h4>
                    </div>
                </div>

                {/* add to cart button  */}
                <div className='hidden flex space-x-6 text-white sm:text-[var(--primary-color)] sm:block'>
                    <button className='text-3xl'><FaRegHeart /></button>
                    <button className='text-3xl'><PiHandbagSimpleLight /></button>
                    <button className='text-3xl'><RxAvatar /></button>
                </div>
            </div>

            {/* only for mobile display show  */}
            <div className='section-container w-full hidden sm:block sm:mb-5'>
                <form className='flex' action="">
                    <input className='sm:w-full border px-4 py-2 lg:w-full rounded-s outline-none' type="text" placeholder='Search' />
                    <button className='bg-[var(--high-light)] text-white py-2 px-4 border border-[var(--high-light)] rounded-e'>search</button>
                </form>
            </div>
        </div>
    );
};

export default HeaderMiddle;