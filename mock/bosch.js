const res = {
  'schema': {
    'fields': [{
      'name': 'index',
      'type': 'integer'
    }, {
      'name': '序号',
      'type': 'integer'
    }, {
      'name': 'SAP料号',
      'type': 'string'
    }, {
      'name': '工站',
      'type': 'string'
    }, {
      'name': '安装数量',
      'type': 'string'
    }, {
      'name': '中文名称',
      'type': 'string'
    }, {
      'name': '型号/订货号',
      'type': 'string'
    }, {
      'name': '技术细节',
      'type': 'string'
    }, {
      'name': '订货号',
      'type': 'string'
    }, {
      'name': '品牌/原供应商',
      'type': 'string'
    }, {
      'name': '供应商代号',
      'type': 'number'
    }, {
      'name': '价格',
      'type': 'number'
    }, {
      'name': '起订量',
      'type': 'number'
    }, {
      'name': '交货期',
      'type': 'number'
    }, {
      'name': '类型',
      'type': 'string'
    }, {
      'name': '采购原因',
      'type': 'string'
    }, {
      'name': '采购状态',
      'type': 'string'
    }, {
      'name': 'MDM',
      'type': 'string'
    }, {
      'name': '最小库存',
      'type': 'string'
    }, {
      'name': '最大库存',
      'type': 'string'
    }, {
      'name': '库位号',
      'type': 'string'
    }, {
      'name': '自动采购',
      'type': 'string'
    }, {
      'name': 'Remark',
      'type': 'string'
    }, {
      'name': 'Link',
      'type': 'string'
    }, {
      'name': '备件检查0921',
      'type': 'string'
    }, {
      'name': '备件处理0921',
      'type': 'string'
    }, {
      'name': '备注2',
      'type': 'string'
    }, {
      'name': '备注3',
      'type': 'string'
    }],
    'primaryKey': ['index'],
    'pandas_version': '0.20.0'
  },
  'data': [{
    'index': 1071,
    '序号': 1103,
    'SAP料号': 'F03C.H12.295',
    '工站': '70/72',
    '安装数量': 2,
    '中文名称': '停止螺丝',
    '型号/订货号': 'UST8-45',
    '技术细节': 'NO',
    '订货号': 'NO',
    '品牌/原供应商': 'Misumi',
    '供应商代号': 685049.0,
    '价格': 0.0,
    '起订量': 1.0,
    '交货期': 0.0,
    '类型': '是',
    '采购原因': 'NO',
    '采购状态': '9.已到货',
    'MDM': '2019-09-09T00:00:00.000Z',
    '最小库存': 1,
    '最大库存': 4,
    '库位号': 'K1_27-2-18',
    '自动采购': 'NO',
    'Remark': 'NO',
    'Link': 1103.0,
    '备件检查0921': 'OK.已到货有库位',
    '备件处理0921': 'NO',
    '备注2': 'NO',
    '备注3': 'NO'
  }]
}

module.exports = [
  {
    url: '/search_json_a',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: res.data.length,
          items: res.data
        }
      }
    }
  }
]

