/* jshint node: true, strict: true */

"use strict";

var path = require('path'),
  fs = require('fs'),
  http = require('http'),
  config = require('./config.js'),
  log = require('./log.js'),

  helmet = require('helmet'),
  express = require('express'),
  bodyParser = require('body-parser'),
  compress = require('compression')(),
  serveStatic = require('serve-static'),
  hbs = require('hbs'),

  app = express(),

  /*  middleSSL = require('./middleware/ssl.js'),*/
  routeCsp = require('./routes/csp.js'),
  routeAssets = require('./routes/assets.js');



// Max out the number of socket connections.
// Default concurrent sockets in node.js is 5. We need more!

http.globalAgent.maxSockets = Infinity;



// Read "fold css"

var css = fs.readFileSync(path.resolve(__dirname, '..' + config.get('docRoot') + '/css/styles.css'), {
  encoding: 'utf8'
});



// Configure application

app.disable('x-powered-by');
app.enable('trust proxy');



// Set middleware

app.use(compress);
app.use(serveStatic(path.resolve(__dirname, '..' + config.get('docRoot')), {
  maxAge: '30d'
}));



// Set up template engine

hbs.registerPartials(path.resolve(__dirname, '../views/partials/'));

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../views/'));



// Security støff

app.use(helmet.hsts({
  maxAge: 15724800000, // 26 weeks
  includeSubdomains: true,
  preload: true
}));

app.use(helmet.frameguard('deny'));



app.use(helmet.csp({
  directives : {
    defaultSrc: ["'none'"],
    scriptSrc: ["'self'", "data:", "'unsafe-inline'", "'unsafe-eval'", "www.google-analytics.com", "ssl.google-analytics.com", "professional.player.qbrick.com", "publisher.qbrick.com"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "server.arcgisonline.com", "ssl.google-analytics.com"],
    frameSrc: ["eventbrite.com", "www.eventbrite.com"],
    objectSrc: ["'self'", "professional.player.qbrick.com"],
    fontSrc: ["'self'"],
    connectSrc: ["*"],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/api/v1/csp'
  },
  reportOnly: true, // set to true if you only want to report errors
  setAllHeaders: true, // set to true if you want to set all headers
  safari5: false // set to true if you want to force buggy CSP in Safari 5
}));



// Set up routes

app.post('/api/v1/csp', routeCsp);

app.use(bodyParser.urlencoded({
  extended: true
}));

if (config.get('env') === 'development') {
  app.get('/css/styles.css', routeAssets.appCss);
  app.get('/js/app.js', routeAssets.appJs);
}

// Set http routes

var navItems = [{
  title: 'Info',
  link: '#info'
},{
  title: 'Venue',
  link: '#venue'
},{
  title: 'Speakers',
  link: '#speakers'
},{
  title: 'Schedule',
  link: '#schedule'
},{
  title: 'Sponsors',
  link: '#sponsors'
},{
  title: 'Team',
  link: '#team'
},{
  title: 'Tickets',
  link: '#tickets'
}];

app.get('/', function (req, res) {
  res.render('index', {
    pageTitle: 'CSSconf Nordic 2016',
    css: css,
    navItems: navItems
  });
});

app.get('/call-for-speakers', function (req, res) {
  res.render('call-for-speakers', {
    pageTitle: 'Call for Speakers / CSSconf Nordic 2016',
    css: css,
    navItems: navItems
  });
});

// Set up http server

var httpServer = http.createServer(app);



// Export application

module.exports = httpServer;
