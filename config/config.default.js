/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610506641363_7466';

  // add your middleware config here
  config.middleware = ['params'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql={
    //database configuration
    client:{
      //host
      host:'localhost',
      //port
      port:'3306',
      //username
      user:'root',
      //password
      password:'1234',
      //database
      database:'zhdj'
    },
    app:true,
    agent:false,
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'boonook',
      db: 0,
    },
  };

  config.cors = {
    origin: 'http://localhost:8080',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ 'filter' ],
      },
      '/chat': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
