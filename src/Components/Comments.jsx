import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getComments, delComment } from "../Utils/api";
import CommentAdder from "./CommentAdder";
import { UserContext } from "../contexts/User";

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
        <section id="comments">
            <h3>Comments</h3>
            <CommentAdder setComments={setComments} />
            <ol className="comments_list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <p>posted by: {comment.author}</p>
                            <p>{comment.body}</p>
                            <span role="img"> ✍️</span>
                            <p>{' '}</p>
                            {comment.author === loggedInUser.username ? (<button onClick={(e) => { handleDeleteComment(e, comment.comment_id); }}>Delete</button>) : ("")}

                        </li>
                    );
                })}


            </ol>
        </section>
    );
};
export default Comments;