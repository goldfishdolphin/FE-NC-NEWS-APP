import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getComments, delComment } from "../Utils/api";
import CommentAdder from "./CommentAdder";
import { UserContext } from "../contexts/User";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


const Comments = () => {
    const [comments, setComments] = useState([]);
    const { loggedInUser } = useContext(UserContext);
    const { article_id } = useParams();
    useEffect(() => {
        getComments(article_id)
            .then(({ comments }) => {
                setComments(comments);
            });

    }, [article_id]);
    const handleDeleteComment = (e, comment_id) => {
        e.preventDefault();
        delComment(comment_id);
    };


    return (
        <Container style={{ 'background-color': '#white' }} >
            <CommentAdder setComments={setComments} />

            <ol className="text-center">
                {comments.map((comment) => {
                    return (
                        <Card className="p-1" style={{ 'margin-right': '30px' }}>

                            <p>posted by: {comment.author}</p>
                            <p>{comment.body}</p>
                            <span role="img" aria-label='hand-written'> ✍️</span>
                            <p>{' '}</p>
                            {comment.author === loggedInUser.username ? (<Button size='sm' className='m-4' onClick={(e) => { handleDeleteComment(e, comment.comment_id); }}>
                                Delete</Button>) : ("")}

                        </Card>
                    );
                })}
            </ol>
        </Container>
    );
};
export default Comments;;