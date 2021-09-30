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
        url: dev_Url + `/api/page/addpage`,
        method: "post",
        data: qs.stringify({ showId: 348983}),
    });
}

// 复制一个页面
function _copypage(id) {
    // console.log({...id})
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: dev_Url + `/api/page/copypage`,
        method: "post",
        data: qs.stringify({ ...id }),
    });
}

// 删除一个空白页面
function _deletepage(delData) {
     let {showId,pageId} = delData.delData
    return request({
        baseURL: '',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url:  dev_Url + `/api/page/deletepage`,
        method: "post",
        data: qs.stringify({ showId:showId,pageId:pageId }),
    });
}

// 获取page页面  
function _getpages(id) {
    return request({
        baseURL: '',
        url: dev_Url + `/api/page/getpages`,
        method: "post",
        data: qs.stringify({ showId: id.id }),
    });
}

// 保存页面
function _savepage({ newData }) {
    return request({
        baseURL: '',
        url:  dev_Url + `/api/page/savepage`,
        headers: { 'Content-Type': 'application/json' },
        method: "post",
        data: { showId: 349000, jsons: [{ "page_id": "1839591", "p_no": "1", "is_hide": "0" },{ "page_id": "1839591", "p_no": "1", "is_hide": "0" }, { "page_id": "1839590", "p_no": "2", "is_hide": "0" }, { "page_id": "1839589", "p_no": "3", "is_hide": "0" }, { "page_id": "1839592", "p_no": "4", "is_hide": "0" }, { "page_id": "1839607", "p_no": "5", "is_hide": "0" }, { "page_id": "1839614", "p_no": "6", "is_hide": "0" }, { "page_id": "1839617", "p_no": "7", "is_hide": "0" }, { "page_id": "1839618", "p_no": "8", "is_hide": "0" }, { "page_id": "1839619", "p_no": "9", "is_hide": "0" }, { "page_id": "1839622", "p_no": "10", "is_hide": "0" }] },
    });
}

// 保存页面页码
function _savepagesorder() {
    return request({
        baseURL: '',
        url:  dev_Url + `/api/page/savepagesorder`,
        method: "post",
        data: '',
    });
}

export { _addpage, _copypage, _deletepage, _getpages, _savepage, _savepagesorder }