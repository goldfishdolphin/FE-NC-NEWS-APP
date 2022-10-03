import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <header className="Header">
            <Link to='/' className='Header_Link'>

                <h1>NC NEWS</h1>
            </Link>

            <section className="profile_img">
                <img src={loggedInUser.avatar_url} alt={`avatar of ${loggedInUser.name}`}></img>
                <p>Logged In :{loggedInUser.username}</p>

            </section>
        </header>
    );
};
export default Header;