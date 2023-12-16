import HeaderMiddle from "../HeaderMiddle/HeaderMiddle";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";

const Header = () => {
    return (
        //========== header =============
        <header>
            <HeaderTopbar></HeaderTopbar>
            <HeaderMiddle></HeaderMiddle>
            <HeaderNavbar></HeaderNavbar>
        </header>
    );
};

export default Header;