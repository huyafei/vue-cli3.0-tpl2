<template>
	<div class="main-container">
		<div class="main-breadcrumb flex-r">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>用户列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="main-content">
			<div class="table">
				<el-table
					border
					size="small"
					header-row-class-name="table-header--gray"
					:data="tableData"

					v-loading="loading"
					element-loading-text="正在加载中"
					style="width: 100%">
					<el-table-column
						type="index"
						width="50"
						align="center">
					</el-table-column>
					<el-table-column
						prop="date"
						label="用户名"
						width="180"
						align="center">
					</el-table-column>
					<el-table-column
						prop="name"
						label="昵称"
						width="180"
						align="center">
					</el-table-column>
					<el-table-column
						label="性别"
						align="center">
						<template v-slot="scope">
							<div>{{scope.row.address}}</div>
						</template>
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作"
						width="200"
						align="center">
						<template slot-scope="scope">
							<el-button size="mini" @click="putUser(scope.row)" type="primary">编辑</el-button>
							<el-button size="mini" @click="delUser(scope.row)" type="danger">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="pagination text-align-right">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="current"
					:page-sizes="[15, 30, 45, 60]"
					:page-size="pageSize"
					:total="total"
					layout="total, sizes, prev, pager, next, jumper"

				></el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        loading: false,
        current: 1,
        pageSize: 15,
        total: 0,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          object: {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
    methods: {
      putUser(e) {
        console.log(e)
      },
      delUser(e) {
        console.log(e)
        this.$confirm('您确定要删除该用户吗？')
          .then(_ => {
            this.$message.success("删除成功");
          })
          .catch(_ => {
          });
      },

      getUserList() {
        this.loading = false;
        let obj = {}
        obj.page = this.current - 1;
        obj.size = this.pageSize;
        // this.$ajax({
        //   method: "get",
        //   url: sxproductUrl,
        //   params: obj
        // }).then(res => {
        //   if (res.data.code === 0) {
        //     this.tableData = [];
        //     this.total = 0;
        //   } else {
        //     this.tableData = res.data.content;
        //     this.total = res.data.totalElements;
        //   }
        //   this.loading = false;
        // }).catch(error => {
        //     console.log(error);
        //   });
      },

      handleSizeChange(val) {
        this.loading = true;
        this.pageSize = val;
        this.getUserList();
      },
      handleCurrentChange(val) {
        this.current = val;
        this.getUserList();
      },
    }
  }
</script>
<style scoped lang="stylus">

</style>
