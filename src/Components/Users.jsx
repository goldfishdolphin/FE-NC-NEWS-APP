import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../Utils/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
            setIsLoading(false);
        });

    }, []);
    if (isLoading) {
        return <p className="Loading">Loading...</p>;
    }

    return (
        <>
            <Container className="users">
                <section className="User_card">
                    <Row className="=users">
                        {users.map((user) => {
                            return (
                                <Col key={user.username} md={6}>

                                    <img
                                        src={user.avatar_url}
                                        alt={`${user.username}'s avatar`}
                                        width="300"
                                        height="200"
                                        class='img-rounded-circle'
                                        className="p-2 m-4"
                                        border-style='solid'

                                    />
                                    <p>{user.name}</p>
                                    <Button onClick={() => setLoggedInUser(user)}>Log In</Button>

                                </Col>
                            );
                        })}
                    </Row>
                </section>
            </Container>
        </>
    );
};
export default Users;