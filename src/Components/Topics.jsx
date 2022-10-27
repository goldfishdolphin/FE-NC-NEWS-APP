import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../Utils/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        getTopics()
            .then(({ topic }) => {
                setTopics(topic);
            });
    }, []);
    return (

        <main id="topic_main" className="text-center">
            <ul id="topic_ul">
                {topics.map((topic) => {
                    return (
                        <>
                            <h3 key={topic.slug} > {topic.slug}</h3>
                            <p>{topic.description}</p>
                            <Button className="text-white" variant='outline-dark'>
                                <Link to={`/topics/${topic.slug}`}>

                                    {topic.slug}

                                </Link>
                            </Button>

                        </>
                    );
                })}
            </ul>
        </main>

    );
};
export default Topics;