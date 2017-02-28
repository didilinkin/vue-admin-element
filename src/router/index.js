import Vue                  from 'vue'
import Router               from 'vue-router'
import Filtrate             from '@/components/Table/Filtrate'
import ExpandableRows       from '@/components/Table/ExpandableRows'


Vue.use( Router )

export default new Router({
    routes: [
        {
            path        : '/',
            name        : 'Filtrate',
            component   :  Filtrate
        }
    ]
})
