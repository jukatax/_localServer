const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8335;
const color = '\x1b[0m\x1b[36m'; //reset_cyan
const _log = (message) => {
     console.log.call(console, color, ...["[server] ", message]);
};
/* app.use((req, res, next) => {
     console.log(req.headers);
     res.append('Access-Control-Allow-Origin', ['*']);
     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
     res.append('Access-Control-Allow-Headers', 'Content-Type');
     res.append('Content-Security-Policy', "default-src 'self' 'unsafe-inline' https://*.twitch.tv  http: https: blob: data:;frame-ancestors http:// https://*.twitch.tv blob: data:;frame-src http: https: blob: data: https://*.twitch.tv");
     next();
}); */
const ops = {
     dotfiles: 'ignore',
     etag: false,
     extensions: ['htm', 'html'],
     index: false,
     maxAge: '5m',
     redirect: false,
     setHeaders: function (res, path, stat) {
          res.set({
               'x-timestamp': Date.now(),
               'Access-Control-Allow-Origin': ['*'],
               'Access-Control-Allow-Methods': 'GET',
               'Access-Control-Allow-Credentials': true,
               'Content-Security-Policy': "default-src 'self' 'unsafe-inline' http: https: blob: data:;frame-src 'self' ;frame-ancestors 'self' ;"
          });
     }
}
app.use(express.static("./..", ops));

const options = {
     key: fs.readFileSync('key.pem'),
     cert: fs.readFileSync('cert.pem')
};
https.createServer(options, app).listen(PORT);
_log(`Server running on localhost:${PORT}`);
//http.createServer(app).listen(8334);