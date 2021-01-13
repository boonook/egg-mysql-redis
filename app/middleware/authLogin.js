module.exports = (options,app)=>{
  return async function authLogin(ctx,next) {
    ctx.state.csrf = ctx.csrf;
    await next();
  }
};
