## Project structure / 页面结构

```shell
Project
    |
    |- src/
        |
        |- assets/                                                  // Vue引用静态资源
        |- components/                                              // Vue组件( 全局可复用的小组件 )
        |- pages/                                                   // 路由页面( 侧面导航跳转页面, 小页面 )
            |
            |- Charge/                                              // '收费管理' 
                |- RentManagement/                                  // '租金管理'
                    |- RentQuery.vue                                // '应收查询'
                    |- RentRecord.vue                               // '租金记录'
                |- PropertyCharges/                                 // '物业收费'
                    |- PropertyQuery.vue                            // '物业费查询'
                    |- PropertyRecord.vue                           // '物业费记录'
                |- ElectricityBill/                                 // '抄表电费'
                    |- ElectricityBillQuery.vue                     // '电费查询'
                    |- ElectricityBillRecord.vue                    // '电费记录'
                    |- ElectricityBillEntry.vue                     // '电费录入'
                    |- PeakflatvalleyEntry.vue                      // '峰平谷录入'                    
                |- WaterFee/                                        // '抄表水费'
                    |- WaterFeeQuery.vue                            // '水费查询'   
                    |- WaterFeeRecord.vue                           // '水费记录'   
                    |- WaterFeeEntry.vue                            // '水表录入'   
            |- Customer/                                            // '客户管理' 
            |- RealEstate/                                          // '房产管理' 
            |- Financial/                                           // '财务管理' 
            |- System/                                              // '系统管理' 
        |- router/                                                  // 路由配置
        |- sass/                                                    // Sass配置文件
        |- store/                                                   // Vuex状态管理
        |- views/                                                   // 大页面( 如欢迎页, 登录页, 404页面等 )
        |- App.vue                                                  // 主组件
        |- main.js                                                  // Vue主配置
``` 
