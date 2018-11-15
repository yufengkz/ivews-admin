import Mock from 'mockjs'
import { login, logout, getUserInfo ,getMenuInfo } from './login'
import { getTableData, getDragList } from './data'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/get_menu_info/, getMenuInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)

export default Mock
