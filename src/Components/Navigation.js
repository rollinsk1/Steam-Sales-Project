import React, { useState } from "react";
import { useSpring } from "react-spring";
import { animated } from "react-spring";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import "./Menu.css";


import "./Styles.css";

function Navigation() {
    //Object used to toggle menu, showMenu is variable, setShowMenu is a variable to toggle true or false
    //When onClick is pressed show menu will be opposite of it current value (T or F)
    //Conditional Rendering
    
    const [fullMenuVisible, setFullMenuVisible] = useState(false);

    const fullMenuAnimation = useSpring({
      transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
      opacity: fullMenuVisible ? 1 : 0
    });

    const MenuFull = ({ style }) => (
      <animated.div className="menu menu--full" style={style}>
       <nav>
         <ul className="menu-list menu-list--full">
           <li className="menu-list-item menu-list-item--full">
             <Link to="/"
              onClick={() => setFullMenuVisible(!fullMenuVisible)}
              >
               Home</Link>
           </li>
           <li className="menu-list-item menu-list-item--full">
             <Link to="/About"
             onClick={() => setFullMenuVisible(!fullMenuVisible)}
             >
               About</Link>
           </li>
           <li className="menu-list-item menu-list-item--full">
           <Link to="/Top_Sellers"
             onClick={() => setFullMenuVisible(!fullMenuVisible)}
             >
               Top Sellers</Link>
           </li>
           <li className="menu-list-item menu-list-item--full">
           <Link to="/Contact"
             onClick={() => setFullMenuVisible(!fullMenuVisible)}
             >
               Contact</Link>
           </li>
         </ul>
       </nav>
     </animated.div>
    );

    //menu class:className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    //menuMask class: className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"


    return(
        <nav>

            <div className="App">
              <button
                className="menu-button menu-button--full"
                onClick={() => setFullMenuVisible(!fullMenuVisible)}
              >
                <FontAwesomeIcon
                icon={faBars}>
                  {fullMenuVisible ? "Close" : "Full Menu"}
                </FontAwesomeIcon>
              </button>
              <MenuFull style={fullMenuAnimation} />
            </div>

        </nav>
    )
}

export default Navigation;