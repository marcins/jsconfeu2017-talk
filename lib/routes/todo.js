const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const router = express.Router();
const Handlebars = require('handlebars');

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

const todos = [
    { id: 1, label: 'Write talk', complete: true},
    { id: 2, label: 'Fly to Europe', complete: true},
    { id: 3, label: 'Give talk', complete: false},
];

const template = Handlebars.compile(fs.readFileSync('./lib/templates/todo1.hbs', 'utf-8'));

router.get('/', function(req, res) {
    res.send(template({ todos }));
});

router.post('/update', urlEncodedParser, function (req, res) {
    if (req.body.Add && req.body.new && req.body.new.trim() !== '') {
        todos.push({
            id: todos.length + 1,
            label: req.body.new.trim(),
            complete: false,
        })
    }

    todos.forEach(todo => {
        if (req.body['todo-' + todo.id] && req.body['todo-' + todo.id] === '1') {
            todos[todo.id - 1].complete = true;
        } else {
            todos[todo.id - 1].complete = false;
        }
    });
    console.log(req.body, todos);
    res.redirect('./');
});


module.exports = router;