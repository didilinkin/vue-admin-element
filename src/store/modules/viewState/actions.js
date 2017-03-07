import  * as types      from    './mutation-types'

export default{
    setBreadcrumbLevel: ( { commit }, breadcrumbLevelObj ) => {
        commit( types.SET_BREADCRUMB_LEVEL, breadcrumbLevelObj )
    }
}
