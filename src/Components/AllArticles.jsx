import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Utils/api";
import moment from 'moment';

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles()
            .then(({ articles }) => {
                setArticles(articles);
            });
    }, []);
    return (

        <main id="articles_main">
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

                            <Link to={`/articles/${article.article_id}`}>Read
                            </Link>
                        </div>



                    );
                })}
            </ul>
        </main>
    );

};
export default AllArticles;
