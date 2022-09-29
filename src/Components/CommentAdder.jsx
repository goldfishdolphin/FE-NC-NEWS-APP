import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../Utils/api";

const CommentAdder = () => {
    const [newComment, setNewComment] = useState('');
    const { article_id } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        postComments(article_id, newComment).then(({ comment }) => {

            setNewComment(comment);


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