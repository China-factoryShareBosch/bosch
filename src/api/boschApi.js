import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/search_json_a',
    method: 'get',
    params: query
  })
}
