import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import News from "../Utils/News.jpg";
import { Button } from "react-bootstrap";
import './Home.css';
const Home = () => {
    return (
        <Card className="text-black m-0 welcome" style={{ borderStyle: 'none', }}>
            <Card.Img src={News} alt="Card image" className="card m-0" style={{ height: "100%", width: "100% " }} />
            <Card.ImgOverlay className="Home ">

                <Button className='p-2 button' size='lg' variant="dark" style={{ fontSize: 20, textAlign: 'center' }} >
                    <Link className="text-center text-white" to={'/users'}>
                        Log In
                    </Link>
                </Button>
            </Card.ImgOverlay>
            <Card.Title className="text-center m-0" style={{ fontSize: 32, backgroundColor: "#DBDAE0" }}>Welcome to Home!</Card.Title>
        </Card>

    );
};

export default Home;
