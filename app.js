//App.js

/* express
 * Fast, unopinionated, minimalist web framework for Node.js
 * https://expressjs.com
 */
var express = require("express");
/*serve-favicon
 *allows the use of favicons for the express server
 */

var favicon = require("serve-favicon");

/* Path
 * Native NodeJS module for resolving file and directory paths.
 * https://nodejs.org/api/path.html#path_path
 */
var path = require("path");

/* body-parser
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 * https://github.com/expressjs/body-parser
 */
const bodyParser = require("body-parser");

/*cookie-parser
 * Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
 * Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
 * https://github.com/expressjs/cookie-parser
 */
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Call env variables after defining dontenv
require("dotenv").config();

// pusher to publish the database changes in realtime.
const Pusher = require("pusher");

//Configure the Pusher object entering your app information
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
});

const { config } = require("./config");
const api = require("./src/api/index");
const { mongoManager } = require("./src/mongo");
const { passport } = require("./src/passport");

/*************************************************************
 * DEFINE APP
 *************************************************************/
var app = express();

/*************************************************************
 * CONNECT TO MONGODB
 *************************************************************/
mongoManager.connect();

/*************************************************************
 * Enable CORS (Cross-Origin Resource Sharing)
 * https://enable-cors.org/server_expressjs.html
 *************************************************************/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

/*************************************************************
 * USE MIDDLEWARE
 *************************************************************/
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
);

// Authorization
app.use(passport.init());

// api routes v1
app.use("/api/v1", api(config, pusher));

module.exports = app;
