(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f48f596"],{"4b65":function(e,t,a){"use strict";var r=a("fad1"),n=a.n(r);n.a},"5aac":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"in-storage-container"},[a("div",[a("el-form",{staticClass:"storage-form",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{staticStyle:{width:"60vw"},attrs:{type:"text",placeholder:"请依次输入: 物料号 po号 库位号 入库数量",maxlength:"50","show-word-limit":""},model:{value:e.form.data,callback:function(t){e.$set(e.form,"data",t)},expression:"form.data"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")])],1)],1),a("el-table",{staticStyle:{width:"77.5%"},attrs:{border:"",stripe:"",data:e.tableData,"span-method":e.arraySpanMethod}},[a("el-table-column",{attrs:{label:"NO"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{prop:"BOMNumber",label:"物料号"}}),a("el-table-column",{attrs:{prop:"poNumber",label:"po号"}}),a("el-table-column",{attrs:{prop:"storageNumber",label:"库位号"}}),a("el-table-column",{attrs:{prop:"account",label:"入库数量"}}),a("el-table-column",{attrs:{label:"入库时间",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getFormatDate(t.row.date,"yyyy-mm-dd MM:mm:ss"))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v(" 删除 ")])]}}])}),a("el-table-column",{attrs:{label:"提交"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.onSubmit(t.$index,e.tableData)}}},[e._v(" 上传系统 ")])]}}])})],1)],1)])},n=[],o=(a("4de4"),a("a434"),a("ac1f"),a("1276"),{data:function(){var e=(new Date).getTime();return{form:{data:""},tableData:[{date:e,BOMNumber:"F03C.H46.111",poNumber:"4793566",storageNumber:"K2_2-4-25",account:2},{date:e-9e7+6e3,BOMNumber:"F03C.H46.112",poNumber:"4793567",storageNumber:"K2_2-4-26",account:5},{date:e-19008e5+72e4,BOMNumber:"F03C.H46.113",poNumber:"4793568",storageNumber:"K2_2-4-27",account:12},{date:e-28512e5-192e4+12e3,BOMNumber:"F03C.H46.114",poNumber:"4793569",storageNumber:"K2_2-4-20",account:7},{date:e-46656e5+22e3,BOMNumber:"F03C.H46.115",poNumber:"4793570",storageNumber:"K2_2-4-28",account:12}]}},methods:{deleteRow:function(e,t){t.splice(e,1)},onSave:function(){var e=this.form.data.split(" "),t=e.filter((function(e){return""!==e}));t.length<4?this.$message({message:"输入数据不足4位",type:"error",duration:1500}):(this.tableData.push({BOMNumber:t[0]||0,poNumber:t[1]||0,storageNumber:t[2]||0,account:t[3]||0,date:(new Date).getTime()}),this.form.data="")},onSubmit:function(){this.$message({message:"上传成功",type:"success",duration:1500})},arraySpanMethod:function(e){e.row,e.column,e.rowIndex;var t=e.columnIndex;if(7===t)return{rowspan:this.tableData.length,colspan:7}},getFormatDate:function(e,t){var a=new Date(e),r=a.getMonth()+1,n=a.getDate(),o=a.getHours(),l=a.getMinutes(),u=a.getSeconds();r>=1&&r<=9&&(r="0"+r),n>=0&&n<=9&&(n="0"+n),o>=0&&o<=9&&(o="0"+o),l>=0&&l<=9&&(l="0"+l),u>=0&&u<=9&&(u="0"+u);var s=a.getFullYear()+"年"+(a.getMonth()+1)+"月"+a.getDate()+"日";return"yyyy-mm-dd"===t&&(s=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()),"yyyy.mm.dd"===t&&(s=a.getFullYear()+"."+(a.getMonth()+1)+"."+a.getDate()),"yyyy-mm-dd MM:mm:ss"===t&&(s=a.getFullYear()+"-"+r+"-"+n+" "+o+":"+l+":"+u),"mm-dd MM:mm:ss"===t&&(s=r+"-"+n+" "+o+":"+l+":"+u),"yyyy年mm月dd日 MM:mm:ss"===t&&(s=a.getFullYear()+"年"+r+"月"+n+"日 "+o+":"+l+":"+u),s}}}),l=o,u=(a("4b65"),a("2877")),s=Object(u["a"])(l,r,n,!1,null,"6ae070e6",null);t["default"]=s.exports},fad1:function(e,t,a){}}]);