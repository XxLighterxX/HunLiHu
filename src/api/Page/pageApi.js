import request from '../../utils/request';
import qs from 'qs'
import axios2 from '../../utils/resquest2';
import { dev_Url } from '../../utils/port'

// POST /api/page/addpage/添加一个空白页面
// POST /api/page/copypage/复制一个页面
// POST /api/page/deletepage/添加一个空白页面
// POST /api/page/getpages/获取page页面
// POST /api/page/savepage/保存页面
// POST /api/page/savepagesorder/保存页面页码[{userId,pageId,showId,pNo}]json数组


//添加一个空白页面
function _addpage(id) {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/page/addpage`,
        method: "post",
        data: qs.stringify({ showId: 348983 }),
    });
}

// 复制一个页面
function _copypage(id) {
    // console.log({...id})
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/page/copypage`,
        method: "post",
        data: qs.stringify({...id}),
    });
}

// 删除一个空白页面
function _deletepage(id) {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: `/api/api/page/deletepage`,
        method: "post",
        data: qs.stringify({...id}),
    });
}

// 获取page页面  返回空数组
function _getpages() {
    return request({
        baseURL: '',
        url: `/api/api/page/getpages`,
        method: "post",
        data: qs.stringify({ showId: 348983 }),
    });
}

// 保存页面
function _savepage() {
    return request({
        baseURL: '',
        url: `/api/api/page/savepage`,
        method: "post",
        data: qs.stringify({ showId: 348983 }),
    });
}

// 保存页面页码
function _savepagesorder() {
    return request({
        baseURL: '',
        url: `/api/api/page/savepagesorder`,
        method: "post",
        data: '',
    });
}

export { _addpage, _copypage, _deletepage, _getpages, _savepage, _savepagesorder }