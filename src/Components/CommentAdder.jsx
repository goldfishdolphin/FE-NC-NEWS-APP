import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../Utils/api";
import { UserContext } from "../contexts/User";

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
        <section>

            <form className="CommentAdder" onSubmit={(e) => handleSubmit(e)} >
                <label htmlFor="newComment"> Add a comment</label>
                <textarea
                    id="newComment"
                    value={newComment}
                    onChange={(e) => { setNewComment(e.target.value); }}
                > </textarea>
                <button> Add</button>
            </form>

        </section >

    );

};
export default CommentAdder;