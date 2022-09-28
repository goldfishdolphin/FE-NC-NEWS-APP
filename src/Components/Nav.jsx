import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}> <li>Home</li></Link>
                <Link to={'/articles'}> <li>Articles</li></Link>
                <Link to={`/topics`}> <li>Topics</li> </Link>

            </ul>
        </nav>
    );
};
export default Nav;