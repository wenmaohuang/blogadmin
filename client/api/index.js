import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"]="application/x-www-from-urlencoded"
