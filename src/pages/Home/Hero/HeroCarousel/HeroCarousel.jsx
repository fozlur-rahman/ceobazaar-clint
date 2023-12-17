// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import './HeroCarousel.css';
import slider1 from '../../../../assets/images/slider/Rectangle 52.png';

const HeroCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={slider1} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroCarousel;
