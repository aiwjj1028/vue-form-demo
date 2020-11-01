<template>
    <div>
        <m-form-item label="用户名" prop='name'>
            <!-- <m-input v-model="ruleform.name"></m-input> -->
        </m-form-item>
        <m-form-item label="密码" prop='password'>
        <!-- <m-input type='password' v-model="ruleform.pwd"></m-input> -->
        </m-form-item>
    </div>
</template>

<script>
import mInput from './Input'
import mFormItem from './FormItem'
    export default {
        components:{
            mInput,
            mFormItem
        },
        data() {
            return {
                name:'',
                password:''
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>