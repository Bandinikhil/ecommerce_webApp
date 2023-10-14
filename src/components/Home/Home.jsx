import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "../Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return <div className="home">
        <Banner/>
        <Category/>
        <Products/>
    </div>;
};

export default Home;
