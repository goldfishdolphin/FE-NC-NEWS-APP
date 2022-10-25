import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../contexts/User";
import Button from 'react-bootstrap/Button';
const NavBar = () => {
    const { loggedInUser } = useContext(UserContext);
    const value = useContext(UserContext);
    return (
        <>
            <Navbar className="responsive-navbar-nav p-4" variant='light' collapseOnSelect expand="lg">
                <Container> Welcome
                    <Navbar.Brand href="/">
                        <img src={loggedInUser.avatar_url}
                            alt={`avatar of ${loggedInUser.name}`}
                            width="50px"
                            height="100%"
                            className="d-inline-block align-top"
                        />
                        <Navbar.Text className="p-1">{' '}{loggedInUser.username}

                            <Button onClick={() => { value.setLoggedInUser(null); }}>Log out</Button>
                        </Navbar.Text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav me-auto">
                            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="/articles">Articles</Nav.Link>
                            <Nav.Link className='nav-link' href="/topics">Topics</Nav.Link>
                            <Nav.Link className='nav-link' href="/users">Users</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};
export default NavBar;