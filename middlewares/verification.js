const authorize = async (ctx, next) => {
  if (ctx.request.body.token === process.env.verification_token) await next();
  else {
    ctx.body = 'Access forbidden';
    ctx.status = 403;
  }
};

module.exports = authorize;
