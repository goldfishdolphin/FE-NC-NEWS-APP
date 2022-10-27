import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticle } from "../Utils/api";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import moment from "moment";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import Container from "react-bootstrap/Container";

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
                console.log(article);
                setArticle(article);
                setVotesInc(article.votes);
            });

    }, [article_id]);
    return (
        <Container style={{ 'background-color': '#DBDAE0' }}>
            <Card className='text-center' style={{ 'background-color': '#DBDAE0' }} >
                <Card.Header className="text-center" style={{ "list-style": "none ", 'padding': '10px' }}>
                    <Card.Title>{article.title}</Card.Title>
                    <li> {moment(article.created_at).format('dddd, MMMM Do YYYY')}</li>
                    <li>author: {article.author}</li>
                </Card.Header>
                <Card.Body className='text-black' style={{
                    "list-style": "none ", textAlign: 'justify', padding: '10px'
                }} key={article.article_id}>
                    <li>{article.body}</li>
                    <li className="text-center">Topic: {article.topic}</li>
                    <li className="text-center">Comments Count: {article.comment_count}</li>
                    <li className="text-center">Votes :
                        <Button className='p-1 m-2' variant='success' onClick={() => handleVotesIncrement(article.article_id)}>{votesInc}<span aria-label={`votes for article ${article.title}`} role='img'> 👍</span></Button></li>
                    <p id='vote_msg'>{votesMsg}</p>
                </Card.Body>

                <Accordion className="text-center" >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="d-grid gap-4">
                            <Button className="text-center">
                                Read and Post Comments
                            </Button>
                        </Accordion.Header>
                        <Accordion.Body> <Comments /></Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </Container>
    );
};
export default IndividualArticle;