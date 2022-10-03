import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../Utils/api";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        getTopics()
            .then(({ topic }) => {
                setTopics(topic);
            });
    }, []);
    return (

        <main id="topic_main">
            <ul id="topic_ul">
                {topics.map((topic) => {
                    return (
                        <Link to={`/topics/${topic.slug}`}><li key={topic.slug}>
                            <h3> {topic.slug}</h3>
                        </li>
                        </Link>

                    );
                })}
            </ul>
        </main>

    );
};
export default Topics;