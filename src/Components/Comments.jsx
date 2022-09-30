import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../Utils/api";
import CommentAdder from "./CommentAdder";
const Comments = () => {
    const [comments, setComments] = useState([]);
    const [CommentToDel, setCommentToDel] = useState(null);
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
            <CommentAdder setComments={setComments} />
            <ol className="comments_list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <p>posted by: {comment.author}</p>
                            <p>{comment.body}</p>
                            <p className="emo">✍️</p>
                            <p>{' '}</p>
                            <button onClick={() => { }}>Delete</button>
                        </li>
                    );
                })}


            </ol>
        </section>
    );
};
export default Comments;