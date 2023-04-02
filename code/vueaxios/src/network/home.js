
import request from './request'

// export const reqBannerData = () => {
//   return request({
//     url: '/banner'
//   })
// }
// export function reqBannerData () {
//   return request({
//     url: '/banner'
//   })
// }
// 获取推荐歌单
// export const reqRecommend = () => {
//   return ajax({
//     url: '/personalized?limit=10'
//   })
// }
export const reqPhoneLogin = data => {
  return request({
    method: 'POST',
    url: '/login/cellphone',
    data
  })
}