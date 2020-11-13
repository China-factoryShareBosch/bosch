<template>
  <div class="in-storage-container">
    <div>
      <el-form :inline="true" :model="form" class="storage-form">
        <el-form-item label="">
          <el-input
            v-model="form.data"
            type="text"
            placeholder="请依次输入: 物料号 po号 库位号 入库数量"
            maxlength="50"
            show-word-limit
            style="width: 60vw;"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
        </el-form-item>
      </el-form>
      <el-pagination
        :style="{ margin:'0 0 20px 0'}"
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <el-table v-loading="listLoading" border stripe :data="tableData" :span-method="arraySpanMethod" min-height="800px">
        <el-table-column label="0">
          <template slot-scope="scope">{{ scope.row[0] }}</template>
        </el-table-column>
        <el-table-column label="1">
          <template slot-scope="scope">{{ scope.row[1] }}</template>
        </el-table-column>
        <el-table-column label="4">
          <template slot-scope="scope">{{ scope.row[4] }}</template>
        </el-table-column>
        <el-table-column label="5">
          <template slot-scope="scope">{{ scope.row[5] }}</template>
        </el-table-column>
        <el-table-column label="7">
          <template slot-scope="scope">{{ scope.row[7] }}</template>
        </el-table-column>
        <el-table-column label="10">
          <template slot-scope="scope">{{ scope.row[10] }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
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
    this.fetchData()
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
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    onSave() {
      const data = this.form.data.split(' ')
      const res = data.filter(v => v !== '')
      if (res.length < 4) {
        this.$message({
          message: '输入数据不足4位',
          type: 'error',
          duration: 1500
        })
        return
      }
      this.tableData.push({
        BOMNumber: res[0] || 0,
        poNumber: res[1] || 0,
        storageNumber: res[2] || 0,
        account: res[3] || 0,
        date: new Date().getTime()
      })
      this.form.data = ''
    },
    onSubmit() {
      this.$message({
        message: '上传成功',
        type: 'success',
        duration: 1500
      })
    },
    arraySpanMethod({ columnIndex }) {
      if (columnIndex === 30) {
        return {
          rowspan: this.tableData.length,
          colspan: 30
        }
      }
    },
    getFormatDate(date, dateType) {
      const dateObj = new Date(date)
      let month = dateObj.getMonth() + 1
      let strDate = dateObj.getDate()
      let hours = dateObj.getHours()
      let minutes = dateObj.getMinutes()
      let seconds = dateObj.getSeconds()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (hours >= 0 && hours <= 9) {
        hours = '0' + hours
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = '0' + seconds
      }

      let dateText =
        dateObj.getFullYear() +
        '年' +
        (dateObj.getMonth() + 1) +
        '月' +
        dateObj.getDate() +
        '日'
      if (dateType === 'yyyy-mm-dd') {
        dateText =
          dateObj.getFullYear() +
          '-' +
          (dateObj.getMonth() + 1) +
          '-' +
          dateObj.getDate()
      }
      if (dateType === 'yyyy.mm.dd') {
        dateText =
          dateObj.getFullYear() +
          '.' +
          (dateObj.getMonth() + 1) +
          '.' +
          dateObj.getDate()
      }
      if (dateType === 'yyyy-mm-dd MM:mm:ss') {
        dateText =
          dateObj.getFullYear() +
          '-' +
          month +
          '-' +
          strDate +
          ' ' +
          hours +
          ':' +
          minutes +
          ':' +
          seconds
      }
      if (dateType === 'mm-dd MM:mm:ss') {
        dateText =
          month + '-' + strDate + ' ' + hours + ':' + minutes + ':' + seconds
      }
      if (dateType === 'yyyy年mm月dd日 MM:mm:ss') {
        dateText =
          dateObj.getFullYear() +
          '年' +
          month +
          '月' +
          strDate +
          '日' +
          ' ' +
          hours +
          ':' +
          minutes +
          ':' +
          seconds
      }
      return dateText
    },
    getTableData() {
      const { pageSize, currentPage } = this.pagination
      const end = currentPage * pageSize
      const start = end - pageSize
      this.tableData = this.list.slice(start, end)
    },
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
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
