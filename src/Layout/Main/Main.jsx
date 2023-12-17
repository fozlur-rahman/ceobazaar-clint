
// import Header from '../../Shared/Header/Header/Header';
import { Outlet } from 'react-router-dom';
// import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header/Header';
// import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        //========= main layout==========
        <>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Main;
