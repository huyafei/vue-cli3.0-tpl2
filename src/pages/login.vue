<template>
	<div class="">
		<a href="" class="a">11111</a>
		<el-button type="primary">主要按钮</el-button>
	</div>
</template>
<script>
  import $ from  'jquery'

  export default {
    name: 'Login',
    components: {},
    props: {},
    data() {
      return {}
    },
    //计算属性
    computed: {},
    watch: {},
    created() {

    },
    mounted() {

    },
    //keep-alive 组件激活时调用
    activated() {
    },
    //keep-alive 组件停用时调用。
    deactivated() {
    },
    //方法
    methods: {}
  }
</script>
<style scoped lang="scss">
	.a{
		color:$main-color;
	}
</style>