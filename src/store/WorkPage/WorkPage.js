import { _addpage, _copypage, _deletepage, _getpages, _savepage, _savepagesorder } from "../../api/Page/pageApi";


const WorkPageSwitchBtn = {
    namespaced: true,
    state: {
        menuList: [
            {
                name: "图文",
            },
            {
                name: "作者",
            },
            {
                name: "画图",
            },
            {
                name: "推荐",
            },
            {
                name: "热门",
            },
        ],
        // 左侧开关按钮
        isLeftMenu: true,
        //  记录当前索引状态
        isLeftMenuIndex: 0,
        // 记录操作级路
        isLeftMenuIndexList: [0],
        // 页面数据
        PageData: '',
    },
    getters: {
        PageData: state => PageData
    },
    mutations: {
        SET_LeftMenu(state, index, options) {
            state.isLeftMenuIndex = index.index
            //    关闭打开逻辑
            if (index.type == true && state.isLeftMenuIndex == index.index) {
                state.isLeftMenu = false
                console.log('关闭')
            } else if (state.isLeftMenu == false) {
                state.isLeftMenu = true
            }
        },
        // 获取page数据并存储
        GET_PageData(state, playlod) {
            state.PageData = playlod.PageData
        }
    },
    actions: {
        // 获取页面数据
        GetPageData({ commit }, id) {
            _getpages({ id })
                .then(
                    (res) => {
                        commit('GET_PageData', { PageData: res.data })
                    }
                );
        },
        // 新增页面
        AddPageData({ commit }, id) {
            _addpage({ id }).then(
                (res => {
                    console.log(res.data)
                })
            )
        },
        // 新增页面
        SavePageData({ commit }, newData) {
            _savepage({ newData }).then(
                (res => {
                    console.log(res.data)
                })
            )
        },
        // 删除页面
        DelPageData({ commit, dispatch }, delData) {
            // console.log(delData.showId)
            _deletepage({ delData })
                .then(
                    (res => {
                        if (res.data === '删除成功') {
                            dispatch('GetPageData', delData.showId)
                        }
                    })
                )
        }
    }
}



export default WorkPageSwitchBtn;
