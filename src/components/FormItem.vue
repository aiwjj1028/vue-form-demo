<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 要显示的错误信息 -->
    <p v-if="validateStatus === 'error'" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
//0，label和props
//1.获取输入框的规则，
//2规则不匹配，显示错误信息
//3用户输入信息是，通知formitem做校验(校验的方法)
//4使用async-validator做校验
import schema from 'async-validator';
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    }
  },
  data() {
      return {
          errorMessage:'',//显示的信息
          validateStatus:''//校验状态
      }
  },
  created () {
      THIS.$on('validate',this.validate);
  },
  inject:['form'],
  methods:{
      validate(value){
          console.log(value)//输入框的值
        //   let descriptor = {}//此对象要存储校验规则
        //   //获取校验对象 ==》在form组件上
        //   descriptor[this.prop] = this.form.rules[this.prop]
        const descriptor = { [this.prop]:this.form.rules[this.prop]}
          const validator  = new schema(descriptor)
        //   let obj = {}
        //   obj[this.prop] = value
          validator.validate({[this.prop]:value},error=>{
              if(error){
                  //显示错误
                   this.validateStatus = 'error'
                   this.errorMessage = error[0].message
              } else{
                   this.validateStatus = ''
                   this.errorMessage = ''               
              }
          })

      }
  }
};
</script>

<style  scoped>
.error{
    color: red;
}
</style>