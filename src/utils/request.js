import axios from 'axios'
import qs from 'qs'

var baseURLStr = "//devdb.hunlihu.com/hlnh5"

//创建一个axios对象
 const instance = axios.create({
    baseURL: "/",
    timeout: 10000,
    headers:{},    
    withCredentials: true,
})

// // 模拟Cookie
// let testCookie = 'JSESSIONID=4626EC6A753D9213BC9C61A2ECE7AA0D'

//请求拦截
//所有网络请求都会走这个方法
instance.interceptors.request.use(
    function (config) {
        // console.group("全局请求拦截")
        // console.log(config)
        // console.groupEnd()
        // config.headers.token = localStorage.getItem('token')
        config.headers['Authorization']=  localStorage.getItem('token')
        // config.headers['Content-Type'] = 'application/json'
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        // config.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, DELETE'
        // config.headers['Access-Control-Max-Age'] = '3600'
        // config.headers['Access-Control-Allow-Credentials'] = 'true'
        // config.headers['Access-Control-Allow-Origin'] = 'https://yourong.yourongdaijian.com' 
        return config
    },
    function (err) {
        return Promise.reject(err);
    }
)
//响应拦截
//所有的网络请求返回数据之后都会执行这个方法
instance.interceptors.response.use(
    function (response) {
        // console.group('全局响应拦截')
        // console.log(response)
        // console.groupEnd()
        return response
    },
    function (err) {
        return Promise.reject(err);
    }
)


// // 获取Token
// export function PostToken(url, params) {
//     return instance.post(url,{params});
// }

// // 入驻意向注册
// export function PostRegister(url){
//      return instance.post(url,arguments[1]);
// }

export default instance