'use strict';
const koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const logger = require('koa-logger');
const compress = require('koa-compress');
const path = require('path');

const routes = require('./routes/index');

const app = koa();

// Logger
app.use(logger());

// set jade view engine
app.use(views(path.join(__dirname, 'views'), {
  extension: 'jade'
  // map: {html: 'jade'}
}));
// global.render=views(__dirname +'/views',{default:'jade'});

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

routes(app);

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}

module.exports = app;
