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
      password:'123456',
      //database
      database:'zhdj'
    },
    app:true,
    agent:false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
