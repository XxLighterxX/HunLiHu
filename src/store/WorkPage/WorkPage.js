

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
        isLeftMenuIndexList: [0]
    },
    getters: {

    },
    mutations: {
        SET_LeftMenu(state, index, options) {
            state.isLeftMenuIndex = index.index
            //    关闭打开逻辑
            if(index.type == true && state.isLeftMenuIndex == index.index){
                state.isLeftMenu = false
                console.log('关闭')
            }else if (state.isLeftMenu == false){
                state.isLeftMenu = true
            }
        },
    },
    actions: {

    }
}



export default WorkPageSwitchBtn;
