import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticle } from "../Utils/api";
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
            patchArticle(article_id);
            setVotesInc((currVotes) => currVotes + 1);
            setHasVoted(true);
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
        <main className="article_main">
            <h4>{article.title}</h4>
            <ul>
                <li>author: {article.author}</li>
                <li> {moment(article.created_at).format('dddd, MMMM Do YYYY')}</li>
                <li>Topic: {article.topic}</li>
                <li>Comments Count: {article.comment_count}</li>
                <li>Votes :{article.votes}</li>
                <button onClick={() => handleVotesIncrement(article.article_id)}>{votesInc}<span aria-label={`votes for article ${article.title}`}> 👍</span></button>
                <p id='vote_msg'>{votesMsg}</p>
                <Link to={`/articles/${article.article_id}/comments`}>View Comments ✍️ </Link>


            </ul>


        </main >
    );
};
export default IndividualArticle;