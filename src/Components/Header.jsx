import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {

    return (
        <div >

            <header className="Header p-2 mt-4" >

                <Link to='/' className='Header_Link'>
                    <h1 class="fa-solid fa-beat">NC NEWS</h1>
                </Link>

            </header>
            <NavBar />
        </div>
    );
};
export default Header;