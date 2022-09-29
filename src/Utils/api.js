import axios from "axios";
const articlesApi = axios.create({
    baseURL: "https://nc-news-july.herokuapp.com/api"
});

export const getArticles = (topic) => {
    return articlesApi.get('/articles', { params: { topic } }).then((res) => {
        return res.data;
    });
};
export const getTopics = () => {
    return articlesApi.get('/topics').then((res) => {
        return res.data;
    });
};

export const getArticle = (article_id) => {
    return articlesApi.get(`/articles/${article_id}`).then((res) => {
        return res.data;
    });
};
export const patchArticle = (article_id) => {
    const votesInc = { inc_votes: 1 };
    return articlesApi.patch(`/articles/${article_id}`, votesInc).then((res) => {
        return res.data;
    });
};
export const getComments = (article_id) => {
    return articlesApi.get(`/articles/${article_id}/comments`).then((res) => {
        console.log(res.data);
        return res.data;
    });
};
export const postComments = (article_id, newComment) => {
    return articlesApi.post(`/articles/${article_id}/comments`, newComment).then((res) => {
        return res.data;
    });
};

