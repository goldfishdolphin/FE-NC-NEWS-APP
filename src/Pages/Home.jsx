import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import News from "./News.jpg";
import { Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container className='text-center' >
            <Card className="bg-light text-black " style={{ border: 'none' }}>
                <Card.Img src={News} alt="Card image" className="" style={{ height: "100%", width: "100% " }} />
                <Card.ImgOverlay>
                    <Card.Title className="text-center" style={{ fontSize: 32, }}>Welcome to Home!</Card.Title>
                    <br /><br /><br /><br /><br /><br />
                    <Button className='p-3 m-2' size='lg' variant="dark" style={{ fontSize: 20, textAlign: 'center' }} >
                        <Link className="text-center text-white" to={'/articles'}>
                            Enter
                        </Link>
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default Home;
