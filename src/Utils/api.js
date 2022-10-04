import axios from "axios";
const articlesApi = axios.create({
    baseURL: "https://nc-news-july.herokuapp.com/api"
});

export const getArticles = (topic, sort_by, order) => {
    return articlesApi.get('/articles', { params: { topic, sort_by, order } }).then((res) => {
        return res.data;
    });
};
export const getArticlesBySlug = (topic) => {
    return articlesApi.get(`/articles?topic=${topic}`).then((res) => {
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
        return res.data;
    });
};
export const postComments = (article_id, user, body) => {

    return articlesApi.post(`/articles/${article_id}/comments`, { username: user.username, body: body }).then((res) => {
        return res.data;
    });
};
export const getUsers = () => {
    return articlesApi.get(`/users`).then((res) => {
        return res.data;
    });
};

export const delComment = (comment_id) => {
    return articlesApi.delete(`/comments/${comment_id}`).then((res) => {
        console.log(res);
        return res;
    });
}

