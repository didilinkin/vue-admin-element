import Vue                  from 'vue'
import Vuex                 from 'vuex'
import  * as getters        from './getters'
// 导入各个模块的初始状态和 mutations
import viewState        from './modules/viewState'

Vue.use(Vuex)

// export default new Vuex.Store({
//     // 组合各个模块
//     modules: {
//         viewState
//     }
// })

const store = new Vuex.Store({
    getters,
    // 组合各个模块
    modules: {
        viewState
    }
})
if (module.hot) {
    module.hot.accept([
        './getters'
    ], () => {
        store.hotUpdate({
            getters: require('./getters')
        })
    })
}

export default store