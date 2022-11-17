import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeeAIpTTe2jRj54lqbD47-YbRqJ25UzOa1Q&usqp=CAU" alt="not found" />
        <b>Estatery</b>     
        </div>

        <ul className="navbar-list">
          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
        </ul>
        <div className="buttons">
          <div className="btn">
            <button>Login</button>
          </div>
          <div className="btn">
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
