module.exports = app => {
  const { router, controller } = app;
  router.get('/api/web/home',controller.api.web.home);
  router.get('/api/web/newList',controller.api.web.newList);
};
