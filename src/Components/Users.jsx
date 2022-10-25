import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../Utils/api";

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
        <section className="User_card">
            <ul >
                {users.map((user) => {
                    return (
                        <li key={user.username}>
                            <img src={user.avatar_url} alt={`${user.username}'s avatar`}></img>
                            <p>{user.name}</p>
                            <button onClick={() => setLoggedInUser(user)}>Log In</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default Users;