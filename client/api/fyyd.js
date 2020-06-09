import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost'
axios.defaults.baseURL = 'http://fyyd.vip:3002'
axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"]="application/x-www-from-urlencoded"




export default{


getArticleShow(){
    return axios.post('/article/getShow')

},
postArticleDel({ title }) {
    return axios.post('/article/delete', { title })
}

}