import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios
            .get(`https://nc-news-july.herokuapp.com/api/articles`)
            .then(({ data }) => {
                console.log(data.articles);
                setArticles(data.articles);
            });
    }, []);
    return (
        <main id="all_main">
            <ul>
                {articles.map((article) => {
                    return (
                        <Link to={`/items/${article.article_id}`}>
                            {' '}
                            <li key={article.article_id.item_id}>{article.title} </li>
                        </Link>
                    );
                })}
            </ul>
        </main>
    );

};
export default AllArticles;