<template>
  <div class="in-storage-container">
    <div>
      <el-form :inline="true" :model="form" class="storage-form">
        <el-form-item label="">
          <el-input
            v-model="form.data"
            type="text"
            placeholder="请输入查询内容"
            maxlength="50"
            show-word-limit
            style="width: 60vw"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
        </el-form-item>
      </el-form>
      <el-pagination
        :style="{ margin: '0 0 20px 0' }"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <el-table
        v-loading="listLoading"
        border
        stripe
        :data="tableData"
        min-height="800px"
      >
        <el-table-column label="序号" prop="序号" />
        <el-table-column label="SAP料号" prop="SAP料号" />
        <el-table-column label="工站" prop="工站" />
        <el-table-column label="安装数量" prop="安装数量" />
        <el-table-column label="中文名称" prop="中文名称" />
        <el-table-column label="型号/订货号" prop="型号/订货号" />
        <el-table-column label="品牌/原供应商" prop="品牌/原供应商" />
        <el-table-column label="供应商代号" prop="供应商代号" />
        <el-table-column label="价格" prop="价格" />
        <el-table-column label="起订量" prop="起订量" />
        <el-table-column label="交货期" prop="交货期" />
        <el-table-column label="类型" prop="类型" />
        <el-table-column label="采购原因" prop="采购原因" />
        <el-table-column label="采购状态" prop="采购状态" />
        <el-table-column label="MDM" prop="MDM" />
        <el-table-column label="最小库存" prop="最小库存" />
        <el-table-column label="最大库存" prop="最大库存" />
        <el-table-column label="库位号" prop="库位号" />
        <el-table-column label="自动采购" prop="自动采购" />
        <el-table-column label="Remark" prop="Remark" />
        <el-table-column label="Link" prop="Link" />
        <el-table-column label="备件检查0921" prop="备件检查0921" />
        <el-table-column label="备件处理0921" prop="备件处理0921" />
        <el-table-column label="备注2" prop="备注2" />
        <el-table-column label="备注3" prop="备注3" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/boschApi'
export default {
  data() {
    return {
      list: [],
      listLoading: false,
      tableData: [],
      form: {
        data: ''
      },
      pagination: {
        currentPage: 1,
        total: 1,
        pageSize: 100,
        pageSizes: [100, 200, 300, 400]
      }
    }
  },
  created() {
  },
  methods: {
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.getTableData()
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.getTableData()
    },
    onSearch() {
      const data = this.form.data
      if (data === '') {
        this.$message({
          message: '输入内容不为空',
          type: 'error',
          duration: 1500
        })
        return
      }
      this.fetchData()
    },
    getTableData() {
      const { pageSize, currentPage } = this.pagination
      const end = currentPage * pageSize
      const start = end - pageSize
      this.tableData = this.list.slice(start, end)
    },
    fetchData() {
      const param = { a: this.form.data }
      this.listLoading = true
      fetchList(param).then(response => {
        this.list = response.data.items
        this.listLoading = false
        this.pagination.total = response.data.total
        this.getTableData()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.in-storage-container {
  margin: 20px;
  overflow: hidden;

  .storage-form {
    width: 80%;
  }
}
</style>
