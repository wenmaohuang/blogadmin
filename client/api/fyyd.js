import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3002'
axios.defaults.baseURL = 'http://www.fyyd.vip:3002'
axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"]="application/x-www-from-urlencoded"




export default{


getArticleTitle(){
    return axios.post('/article/getShowTitle')

},
postArticleDel({ title }) {
    return axios.post('/article/delete', { title })
},
postArticleUpdate({type,title,tag,content}){
    return axios.post('/article/edit',{type,title,tag,content})
},
postArticle({ type, title, content, tag, surface }) {
    return axios.post('/article/add', { type, title, content, tag, surface })
},
postDaily({content,time}){
    return axios.post('/daily/add',{content,time})
},

}