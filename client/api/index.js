import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3002'
// axios.defaults.baseURL = 'http://www.fyyd.vip:3002'
axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"] = "application/x-www-from-urlencoded"




export default {
    // postArticle({ type, title, content, tag, surface }) {
    //     return axios.post('/article/add', { type, title, content, tag, surface })
    // }
    // ,

   
    // getArticleShow(){
    //     return axios.post('/article/getShow')

    // }

}