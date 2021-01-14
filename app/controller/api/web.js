'use strict';
const fs = require('fs');
const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async home() {
    const data = fs.readFileSync('./app/public/json/city.json');
    let res = data.toString();
    const userList = JSON.parse(res);
    this.ctx.body = userList;
  }

  async newList() {
    this.ctx.body = '新闻列表'
  }

}

module.exports = UserController;
