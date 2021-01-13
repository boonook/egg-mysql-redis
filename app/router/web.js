module.exports = app => {
  const { router, controller } = app;
  router.post('/api/web/home',controller.api.web.home);
  router.post('/api/web/notice',controller.api.web.notice);
  router.get('/api/web/newList',controller.api.web.newList);
};
