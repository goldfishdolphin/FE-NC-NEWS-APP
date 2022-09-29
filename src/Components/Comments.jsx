import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Utils/api";
import CommentAdder from "./CommentAdder";
const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    useEffect(() => {
        getComments(article_id)
            .then(({ comments }) => {
                setComments(comments);
            });

    }, [article_id]);
    return (
        <section id="comments">
            <h3>Comments</h3>
            <CommentAdder />
            <ol className="comments_list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <p>{comment.body}</p>
                            <p className="emo">✍️</p>
                            <p>{' '}</p>
                        </li>
                    );
                })}

            </ol>
        </section>
    );
};
export default Comments;