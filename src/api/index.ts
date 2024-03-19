import { fetchPost, fetchPost2 } from "@/components/ReqInstance/axios";

export default {
	/**
	 * 认证授权相关接口
	 */
	// 登录
	Login: (params: any) => {
		return fetchPost('/auth/login', params);
	},
	// 注册
	Signup: (params: any) => {
		return fetchPost('/auth/register', params);
	},
	// 获取当前用户
	User: (params: any) => {
		return fetchPost('/auth/user', params);
	},
	//刷新令牌
	RefreshToken: (params: any) => {
		return fetchPost('/auth/refreshToken', params)
	},
	// 修改密码
	UpdatePassword: (params: any) => {
		return fetchPost('/auth/changePassword', params);
	},
	/**
	 * 用户相关接口
	 */
	// 修改我的用户信息
	updateMyUser: (params: any) => {
		return fetchPost('/users/updateMyUser', params);
	},
	// 删除用户
	RemoveUser: (params: any) => {
		return fetchPost('/users/removeUser', params);
	},
	// 用户列表
	GetUsers: (params: any) => {
		return fetchPost('/users/users', params);
	},
	// 修改用户信息
	UpdateUser: (params: any) => {
		return fetchPost('/users/updateUser', params);
	},
	// 批量删除用户
	RemoveUsers: (params: any) => {
		return fetchPost('/users/removeUsers', params);
	},
	// 批量删除角色
	RemoveRoles: (params: any) => {
		return fetchPost2('/role/deleteRole', params);
	},
	// 获取角色列表
	GetRoles: (params: any) => {
		return fetchPost('/users/roles', params);
	},
	// 批量创建用户
	CreateUsers: (params: any) => {
		return fetchPost('/auth/createBatchUser', params);
	},

}
