import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getTopics } from "../Utils/api";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        getTopics()
            .then(({ topics }) => {
                console.log(topics);
                setTopics(topics);
            });
    }, []);
    return (
        <main id="topic_main">
            <ul id="topic_ul">
                {topics.map((topic) => {
                    return (
                        // <Link to={`/topics/${topic.slug}`}>
                        <li key={topic.slug}>{topic.slug}</li>
                        // </Link>
                        // <p>{topic}</p>
                    );
                })}
            </ul>
        </main>

    );
};
export default Topics;