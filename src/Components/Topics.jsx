import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../Utils/api";
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
                            <h3 key={topic.slug} className='p-2 mt-2' > {(topic.slug).toUpperCase()}</h3>
                            <p>{topic.description}</p> All About:
                            <Button className="text-white m-1" variant='primary'>
                                <Link className="text-white" style={{ link: { color: 'pink' } }} to={`/topics/${topic.slug}`}>
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