import { NavLink } from "react-router-dom";
// import './HeroCategories.css';
const categories = ["category A", "category b", "category c", "category c", "category d", "category A", "category A"];

const HeroCategories = () => {
    return (
        <div className="bg-black h-full">
            <ul className="categories text-white flex flex-col">
                {categories.map((category, index) => (
                    <NavLink className="p-4 text-white" key={index}>{category}</NavLink>
                ))}
            </ul>
        </div>
    );
};

export default HeroCategories;
