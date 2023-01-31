import React from "react";
import Navigation from "./Navigation";

//HAVE TO DO ALL REACT ROUTER INSIDE THE CONTEXT (SO NOT APP.JS), DO IT IN HERE!!!!
function Header() {
    return(
        <header className="font-mono border-b p-3 flex justify-center">
            <span className="font-extrabold font-mono text-white">
                AppName
            </span>

            <Navigation />

        </header>
    )
}

export default Header;