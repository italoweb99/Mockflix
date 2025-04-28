import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20  ${
        scrolling ? "bg-transparent" : "bg-bgpurple"
      }`}
    >
      <div className={`bg-bgpurple/80 mx-10 px-6 py-5 backdrop-blur-sm transition-all duration-300${scrolling ? 'shadow-lg rounded-b-xl': 'shadow-none' }`}>
      <Link to ='/Mockflix'>
        <h1 className= 'text-2xl font-bold text-gray-200 hover:text-gray-300'>Mockflix</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
