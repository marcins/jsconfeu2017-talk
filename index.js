const express = require('express');

const app = express();

app.use(express.static('public', {
  setHeaders: function (res, path, stat) {
    if (path.substr(-3) === '.js') {
      res.set('Content-type', 'application/x-javascript');
    }
  }
}));

app.listen(3000, function () {
  console.log('Listening on 3000');
});