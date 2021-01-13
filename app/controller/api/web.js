'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async home() {
    this.ctx.body = '首页';
  }

  async notice() {
    this.ctx.body = '消息';
  }

  async newList() {
    this.ctx.body = '新闻列表'
  }

}

module.exports = UserController;
