(function (TODO) {
    var currentFilter = 'all';
    var filters = ['All', 'Active', 'Completed'];
    var WIDTH = 550;

    TODO.NewItem = function (app, globalName, parent) {
        this.app = app;
        this.globalName = globalName;

        var _this = this;
        window.captureEvents(Event.KEYPRESS);
        window.onkeypress = function (event) {
            if (event.which === 13 &&
                event.target.name === 'todolabel') {
                _this.app.addItem();
                return false;
            }
            return true;
        }

        this.NEW_ITEM_HEIGHT = 80;
        var _this = this;
        setTimeout(function () {
            parent.write('<layer id=newitemlayer>new item layer</layer>');
        });
    }

    TODO.NewItem.prototype.bindLayer = function (parent) {
        this.layer = parent.layers.newitemlayer;
    }

    TODO.NewItem.prototype.getHeight = function (props) {
        return this.NEW_ITEM_HEIGHT;
    }

    TODO.NewItem.prototype.setPos = function (x, y) {
        this.layer.left = x;
        this.layer.top = y;
    }

    TODO.NewItem.prototype.render = function (props) {
        var content = [
            '<input type="hidden" name="version" value="2">',
            '<table width=550 cellpadding=0 cellspacing=0 border=0 height=' + this.NEW_ITEM_HEIGHT + '>',
            '<tr>',
                '<td>',
                    '<table width=100% cellpadding=10 cellspacing=0 border=0><tr><td class="newitem"><form>',
                    'What needs to be done?<br>',
                    '<input type="text" name="todolabel" class=todolabel size=25>',
                    // '<input type="button" value=Add name=Add onClick="' + this.globalName + '.addItem()">',
                    '</form></td></tr></table>',
                '</td>',
            '</tr>',
            '<tr><td height=1 bgcolor=#666666><img src=/images/cccccc-px.gif width=100% height=2></td></tr>',
            '</table>',
        ];

        this.layer.document.write(content.join("\n"));
        this.layer.document.close();
    }

    TODO.TodoList = function(globalName, parent) {
        this.globalName = globalName;
        this.ITEM_HEIGHT = 51;
        var _this = this;
        setTimeout(function () {
            parent.write('<layer id=todolistitems>todolist layer</layer>');
        });
    }

    TODO.TodoList.prototype.bindLayer = function (parent) {
        this.layer = parent.layers.todolistitems;
    }

    TODO.TodoList.prototype.getHeight = function (props) {
        return this.getFilteredItems(props).length * this.ITEM_HEIGHT;
    }

    TODO.TodoList.prototype.getFilteredItems = function (props) {
        var filtered = [];
        for (var i = 0; i < props.todos.length; i++) {
            var todo = props.todos[i];
            if ( (props.currentFilter === 'completed' && !todo.complete) ||
                (props.currentFilter === 'active' && todo.complete) ) {
                continue;
            }
            filtered.push(todo);
        }
        return filtered;
    }

    TODO.TodoList.prototype.setPos = function (x, y) {
        this.layer.left = x;
        this.layer.top = y;
    }

    TODO.TodoList.prototype.render = function (props) {
        var content = ["<table width=550 class=todocontent cellpadding=0 cellspacing=0 border=0 bgcolor=#ffffff>"];
        var filtered = this.getFilteredItems(props);
        for (var i = 0; i < filtered.length; i++) {
            var todo = filtered[i];
            if ( (props.currentFilter === 'completed' && !todo.complete) ||
                (props.currentFilter === 'active' && todo.complete) ) {
                continue;
            }

            content.push("<tr><td colspan=5 valign=center height=50>" +
                    "<table class=todoitem cellpadding=0 cellspacing=0 border=0><tr>" +
                        "<td width=20>&nbsp;</td>" +
                        "<td width=25 height=50 valign=center class=todocheck><form>" +
                        "<input type=checkbox name='todo-" + todo.id + "' " + (todo.complete ? 'checked' : '') +" onclick=" + this.globalName + ".check(" + todo.id + ")>" +
                        "</form></td>" +
                        "<td valign=center class=" + (todo.complete ? ' todolabel-complete' : 'todolabel') +">" + todo.label + "</td>" +
                    "</tr></table>" +
                "</td></tr>" +
                "<tr><td height=1 bgcolor=cccccc></td></tr>");
        }
        content.push("</table>");
        c = content.join("\n");
        this.layer.document.write(c);
        this.layer.document.close();
    }

    TODO.Footer = function (globalName, parent) {
        this.globalName = globalName;
        this.FOOTER_HEIGHT = 50;
        var _this = this;
        setTimeout(function () {
            parent.write('<layer id=footer>footer layer</layer>');
        });
    }

    TODO.Footer.prototype.bindLayer = function (parent) {
        this.layer = parent.layers.footer;
    }

    TODO.Footer.prototype.getHeight = function (props) {
        return this.FOOTER_HEIGHT;
    }

    TODO.Footer.prototype.setPos = function (x, y) {
        this.layer.left = x;
        this.layer.top = y;
    }

    TODO.Footer.prototype.getHeight = function (props) {
        return this.FOOTER_HEIGHT;
    }

    TODO.Footer.prototype.hide = function () {
        this.layer.visibility = "hide";
    }

    TODO.Footer.prototype.show = function () {
        this.layer.visibility = "show";
    }

    TODO.Footer.prototype.render = function (props) {
        var numCompleted = 0;
        for (i = 0; i < props.todos.length; i++) {
            if (props.todos[i].complete) {
                numCompleted += 1;
            }
        }

        var numRemaining = props.todos.length - numCompleted;

        var content = [
            "<table width=550 bgcolor=ffffff cellpadding=0 cellspacing=0 border=0><tr>",
            "<td width=20>&nbsp;</td>",
            "<td width=33% height=50 align=left class=todo-footer-content>" + numRemaining + " item" + (numRemaining === 1 ? '' : 's') + " left</td>",
            "<td width=33% align=center class=todo-footer-content>"
        ];

        for (var i = 0; i < props.filters.length; i++) {
            if (i > 0) {
                content.push(" | ");
            }
            var filter =  props.filters[i].toLowerCase();
            var className = filter === props.currentFilter ? 'active-filter' : '';
            content.push("<a href='#' class='" + className + "' onclick='" + this.globalName + ".changeFilter(\"" + filter + "\"); return false;'>" + props.filters[i] + "</a>");
        }

        content.push("</td>");
        content.push("<td width=33% align=right class=todo-footer-content>");


        if (numCompleted > 0) {
            content.push("<a href='#' onclick='" + this.globalName + ".clearCompleted();return false;'>Clear completed</a>");
        } else {
            content.push('&nbsp;');
        }

        content.push("</td>");
        content.push("<td width=20>&nbsp;</td>");
        content.push("</tr></table>");

        this.layer.document.write(content.join("\n"));
        this.layer.document.close();
    }

    TODO.App = function (layerName, globalName) {
        this.globalName = globalName;
        this.layerName = layerName;

        var target = document.layers[this.layerName].document;

        this.newItem = new TODO.NewItem(this, globalName, target);
        this.footer = new TODO.Footer(globalName, target);
        this.todoList = new TODO.TodoList(globalName, target);
        this.state = {
            filters: filters,
            currentFilter: 'all',
            todos: [
                { id: 1, label: 'Prepare talk', complete: true },
                { id: 2, label: 'Fly to Berlin', complete: true },
                { id: 3, label: 'Present at JSConf EU!', complete: false },
            ]
        };
        var _this = this;

        // wait two ticks for first render to allow layers to be bound
        setTimeout(function () {
            _this.newItem.bindLayer(target);
            _this.todoList.bindLayer(target);
            _this.footer.bindLayer(target);

            setTimeout(function () {
                _this.render();
            });
        });
    }

    TODO.App.prototype.changeFilter = function (newFilter) {
        this.state.currentFilter = newFilter;
        this.render();
    }

    TODO.App.prototype.addItem = function () {
        var field = document.layers[this.layerName].document.forms[0].todolabel;
        var newText = field.value;
        this.state.todos.push({
            id: this.state.todos.length + 1,
            label: newText,
            complete: false
        });
        this.render();
        field.value = '';
        return false;
    }

    TODO.App.prototype.check = function (id) {
        for (var i = 0; i < this.state.todos.length; i++) {
            var todo = this.state.todos[i];
            if (todo.id === id) {
                todo.complete = !todo.complete;
                break;
            }
        }
        this.render();
    }

    TODO.App.prototype.clearCompleted = function () {
        var newTodos = [];
        for (var i = 0; i < this.state.todos.length; i++) {
            if (!this.state.todos[i].complete) {
                newTodos.push(this.state.todos[i]);
            }
        }
        this.state.todos = newTodos;
        this.render();
    }


    TODO.App.prototype.render = function () {
        // var TODO_HEIGHT = 25;
        // var FOOTER_HEIGHT = 40;
        var target = document.layers[this.layerName];

        this.newItem.setPos(0, 0);
        var h = this.newItem.getHeight(this.state);
        this.todoList.setPos(0, h);
        h += this.todoList.getHeight(this.state);
        this.footer.setPos(0, h);
        h += this.footer.getHeight(this.state);

        this.newItem.render(this.state);
        // target.write("<form><table width=550 height=" + h + " cellspacing=0 cellpadding=0 border=1><tr><td>");
        // target.write(this.newItem.render(this.state));
        // target.write(list);
        this.todoList.render(this.state);
        if (this.state.todos.length > 0) {
            this.footer.show();
            this.footer.render(this.state);
        } else {
            this.footer.hide();
        }
        target.resizeTo(550, h);
        // target.write("</td></tr></table></form>");
        // /target.close();

    }

    // TODO.render = render;

})(window.TODO = window.TODO || {});

// window.captureEvents(Event.KEYPRESS);
// window.onkeypress = function (event) {
//     alert(event.type + " " + event.which + " " + event.modifiers + event);
//     window.routeEvent(event);
// }
