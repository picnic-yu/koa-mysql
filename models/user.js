const db = require('../config/db')
const sequelize = db.sequelize
const User = sequelize.import('../schema/user.js')
// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
var user = User.sync({ force: false });
class UserModel {
	/**
	 * 查询用户信息
	 * @param name  姓名
	 * @returns {Promise.<*>}
	 */
	static async findUserByName (name) {
		const userInfo = await User.findOne({
			where: {
				name
			}
		})
		return userInfo
  	}

	/**
	 * 创建用户
	 * @param user
	 * @returns {Promise.<boolean>}
	 */
	static async createUser (user) {
		await User.create({
			'name': user.name,
			'password': user.password
		})
		return true
	}
}

module.exports = UserModel
