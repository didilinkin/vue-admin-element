<template lang="pug">
el-form.demo-ruleForm( v-bind:model="ruleForm" v-bind:rules="rules" ref="ruleForm" label-width="100px" )

    el-form-item( label="请输入用户名" prop="name" )
        el-input( v-model="ruleForm.name" )

    el-form-item( label="密码" prop="pass" )
        el-input( type="password" v-model="ruleForm.pass" auto-complete="off" )

    el-form-item( label="自动登录" prop="delivery" )
        el-switch( on-text="" off-text="" v-model="ruleForm.delivery" )

    el-form-item
        el-button( type="primary" @click="submitForm('ruleForm')" ) 立即创建
        el-button( @click="resetForm('ruleForm')" ) 重置

</template>

<script>
export default {
    data() {
        var validatePass = ( rule, value, callback ) => {
            if ( value === '' ) {
                callback( new Error( '请输入密码' ) );
            } else {
                if ( this.ruleForm.checkPass !== '' ) {
                    this.$refs.ruleForm.validateField( 'checkPass' )
                }
                callback()
            }
        }
        return {
            ruleForm: {
                name        : '',
                pass        : '',
                delivery    : false,
            },
            rules: {
                name: [
                        {
                            required    : true,
                            message     : '请输入活动名称',
                            trigger     : 'blur'
                        },
                        {
                            min         : 3,
                            max         : 5,
                            message     : '长度在 3 到 5 个字符',
                            trigger     : 'blur'
                        }
                    ],
                }
                ,pass: [
                    {
                        validator       : validatePass,
                        trigger         : 'blur'
                    }
                ]
            }

        },
        methods: {
            submitForm( formName ) {
                this.$refs[formName].validate(( valid ) => {
                    if ( valid ) {
                        alert( 'submit!' )
                    } else {
                        console.log( 'error submit!!' )
                        return false
                    }
                })
            },
            resetForm( formName ) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>
