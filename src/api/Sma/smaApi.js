import request from '../../utils/request';
import qs from 'qs'
import axios2 from '../../utils/resquest2';
import { dev_Url } from '../../utils/port'


// POST /api/sma/deletepagesmaterials/获取page下素材
// POST /api/sma/getpagesmaterials/获取page下素材
// POST /api/sma/savepagesmaterials/保存素材

//获取page下素材
function _deletepagesmaterials() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/sma/deletepagesmaterials`,
        method: "post",
        data:'',
    });
}

// 获取page下素材
function _getpagesmaterials() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/sma/getpagesmaterials`,
        method: "post",
        data:'',
    });
}

// 保存素材
function _savepagesmaterials() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/sma/savepagesmaterials`,
        method: "post",
        data:'',
    });
}

export { _deletepagesmaterials, _getpagesmaterials, _savepagesmaterials}