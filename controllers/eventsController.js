
exports.postEvent = async (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.request.body.challenge;
};
