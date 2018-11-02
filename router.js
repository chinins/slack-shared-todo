const router = require('koa-router')();

router.get('/', () => {
  console.log('get method');
});
router.post('/', () => {
  console.log('post method');
});

module.exports = router;
