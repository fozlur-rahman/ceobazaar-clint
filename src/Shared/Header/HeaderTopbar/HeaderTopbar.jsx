import { GoLocation } from "react-icons/go";


const HeaderTopbar = () => {
    return (
        //header topbar jsx markup
        <div className="border-b">
            <div className="section-container h-12 flex justify-between ">

                {/* location */}
                <p className="flex items-center space-x-2">
                    <GoLocation /> <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </p>

                {/* select language and currency option form */}
                <form className="flex space-x-2 sm:hidden">
                    <select className="outline-none  bg-transparent border-none text-gray-500" name="" id="">
                        <option value="english">English</option>
                        <option value="bangla">Bangla</option>
                    </select>

                    <select className="outline-none  bg-transparent border-none text-gray-500" name="" id="">
                        <option value="usd">USD</option>
                        <option value="bdt">BDT</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default HeaderTopbar;