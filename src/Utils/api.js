import axios from "axios";
const articlesApi = axios.create({
    baseURL: "https://nc-news-july.herokuapp.com/api"
});

export const getArticles = () => {
    return articlesApi.get('/articles').then((res) => {
        return res.data;
    });
};
export const getTopics = () => {
    return articlesApi.get('/topics').then((res) => {
        return res.data;
    });
};
export const getArticlesBySlug = (topic) => {
    return articlesApi.get(`/articles?topic=${topic}`).then((res) => {
        return res.data;
    });
};