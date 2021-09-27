import request from '../utils/request';
import qs from 'qs'
import axios2 from '../utils/resquest2';
import { dev_Url } from '../utils/port'


// 获取本地数据
function _getTestJson() {
    return request({
        baseURL:'',
        url:'/js/test.json',
        method:"get",
        data:"",
    });
}
// 用户登录
function _userLogin(userInput) {
    console.log(userInput)
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/login`,
        method: "post",
        data: qs.stringify({ username: userInput.username, password: userInput.password }),
    });
}

export { _userLogin, _getTestJson }