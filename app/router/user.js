module.exports = app => {
  const { router, controller } = app;
  const authLogin = app.middleware.authLogin({});
  router.post('/api/user/login',controller.api.user.login);
  router.post('/api/user/add',controller.api.user.add);
  router.get('/api/user/list',controller.api.user.list);
  router.get('/api/user/lists/:id',authLogin,controller.api.user.lists);
};
