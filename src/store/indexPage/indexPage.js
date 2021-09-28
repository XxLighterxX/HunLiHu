import {
    _copyshow,
    _createshow,
    _deleteshow,
    _enableshow,
    _getshowpro,
    _getshows,
    _saveshowpro,
} from "../../api/Show/showApi";


const indexPageData = {
    namespaced: true,
    state: {
        indexList: []
    },
    getters: {

    },
    mutations: {
        Get_IndexData(state, payload) {
            // console.log(payload.indexListData)
             state.indexList = payload.indexListData
        },
        // 删除
        POST_DelListData(state, payload){
           console.log(payload.msg)
        }
    },
    actions: {
        // 请求列表数据
        GetIndexData({ commit }) {
            _getshows({}).then(
                (response) => {
                    // console.log(response.data)
                    commit('Get_IndexData', { indexListData: response.data.content })
                }
            );
        },
        // 删除数据
        DelListData({dispatch,commit},showId){
            _deleteshow({showId}).then(
                (res=>{
                    commit('Get_IndexData', { msg: res.data })
                    setTimeout(()=>{
                        dispatch('GetIndexData')
                    },500)
                })
            )
        },
        // 新建请柬
        AddListData({dispatch,commit}){
            _createshow({}).then(
                (res=>{
                    // commit('Get_IndexData', {})
                    console.log(res.data)
                    setTimeout(()=>{
                        dispatch('GetIndexData')
                    },500)
                })
            )
        },
        // 获取请柬属性
        GetShowsData({dispatch,commit},id){
            _getshowpro({id}).then(
                (res=>{
                    if(res != null){
                        sessionStorage.setItem('goods',JSON.stringify(res.data))
                    }
                })
            )
        }
    }
}



export default indexPageData;
