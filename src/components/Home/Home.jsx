import "./Home.scss";
import Banner from "./Banner/Banner";

import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import Category from "./Category/Category";

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetchDataFromApi("/api/products?populate=*");
      setProducts(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await fetchDataFromApi("/api/categories?populate=*");
      console.log(res);
      setCategories(res);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;


// import "./Home.scss";
// import Banner from "./Banner/Banner"
// import Category from "../Category/Category";
// import Products from "../Products/Products";
// import { useContext, useEffect } from "react";
// import { Context } from "../../utils/context";
// import { fetchDataFromApi } from "../../utils/api";
// const Home = () => {

//     const {products,setProducts, categories, setCategories}= useContext(Context);

//     useEffect(()=>{
//         getProducts();
//         getCategories();
//     },[])

//     const getProducts=()=>{
//         fetchDataFromApi("/api/products?populate=*")
//         .then((res)=>{setProducts(res)
//         console.log(res);
//         });
//     }

//     const getCategories=()=>{
//         fetchDataFromApi("/api/categories?populate=*")
//         .then(res=>{
//             console.log(res)
//             setCategories(res)});
//     }

//     return( 
//     <div>
       
//         <Banner/>
//         <div className="">
//             <div className="layout">
//             <Category categories={categories}/>
//         <Products
//         headingText = "Popular Products"
//         products={products}
//         />
//             </div>
        
//         </div>
      
//     </div>
// )
// };

// export default Home;
