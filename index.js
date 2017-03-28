const express = require('express');
const slides = require('./lib/routes/slides');
const todo = require('./lib/routes/todo');

const app = express();
app.locals.pretty = true;

app.use(function (req, res, next) {
  res.set("Connection", "close");
  next();
});

app.use(express.static('public', {
  setHeaders: function (res, path, stat) {
    if (path.substr(-3) === '.js') {
      res.set('Content-type', 'application/x-javascript');
    }
  }
}));

app.use('/slides', slides);
app.use('/todo', todo);

app.listen(3000, function () {
  console.log('Listening on 3000');
});