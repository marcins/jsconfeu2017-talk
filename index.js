const express = require('express');
const slides = require('./lib/routes/slides');

const app = express();
app.locals.pretty = true;

app.use(express.static('public', {
  setHeaders: function (res, path, stat) {
    if (path.substr(-3) === '.js') {
      res.set('Content-type', 'application/x-javascript');
    }
  }
}));

app.use('/slides', slides);

app.listen(3000, function () {
  console.log('Listening on 3000');
});