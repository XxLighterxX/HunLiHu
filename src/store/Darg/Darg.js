import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
import Vuex from 'vuex'
import { _getTestJson } from "../../api/testApi";

const darg = {
    namespaced: true,
    state: {
        temp: [
            {
                name: 'test'
            },
            {
                name: '123123'
            }
        ],
        test1: ''
    },
    getters: {

    },
    mutations: {
        GET_DARGDATA(state, payload) {
            state.test1 = payload.data
        },
    },
    actions: {
        AXIOS_GETTEST({ commit }) {
            _getTestJson({})
                .then(
                    (response) => {
                        // console.log(response)
                        commit('GET_DARGDATA', { data: response.data })
                    })
        }
    }
}



export default darg;
