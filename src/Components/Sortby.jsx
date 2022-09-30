import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sortby = () => {
    const { searchParams } = useSearchParams();
    const sort_by = searchParams.get('sort_by');
    const order = searchParams.get('order');
    const [newSort, setNewSort] = useState(sort_by);
    const [newOrder, setNewOrder] = useState(order);


    return (
        <form method="GET">
            <label htmlFor="choose_sortBy">Sort by</label>
            <select name="sort_by"
                id="choose_sortBy"
                value={newSort ? newSort : 'created_at'}
                onChange={(e) => {
                    setNewSort(e.target.value);
                }}
            >
                <option value="title">Article Title</option>
                <option value="vote">Votes</option>
                <option value={'comments_count'}>Number of Comments</option>
                <option value={'author'}>Author</option>
                <option value={'topic'}>Topic</option>
            </select>
            <label htmlFor="order">Order by</label>
            <select name="order"
                id="choose_order"
                value={newOrder ? newOrder : 'desc'}
                onChange={(e) => {
                    setNewOrder(e.target.value);
                }}
            >
                <option value='desc'>Desecending Order</option>
                <option value='asc'>Ascending Order</option>
            </select>
            <button type='submit'>Sort</button>
        </form>

    );
};
export default Sortby;