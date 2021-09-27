import axios from 'axios'
//创建一个axios对象
const axios2 = axios.create({
    baseURL: "",
    timeout: 10000,
    headers:{},    
    withCredentials: true,
})


//请求拦截
//所有网络请求都会走这个方法
axios2.interceptors.request.use(
    function (config) {
        config.headers['Authorization']= localStorage.getItem('token')
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    },
    function (err) {
        return Promise.reject(err);
    }
)
//响应拦截
//所有的网络请求返回数据之后都会执行这个方法
axios2.interceptors.response.use(
    function (response) {
        return response
    },
    function (err) {
        return Promise.reject(err);
    }
)

export default axios2
