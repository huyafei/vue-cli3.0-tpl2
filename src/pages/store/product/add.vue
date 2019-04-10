<template>
	<div class="">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/store/product-list' }">商品列表</el-breadcrumb-item>
			<el-breadcrumb-item>{{breadcrumbTitle}}</el-breadcrumb-item>
		</el-breadcrumb>

	</div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        breadcrumbTitle:"添加商品"
      }
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
<style scoped lang="stylus">

</style>