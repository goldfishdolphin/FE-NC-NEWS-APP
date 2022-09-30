import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../Utils/api";
import moment from 'moment';
import Sortby from "./Sortby";
import { useSearchParams } from "react-router-dom";

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
            <ul>
                {articles.map((article) => {
                    return (
                        <div>
                            <li key={article.article_id}>
                                <h3>{article.title}</h3>
                                <p>author: {article.author}</p>
                                <p> {moment(article.created_at).format('dddd, MMMM Do YYYY')}</p>
                                <p>Topic: {article.topic}</p>
                            </li>

                            <Link to={`/articles/${article.article_id}`}>View Details
                            </Link>
                        </div>

                    );
                })}
            </ul>
        </main>
    );

};
export default AllArticles;
