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
            |- Charge/                                              //  收费管理
                |
                |- RentManagement/                                  //  租金管理
                    |- RentQuery.vue                                // '应收查询'
                    |- RentRecord.vue                               // '租金记录'
                |
                |- PropertyCharges/                                 //  物业收费
                    |- PropertyQuery.vue                            // '物业费查询'
                    |- PropertyRecord.vue                           // '物业费记录'
                |
                |- ElectricityBill/                                 //  抄表电费
                    |- ElectricityBillQuery.vue                     // '电费查询'
                    |- ElectricityBillRecord.vue                    // '电费记录'
                    |- ElectricityBillEntry.vue                     // '电费录入'
                    |- PeakflatvalleyEntry.vue                      // '峰平谷录入' 
                |                   
                |- WaterFee/                                        //  抄表水费
                    |- WaterFeeQuery.vue                            // '水费查询'   
                    |- WaterFeeRecord.vue                           // '水费记录'   
                    |- WaterFeeEntry.vue                            // '水表录入' 
            |- Customer/                                            // '客户管理' 
                |- CustomerInformation.vue                          // '客户资料'
                |- ContractManagement.vue                           // '合同管理'
                |- MarginManagement.vue                             // '保证金管理'
                |
                |- AccessCardManagement/                            // 门禁卡管理
                    |- AccessCardRegistration.vue                   // '门禁卡登记'
                    |- AccessCardDeposit.vue                        // '门禁卡押金'
            |- Building/                                            // '房产管理'
                | 
                |- RoomQuery/                                       // 房间查询
                    |- StatusDisplay.vue                            // '状态图示'
                    |- RegistrationMessage.vue                      // '注册信息'
                |
                |- RoomManagement/                                  // 房间管理
                    |- RoomManagement.vue                           // '房间管理'
                    |- BuildingManagement.vue                       // '楼宇管理'
            |- Financial/                                           //  财务管理
                |
                |- StatisticalReport/                               // 统计报告
                    |- Rent.vue                                     // '租金'
                    |- PropertyCosts.vue                            // '物业费'
                    |- ElectricityBill.vue                          // '抄表电费'
                    |- WaterFee.vue                                 // '抄表水费'
                |
                |- LeaseReview/                                     // 租赁审核
                    |- RentReview.vue                               // '租金审核'
                    |- AuditRecord.vue                              // '租赁审核记录'
                    |- LeaseMarginReview.vue                        // '保证金审核'
                |
                |- PropertyAudit/                                   // 物业审核
                    |- ElectricityAudit.vue                         // '电费审核'
                    |- WaterReview.vue                              // '水费审核'
                    |- PropertyFeeAudit.vue                         // '物业费审核'
                    |- PropertyMarginReview.vue                     // '保证金审核'
                |
                |- FinancialSettings/                               // 财务设置
                    |- ChargeSettings.vue                           // '收费设置'
                    |- BillingInformation.vue                       // '开票信息'
            |- System/                                              // '系统管理'
                |
                |- PermissionSettings/                              // 权限管理
                    |- RoleManagement.vue                           // '角色管理'
                    |- DepartmentManagement.vue                     // '部门管理'
                |- DataDictionary.vue                               // '数据字典'
                |- OperationLog.vue                                 // '数据字典'
        |- router/                                                  // 路由配置
        |- sass/                                                    // Sass配置文件
        |- store/                                                   // Vuex状态管理
        |- views/                                                   // 大页面( 如欢迎页, 登录页, 404页面等 )
        |- App.vue                                                  // 主组件
        |- main.js                                                  // Vue主配置
``` 
