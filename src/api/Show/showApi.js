import request from '../../utils/request';
import qs from 'qs'
import axios2 from '../../utils/resquest2';
import { dev_Url } from '../../utils/port'

//复制一份请柬
function _copyshow(id) {
    return request({
        baseURL: '',
        url:  dev_Url + `/api/show/copyshow`,
        method: 'post',
        data: qs.stringify({ showId: id.id,userId:id.user}),
    });
}

// 新建一份请柬
function _createshow() {
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/createshow`,
        method: 'post',
        data:'',
    });
}
// 删除请柬
function _deleteshow(id) {
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/deleteshow`,
        method: 'post',
        data:qs.stringify({ showId:id.showId}),
    });
}
// 开启/关闭请柬
function _enableshow() {
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/enableshow`,
        method: 'post',
        data:'',
    });
}

// 获取请柬属性
function _getshowpro(id) {
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/getshowpro`,
        method: 'post',
        data: qs.stringify({ showId: id.id}),
    });
}

// 获取请柬列表
function _getshows() {
    return request({
        baseURL: '',
        url:  dev_Url + `/api/show/getshows`,
        method: 'post',
        data:'',
    });
}

// 保存请柬属性   还没有测试成功
function _saveshowpro() {
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/saveshowpro`,
        method: 'post',
        data:qs.stringify({
            
            bigType: 0,
            dateCreate: "2021-09-26 16:37:16",
            dateUpdate: "2021-09-26 16:37:16",
            flows: "",
            hopeStyleColor: "#E17575",
            muOUrl: null,
            mubanFlag: 0,
            mubanIsFree: 0,
            mubanType: 1,
            musicName: null,
            openPageBackimg: null,
            openPageType: "mengban",
            openPageUse: 0,
            pageCanSlide: 1,
            pageCanSort: 1,
            pageLoop: 1,
            pageType: "tb",
            pageWithIcon: 1,
            photoNum: 0,
            sasksNo: 0,
            scontant: null,
            sdatasNo: 0,
            sdianzhanNo: 0,
            sdirection: 0,
            sheight: "630",
            showId: 348997,
            showIdS: "R73dee3e7R",
            showSize: null,
            smNoCalc: 0,
            stitle: "新建场景",
            stype: 0,
            surl: "b659276e01a54fd0933d652fba72cacf.jpg",
            swidth: "400",
            trButtons: "0,0,0,0,0,0,0",
            trButtonsUse: 0,
            userId: 13,
            valid: 1,
            withBottomWish: 1,
            withoutLoading: 0,
              
        }),
    });
}

export { _copyshow, _createshow, _deleteshow,_enableshow,_getshowpro,_getshows ,  _saveshowpro}