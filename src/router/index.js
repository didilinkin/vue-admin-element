import Vue                  from 'vue'
import Router               from 'vue-router'
import Login                from '@/views/Login'
import Filtrate             from '@/components/Table/Filtrate'
import ExpandableRows       from '@/components/Table/ExpandableRows'


Vue.use( Router )

export default new Router({
    routes: [
        {
            // TEST component
            path        : '/',
            name        : 'Filtrate',
            component   :  Login
        }
    ]
})
