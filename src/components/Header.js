import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [statebutton, setstatebutton] = useState("Login");

  return (
    <header className="flex justify-between items-center bg-pink-100 px-8 py-4 shadow-md">
      <h2 className="text-2xl font-bold text-pink-800">🍔 TasteBuds</h2>

      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-lg hover:text-pink-600 transition duration-200">
          Home
        </Link>
        <Link to="/about" className="text-lg hover:text-pink-600 transition duration-200">
          About
        </Link>
        <Link to="/contact" className="text-lg hover:text-pink-600 transition duration-200">
          Contact Us
        </Link>
        <span className="text-lg cursor-pointer hover:underline hover:text-blue-800 transition duration-200" onClick={()=>(alert("Coming Soon"))}>Cart</span>

        <button
          onClick={() =>
            setstatebutton(statebutton === "Login" ? "LogOut" : "Login")
          }
          className="ml-4 px-4 py-1 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 active:bg-pink-900"
        >
          {statebutton}
        </button>
      </nav>
    </header>
  );
};

export default Header;
