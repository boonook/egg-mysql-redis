'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //mysql
  mysql:{
    enable:true,
    package:'egg-mysql',
  },
  redis:{
    enable: true,
    package: 'egg-redis',
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  io:{
    enable: true,
    package: 'egg-socket.io',
  }
};
