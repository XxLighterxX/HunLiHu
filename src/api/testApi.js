import request from '../utils/request';


function _getTestJson() {
    return request({
        baseURL:'',
        url:'/js/test.json',
        method:"get",
        data:"",
    });
}

export {_getTestJson}