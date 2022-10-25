import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesBySlug } from "../Utils/api";
import moment from "moment";

const ArticlesByTopic = () => {
    const [articlesByTopic, setArticlesByTopic] = useState([]);
    const { topic } = useParams();
    useEffect(() => {
        getArticlesBySlug(topic)
            .then(({ articles }) => {
                console.log(articles);
                setArticlesByTopic(articles);
            });
    }, [topic]);

    return (
        <main id="abt_main">
            <ul>
                {articlesByTopic.map((article) => {
                    return (
                        <div key={article.article_id} className='article_topic'>
                            <h4>{article.title}</h4>
                            <p>Topic: {article.topic}</p>
                            <p>Votes: {article.votes}</p>
                            <p>Created At: {moment(article.created_at).format('dddd, MMMM Do YYYY')}</p>
                            <Link to={`/articles/${article.article_id}`}>Read </Link>

                        </div>
                    );

                })}
            </ul>

        </main>

    );
};
export default ArticlesByTopic;