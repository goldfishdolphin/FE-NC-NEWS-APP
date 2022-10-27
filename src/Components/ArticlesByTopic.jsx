import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesBySlug } from "../Utils/api";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
        <Row>
            <main id="abt_main">
                <ul>
                    {articlesByTopic.map((article) => {
                        return (
                            <Col className="mt-4 text-center" style={{ border: 'solid', 'margin-right': '25px' }}>
                                <div key={article.article_id} className='article_topic'>
                                    <h4>{article.title}</h4>
                                    <p>Topic: {article.topic}</p>
                                    <p>Votes: {article.votes}</p>
                                    <p>Created At: {moment(article.created_at).format('dddd, MMMM Do YYYY')}</p>
                                    <Button className="text-center" variant="outline-success" >
                                        <Link className='text-black' to={`/articles/${article.article_id}`}>Read </Link></Button>

                                </div>
                            </Col>
                        );

                    })}
                </ul>

            </main>
        </Row >
    );
};
export default ArticlesByTopic;