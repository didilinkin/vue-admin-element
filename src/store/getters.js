// Getters 接收 $store的 state 作为参数
export const breadcrumbLevel    = state => state.viewState.breadcrumbLevel                  // viewState - 面包屑级别
export const get_sideBarList    = state => state.viewState.sideBarList                      // viewState - 用户侧导航栏列表