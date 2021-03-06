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
    let params = this.ctx.params;
    let send = {
      code:200,
      data:params,
      message:'操作成功'
    };
    this.ctx.body =send||{}
  }

  async add() {
    let date = (new Date()).getTime();
    const result = await this.app.mysql.insert('user', {
      name: 'Jack'+date,
    });
    this.ctx.body = '新增';
  }

  async list() {
    // /获取？形势的参数
    await this.app.redis.set('foo', 'bar');
    // get
    this.ctx.body =await this.app.redis.get('foo');
  }

  async lists() {

    ///获取/:id形式的参数
    let {id} = this.ctx.params;
    let data = await this.app.mysql.select('user', {
      columns: ['id', 'name'],
      orders: [
        ['id', 'desc'] //降序desc，升序asc
      ],
    });
    this.ctx.body ={
      code:200,
      data,
      message:'操作成功'
    }
  }

}

module.exports = UserController;
