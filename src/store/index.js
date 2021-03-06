import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import darg from './Darg/Darg.js'
import WorkPageSwitchBtn from './WorkPage/WorkPage.js'
import indexPageData from './indexPage/indexPage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      temp:'123'
  },
  mutations: {
      
  },
  actions: {
  },
  modules: {
    darg,
    WorkPageSwitchBtn,
    indexPageData
  },
  plugins: [createPersistedState({
    storage:window.sessionStorage,
    reducer(val)  {
        // console.log(val.darg.test1)
        return {
            // 存放数据
            indexListData:val.indexPageData.indexList,
            workPageData:val.WorkPageSwitchBtn.PageData
        }
    }
})]
})
