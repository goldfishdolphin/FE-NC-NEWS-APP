import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import News from "./News.jpg";
import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container className='' >
            <Card className="bg-light text-black ">
                <Card.Img src={News} alt="Card image" className="" style={{ height: "100%", width: "100% " }} />
                <Card.ImgOverlay>
                    <Card.Title className="p-2 text-center" style={{ fontSize: 32, }}>Welcome to Home!</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Container className="text-center ">
                <Button className='p-2' variant="primary" style={{ fontSize: 20, textAlign: 'center' }} >
                    <Link className="text-center text-white" to={'/articles'}>
                        Enter
                    </Link>
                </Button>
            </Container>


        </Container >
    );
};

export default Home;
