import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../Utils/api";
import { UserContext } from "../contexts/User";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const CommentAdder = ({ setComments }) => {
    const { loggedInUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState('');

    const { article_id } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        postComments(article_id, loggedInUser, newComment).then(({ comment }) => {
            setComments((currComments) => {
                return [comment, ...currComments];
            });
            setNewComment('');

        });
    };

    return (
        <section style={{ 'background-color': '#white' }}>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        onChange={(e) => { setNewComment(e.target.value); }} value={newComment}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit" className="mb-3">
                    Post Comments
                </Button>
            </Form>
        </section>

    );

};
export default CommentAdder;