"use strict";
const Service = require("egg").Service;
const tools = require('../utils/tools');
class UserService extends Service {
  async register() {
    return {
      code: 200,
      message: "验证码错误",
    }
  }
  /**
   * @param {string||number} id
   * **/
  async userList(id=null) {
    // let result = await this.app.mysql.get("user",{id:1});
    let data =[{id: 1, name: 'boonook',age:25}, {id: 2, name: 'boonook2',age:26},{id:3, name: 'boonook4',age:24}];
    data.forEach(item=>{
      item.status = item.id + '' === id + '';
    });
    let newData = tools.orderArray(data,'age','asc');
    return {
      code: 200,
      data: newData,
      message: "success",
    }
  }
}

module.exports = UserService;
