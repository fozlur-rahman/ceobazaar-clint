import HeroCarousel from "../HeroCarousel/HeroCarousel";
import HeroCategories from "../HeroCategories/HeroCategories";

const Hero = () => {
    return (
        <section className="section-container">
            <div className="xl:flex xl:space-x-6">
                {/* hero categories  */}
                <div className="xl:w-1/4 lg:hidden">
                    <HeroCategories></HeroCategories>
                </div>
                {/* Hero Carousel */}
                <div className="xl:w-3/4 z-0 relative">
                    <HeroCarousel></HeroCarousel>
                </div>
            </div>
        </section>
    );
};

export default Hero;