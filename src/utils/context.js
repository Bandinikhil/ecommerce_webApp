import {createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({ children })=>{
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])

    useEffect(()=>{
     let count =0;
     cartItems?.map((item)=> (count+= item?.attributes?.quantity));
      setCartCount(count)
     let total = 0
     cartItems?.map(item=> (total += item?.attributes?.price * item?.attributes?.quantity))
     setCartSubTotal(total);
    },[cartItems])

    const handleAddToCart = (product, quantity)=>{
        let items=[...cartItems]
        console.log(items);
        console.log(product);
        console.log(quantity);
        let index= items?.findIndex(item=>(item?.id === product?.id))
        console.log(index)
        if(index !== -1){
            items[index].attributes.quantity += quantity
        }else{
            product.attributes.quantity = quantity;
            items = [...items,product];
        }
        setCartItems(items);
    }

    const handleRemoveFromCart = (product)=>{
        let items=[...cartItems];
        items = items?.filter(item=> item?.id !== product?.id)
        setCartItems(items);
    }

    const handleCartProductQuantity = (type,product)=>{
        let items=[...cartItems];
        let index = items?.findIndex(item=> item?.id === product?.id)
        if(type=== "inc"){
            items[index].attributes.quantity++
        }else{
            if(items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity--
        }
        setCartItems(items);
    };
    
    return(
        <Context.Provider
        value={{
            products,
            setProducts,
            categories,
            setCategories,
            cartItems,
            setCartItems,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,
            showCart,
            setShowCart,
            cartSubTotal,
            cartCount,
        }}
        >
           {children}
        </Context.Provider>
    )
}

export default AppContext;