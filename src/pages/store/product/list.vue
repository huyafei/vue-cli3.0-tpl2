<template>
	<div class="">
		<!--<Breadcrumb>-->
			<!--<BreadcrumbItem>商品列表</BreadcrumbItem>-->
			<!--<BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>-->
			<!--<BreadcrumbItem>Breadcrumb</BreadcrumbItem>-->
		<!--</Breadcrumb>-->
		<a @click="()=>{this.$router.push('/store/product-add')}">添加商品</a>
	</div>
</template>
<script>
  export default {
    name: '',
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
<style scoped lang="stylus">

</style>