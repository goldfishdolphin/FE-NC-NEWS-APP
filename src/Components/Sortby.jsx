import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Sortby = () => {
    const [searchParams, setSearchParams] = useSearchParams();
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
            <br />
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
            <Button type='submit' className="m-1">Sort</Button>
        </form>

    );
};
export default Sortby;