const route = require('koa-route');

module.exports = function(app) {

  app.use(route.get('/', function *() {
    yield this.render('index');
  }));

}
