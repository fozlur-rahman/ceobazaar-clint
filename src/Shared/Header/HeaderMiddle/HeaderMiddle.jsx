import logo from '../../../assets/images/logo/Logo.png';
import { BiPhoneCall } from "react-icons/bi";


const HeaderMiddle = () => {
    return (
        // header middle bar jsx markup
        <div className='flex justify-between py-5'>

            {/* site logo */}
            <div>
                <img src={logo} alt="" />
            </div>

            {/* header middle search area */}
            <div>
                <form className='flex' action="">
                    <input className='border px-4 py-2 lg:w-full rounded-s outline-none' type="text" placeholder='Search' />
                    <button className='bg-[var(--high-light)] text-white py-2 px-4 border border-[var(--high-light)] rounded-e'>search</button>
                </form>
            </div>

            {/* header middle contact info */}
            <div className='flex items-center space-x-2'>
                <div>
                    <BiPhoneCall className='text-4xl' />
                </div>
                <div>
                    <p>Customers services</p>
                    <h4 className='text-xl text-black'>(219) 555-0114</h4>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;