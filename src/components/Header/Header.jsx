import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScroll] = useState(false);
  const handleScroll = ()=>{
    const offset = window.scrollY;
    if(offset>165){
      setScroll(true);
    }else setScroll(false);
  }

  useEffect(()=>{
   window.addEventListener('scroll',handleScroll);
  },[])
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            NIKKISTOTE
          </div>
          <div className="right">
            <TbSearch />
            <AiOutlineHeart />
            <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
