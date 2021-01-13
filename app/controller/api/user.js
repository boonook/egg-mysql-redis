'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async login() {
    this.ctx.body =await this.ctx.service.user.register();
  }

  async add() {
    this.ctx.body = '新增';
  }

  async list() {
    this.ctx.body =await this.ctx.service.user.userList();
  }

}

module.exports = UserController;
