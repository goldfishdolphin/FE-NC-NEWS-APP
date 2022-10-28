import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../Utils/api";
import moment from 'moment';
import Sortby from "./Sortby";
import { useSearchParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AllArticles = () => {
    const { topic } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const sort_by = searchParams.get('sort_by');
    const order = searchParams.get('order');
    useEffect(() => {
        setIsLoading(true);
        getArticles(topic, sort_by, order)
            .then(({ articles }) => {
                setArticles(articles);
                setIsLoading(false);
            });
    }, [topic, sort_by, order]);
    if (isLoading) return <p>The articles are Loading...</p>;
    return (

        <main id="articles_main">
            <Sortby />
            <ul style={{ 'margin-right': '2rem' }}>
                {articles.map((article) => {
                    return (
                        <Card style={{ 'background-color': '#DBDAE0', 'margin-top': '10px', 'padding': '30px', 'border': 'dashed' }} className='text-center'>
                            <li key={article.article_id}>
                                <h3>{article.title}</h3>
                                <p>author: {article.author}</p>
                                <p> {moment(article.created_at).format('dddd, MMMM Do YYYY')}</p>
                                <p>Topic: {article.topic}</p>
                                <Button variant='dark' >
                                    <Link to={`/articles/${article.article_id}`} className="text-white">Read Article
                                    </Link>
                                </Button>
                            </li>
                        </Card>
                    );
                })}
            </ul>
        </main>
    );

};
export default AllArticles;
