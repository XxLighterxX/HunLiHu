import request from '../utils/request';


function _addDarg() {
    return request({
        baseURL:'',
        url:'',
        method:"post",
        data:"",
    });
}

export { _addDarg }