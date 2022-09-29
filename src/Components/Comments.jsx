import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Utils/api";
const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    console.log(article_id);
    useEffect(() => {
        getComments(article_id)
            .then(({ comments }) => {
                setComments(comments);
            });

    }, [article_id]);
    return (
        <section id="comments">
            <h3>Comments</h3>
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