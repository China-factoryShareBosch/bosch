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
      <el-table
        border
        stripe
        :data="tableData"
        :span-method="arraySpanMethod"
        style="width: 77.5%"
      >
        <el-table-column
          label="NO"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          prop="BOMNumber"
          label="物料号"
        />
        <el-table-column
          prop="poNumber"
          label="po号"
        />
        <el-table-column
          prop="storageNumber"
          label="库位号"
        />
        <el-table-column
          prop="account"
          label="入库数量"
        />
        <el-table-column
          label="入库时间"
          width="200px"
        >
          <template slot-scope="scope">
            {{ getFormatDate(scope.row.date, 'yyyy-mm-dd MM:mm:ss') }}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
        >
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
        <el-table-column
          label="提交"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click.native.prevent="onSubmit(scope.$index, tableData)"
            >
              上传系统
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    const now = new Date().getTime()
    return {
      form: {
        data: ''
      },
      tableData: [{
        date: now,
        BOMNumber: 'F03C.H46.111',
        poNumber: '4793566',
        storageNumber: 'K2_2-4-25',
        account: 2
      }, {
        date: now - 25 * 60 * 60 * 1000 + 6 * 1000,
        BOMNumber: 'F03C.H46.112',
        poNumber: '4793567',
        storageNumber: 'K2_2-4-26',
        account: 5
      }, {
        date: now - 22 * 24 * 60 * 60 * 1000 + 12 * 60 * 1000,
        BOMNumber: 'F03C.H46.113',
        poNumber: '4793568',
        storageNumber: 'K2_2-4-27',
        account: 12
      }, {
        date: now - 33 * 24 * 60 * 60 * 1000 - 32 * 60 * 1000+ 12  * 1000,
        BOMNumber: 'F03C.H46.114',
        poNumber: '4793569',
        storageNumber: 'K2_2-4-20',
        account: 7
      }, {
        date: now - 54 * 24 * 60 * 60 * 1000 + 22 * 1000,
        BOMNumber: 'F03C.H46.115',
        poNumber: '4793570',
        storageNumber: 'K2_2-4-28',
        account: 12
      }]
    }
  },
  methods: {
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
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 7) {
        return {
          rowspan: this.tableData.length,
          colspan: 7
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

      let dateText = dateObj.getFullYear() + '年' + (dateObj.getMonth() + 1) + '月' + dateObj.getDate() + '日'
      if (dateType === 'yyyy-mm-dd') {
        dateText = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate()
      }
      if (dateType === 'yyyy.mm.dd') {
        dateText = dateObj.getFullYear() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getDate()
      }
      if (dateType === 'yyyy-mm-dd MM:mm:ss') {
        dateText = dateObj.getFullYear() + '-' + month + '-' + strDate + ' ' + hours + ':' + minutes + ':' + seconds
      }
      if (dateType === 'mm-dd MM:mm:ss') {
        dateText = month + '-' + strDate + ' ' + hours + ':' + minutes + ':' + seconds
      }
      if (dateType === 'yyyy年mm月dd日 MM:mm:ss') {
        dateText = dateObj.getFullYear() + '年' + month + '月' + strDate + '日' + ' ' + hours + ':' + minutes + ':' + seconds
      }
      return dateText
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
