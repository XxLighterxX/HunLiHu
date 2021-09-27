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
    },
    actions: {
        GetIndexData({ commit }) {
            _getshows({}).then(
                (response) => {
                    // console.log(response.data)
                    commit('Get_IndexData', { indexListData: response.data.content })
                }
            );
        }
    }
}



export default indexPageData;
