'use strict';

const Controller = require('egg').Controller;

/**
 * query 参数获取
 * eg: test?id=1
 *  let {id} = this.ctx.query;
 *
 *  path参数获取
 *  eg: test/:id
 *  let {id} = this.ctx.params;
 *
 * body参数获取
 * const bodyData = this.ctx.request.body;
 *
 * header参数获取
 * const header = this.ctx.header;
 *
 * 请求路径获取
 * const url = this.ctx.originalUrl
 *
 * **/
class UserController extends Controller {
  // 登录
  async login() {
    this.ctx.body =await this.ctx.service.user.register();
  }

  async add() {
    this.ctx.body = '新增';
  }

  async list() {
    ///获取？形势的参数
    let {id} = this.ctx.params;
    let user = await this.app.mysql.get('user', { id: 1 });
    this.ctx.body =await this.ctx.service.user.userList(id);
  }

  async lists() {

    ///获取/:id形式的参数
    let {id} = this.ctx.params;
    this.ctx.body =await this.ctx.service.user.userList(id);
  }

}

module.exports = UserController;
