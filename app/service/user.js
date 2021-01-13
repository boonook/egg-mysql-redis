"use strict";
const Service = require("egg").Service;

class UserService extends Service {
  async register() {
    return {
      code: 200,
      message: "验证码错误",
    }
  }
  async userList() {
    return {
      code: 200,
      data: [{id: 1, name: 'boonook'}, {id: 2, name: 'boonook2'}],
      message: "success",
    }
  }
}

module.exports = UserService;
