import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticle } from "../Utils/api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { Link } from "react-router-dom";

const IndividualArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [votesInc, setVotesInc] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [votesMsg, setVotesMsg] = useState('');


    const handleVotesIncrement = (article_id) => {
        if (!hasVoted) {
            patchArticle(article_id).then(() => {
                setVotesInc((currVotes) => currVotes + 1);
                setHasVoted(true);
            });

        } else {
            setVotesMsg('⛔ You have already voted. Sorry you cannot vote more than once.');

        }
    };
    useEffect(() => {
        getArticle(article_id)
            .then(({ article }) => {
                setArticle(article);
                setVotesInc(article.votes);
            });

    }, [article_id]);
    return (
        <Card>
            <h4>{article.title}</h4>
            <ul key={article.article_id}>
                <li>author: {article.author}</li>
                <li> {moment(article.created_at).format('dddd, MMMM Do YYYY')}</li>
                <li>Topic: {article.topic}</li>
                <li>Comments Count: {article.comment_count}</li>
                <li>Votes :
                    <Button className='p-1 m-2' variant='success' onClick={() => handleVotesIncrement(article.article_id)}>{votesInc}<span aria-label={`votes for article ${article.title}`} role='img'> 👍</span></Button></li>
                <p id='vote_msg'>{votesMsg}</p>
                <Link to={`/articles/${article.article_id}/comments`}>View Comments <span role='img' aria-label="write comment"> ✍️ </span></Link>
            </ul>
        </Card>
    );
};
export default IndividualArticle;