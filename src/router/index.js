import Vue              from 'vue'
import Router           from 'vue-router'
import Login            from '@/views/Login'
import Home             from '@/views/Home'
// '收费管理'
import RentQuery                from '@/pages/Charge/RentManagement/RentQuery'                          // 租金管理 - 应收查询
import RentRecord               from '@/pages/Charge/RentManagement/RentRecord'                         // 租金管理 - 租金记录

import PropertyQuery            from '@/pages/Charge/PropertyCharges/PropertyQuery'                     // 物业收费 - 物业费查询
import PropertyRecord           from '@/pages/Charge/PropertyCharges/PropertyRecord'                    // 物业收费 - 物业费记录

import ElectricityBillQuery     from '@/pages/Charge/ElectricityBill/ElectricityBillQuery'              // 抄表电费 - 电费查询
import ElectricityBillRecord    from '@/pages/Charge/ElectricityBill/ElectricityBillRecord'             // 抄表电费 - 电费记录
import ElectricityBillEntry     from '@/pages/Charge/ElectricityBill/ElectricityBillEntry'              // 抄表电费 - 电费录入
import PeakflatvalleyEntry      from '@/pages/Charge/ElectricityBill/PeakflatvalleyEntry'               // 抄表电费 - 峰平谷录入

import WaterFeeQuery            from '@/pages/Charge/WaterFee/WaterFeeQuery'                            // 抄表水费 - 水费查询
import WaterFeeRecord           from '@/pages/Charge/WaterFee/WaterFeeRecord'                           // 抄表水费 - 水费记录
import WaterFeeEntry            from '@/pages/Charge/WaterFee/WaterFeeEntry'                            // 抄表水费 - 水表录入

// 客户管理
import CustomerInformation      from '@/pages/Customer/CustomerInformation'                             // 客户管理
import ContractManagement       from '@/pages/Customer/ContractManagement'                              // 合同管理
import MarginManagement         from '@/pages/Customer/MarginManagement'                                // 保证金管理

import AccessCardRegistration   from '@/pages/Customer/AccessCardManagement/AccessCardRegistration'     // 门禁卡管理 - 门禁卡登记
import AccessCardDeposit        from '@/pages/Customer/AccessCardManagement/AccessCardDeposit'          // 门禁卡管理 - 门禁卡押金

// 房产管理
import StatusDisplay            from '@/pages/Building/RoomQuery/StatusDisplay'                         // 房间查询 - 状态图示
import RegistrationMessage      from '@/pages/Building/RoomQuery/RegistrationMessage'                   // 房间查询 - 注册信息

import RoomManagement           from '@/pages/Building/RoomManagement/RoomManagement'                   // 房间管理 - 房间管理
import BuildingManagement       from '@/pages/Building/RoomManagement/BuildingManagement'               // 房间管理 - 楼宇管理

// 财务管理
import Rent                     from '@/pages/Financial/StatisticalReport/Rent'                         // 统计报告 - 租金
import PropertyCosts            from '@/pages/Financial/StatisticalReport/PropertyCosts'                // 统计报告 - 物业费
import ElectricityBill          from '@/pages/Financial/StatisticalReport/ElectricityBill'              // 统计报告 - 抄表电费
import WaterFee                 from '@/pages/Financial/StatisticalReport/WaterFee'                     // 统计报告 - 抄表水费

import RentReview               from '@/pages/Financial/LeaseReview/RentReview'                         // 租赁审核 - 租金审核
import AuditRecord              from '@/pages/Financial/LeaseReview/AuditRecord'                        // 租赁审核 - 租赁审核记录
import LeaseMarginReview        from '@/pages/Financial/LeaseReview/LeaseMarginReview'                  // 租赁审核 - 保证金审核

import ElectricityAudit         from '@/pages/Financial/PropertyAudit/ElectricityAudit'                 // 物业审核 - 电费审核
import WaterReview              from '@/pages/Financial/PropertyAudit/WaterReview'                      // 物业审核 - 水费审核
import PropertyFeeAudit         from '@/pages/Financial/PropertyAudit/PropertyFeeAudit'                 // 物业审核 - 物业费审核
import PropertyMarginReview     from '@/pages/Financial/PropertyAudit/PropertyMarginReview'             // 物业审核 - 保证金审核

import ChargeSettings           from '@/pages/Financial/FinancialSettings/ChargeSettings'               // 财务设置 - 收费设置
import BillingInformation       from '@/pages/Financial/FinancialSettings/BillingInformation'           // 财务设置 - 开票信息

// 系统设置
import RoleManagement           from '@/pages/System/PermissionSettings/RoleManagement'                 // 权限管理 - 角色管理
import DepartmentManagement     from '@/pages/System/PermissionSettings/DepartmentManagement'           // 权限管理 - 部门管理

import DataDictionary           from '@/pages/System/DataDictionary'                                    // 数据字典

import OperationLog             from '@/pages/System/OperationLog'                                      // 操作日志


Vue.use( Router )

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: Home
            },
            children: [
                {
                    path: '/',
                    components: {
                        ContainerView: RentQuery
                    }
                },
                // 收费管理
                {
                    path: '/RentQuery',
                    components: {
                        ContainerView: RentQuery
                    }
                }, {
                    path: '/RentRecord',
                    components: {
                        ContainerView: RentRecord
                    }
                }, {
                    path: '/PropertyQuery',
                    components: {
                        ContainerView: PropertyQuery
                    }
                }, {
                    path: '/PropertyRecord',
                    components: {
                        ContainerView: PropertyRecord
                    }
                }, {
                    path: '/ElectricityBillQuery',
                    components: {
                        ContainerView: ElectricityBillQuery
                    }
                }, {
                    path: '/ElectricityBillRecord',
                    components: {
                        ContainerView: ElectricityBillRecord
                    }
                }, {
                    path: '/ElectricityBillEntry',
                    components: {
                        ContainerView: ElectricityBillEntry
                    }
                }, {
                    path: '/PeakflatvalleyEntry',
                    components: {
                        ContainerView: PeakflatvalleyEntry
                    }
                }, {
                    path: '/WaterFeeQuery',
                    components: {
                        ContainerView: WaterFeeQuery
                    }
                }, {
                    path: '/WaterFeeRecord',
                    components: {
                        ContainerView: WaterFeeRecord
                    }
                }, {
                    path: '/WaterFeeEntry',
                    components: {
                        ContainerView: WaterFeeEntry
                    }
                }, 
                // 客户管理
                {
                    path: '/CustomerInformation',
                    components: {
                        ContainerView: CustomerInformation
                    }
                }, {
                    path: '/ContractManagement',
                    components: {
                        ContainerView: ContractManagement
                    }
                }, {
                    path: '/MarginManagement',
                    components: {
                        ContainerView: MarginManagement
                    }
                }, {
                    path: '/AccessCardRegistration',
                    components: {
                        ContainerView: AccessCardRegistration
                    }
                }, {
                    path: '/AccessCardDeposit',
                    components: {
                        ContainerView: AccessCardDeposit
                    }
                },
                // 房产管理
                {
                    path: '/StatusDisplay',
                    components: {
                        ContainerView: StatusDisplay
                    }
                }, {
                    path: '/RegistrationMessage',
                    components: {
                        ContainerView: RegistrationMessage
                    }
                }, {
                    path: '/RoomManagement',
                    components: {
                        ContainerView: RoomManagement
                    }
                }, {
                    path: '/BuildingManagement',
                    components: {
                        ContainerView: BuildingManagement
                    }
                },
                // 财务管理
                {
                    path: '/Rent',
                    components: {
                        ContainerView: Rent
                    }
                }, {
                    path: '/PropertyCosts',
                    components: {
                        ContainerView: PropertyCosts
                    }
                }, {
                    path: '/ElectricityBill',
                    components: {
                        ContainerView: ElectricityBill
                    }
                }, {
                    path: '/WaterFee',
                    components: {
                        ContainerView: WaterFee
                    }
                }, {
                    path: '/RentReview',
                    components: {
                        ContainerView: RentReview
                    }
                }, {
                    path: '/AuditRecord',
                    components: {
                        ContainerView: AuditRecord
                    }
                }, {
                    path: '/LeaseMarginReview',
                    components: {
                        ContainerView: LeaseMarginReview
                    }
                }, {
                    path: '/ElectricityAudit',
                    components: {
                        ContainerView: ElectricityAudit
                    }
                }, {
                    path: '/WaterReview',
                    components: {
                        ContainerView: WaterReview
                    }
                }, {
                    path: '/PropertyFeeAudit',
                    components: {
                        ContainerView: PropertyFeeAudit
                    }
                }, {
                    path: '/PropertyMarginReview',
                    components: {
                        ContainerView: PropertyMarginReview
                    }
                }, {
                    path: '/ChargeSettings',
                    components: {
                        ContainerView: ChargeSettings
                    }
                }, {
                    path: '/BillingInformation',
                    components: {
                        ContainerView: BillingInformation
                    }
                },
                // 系统设置
                {
                    path: '/RoleManagement',
                    components: {
                        ContainerView: RoleManagement
                    }
                }, {
                    path: '/DepartmentManagement',
                    components: {
                        ContainerView: DepartmentManagement
                    }
                }, {
                    path: '/DataDictionary',
                    components: {
                        ContainerView: DataDictionary
                    }
                }, {
                    path: '/OperationLog',
                    components: {
                        ContainerView: OperationLog
                    }
                }
            ]
        }
    ]
})
