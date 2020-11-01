<template>
    <div>
        <input :type="type" :value="inputVal" @input="handleInput">
    </div>
</template>

<script>
    export default {
        props:{
            type:{
                type:String,
                default:'text'
            },
            value:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                inputVal:this.value
            }
        },
        methods:{
            handleInput(e){
                //实现数据双向绑定
                this.inputVal = e.target.value
                //t通知父组件更新数据
                this.$emit('input',this.inputVal)
                //t通知父组件做校验
                this.$parent.$emit('validate',this.inputVal)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>