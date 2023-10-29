import Product from "./Product/Product";
import "./Products.scss";
const Products = ({products,innerpage,headingText}) => {
    return (
        <div className="products-container">
            {!innerpage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerpage ? "innerpage" : ""}`}>
                {products?.data?.map(item=>(
                    <Product
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                    />
                ))}
            </div>
        </div>
    )
};

export default Products;
