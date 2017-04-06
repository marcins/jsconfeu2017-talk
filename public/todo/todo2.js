(function (TODO) {
    var currentFilter = 'all';
    var filters = ['All', 'Active', 'Completed'];
    var WIDTH = 550;

    TODO.NewItem = function (app, globalName) {
        this.app = app;
        this.globalName = globalName;

        var _this = this;
        window.captureEvents(Event.KEYPRESS);
        window.onkeypress = function (event) {
            if (event.which === 13) {
                _this.app.addItem();
                return false;
            }
            return true;
        }

    }

    TODO.NewItem.prototype.render = function (props) {
        var content = [
            '<input type="hidden" name="version" value="2">',
            '<table width=550 cellpadding=0 cellspacing=0 border=0>',
            '<tr>',
                '<td>',
                    '<table width=100% cellpadding=10 cellspacing=0 border=0><tr><td class="newitem">',
                    'What needs to be done?<br>',
                    '<input type="text" name="todolabel" class=todolabel size=25>',
                    // '<input type="button" value=Add name=Add onClick="' + this.globalName + '.addItem()">',
                    '</td></tr></table>',
                '</td>',
            '</tr>',
            '<tr><td height=1 bgcolor=#666666><img src=/images/cccccc-px.gif width=100% height=2></td></tr>',
            '</table>',
        ];

        return content.join("\n");
    }

    TODO.TodoList = function(globalName) {
        this.globalName = globalName;
    };

    TODO.TodoList.prototype.render = function (props) {
        var content = ["<table width=550 class=todocontent cellpadding=0 cellspacing=0 border=0 bgcolor=#ffffff>"];
        
        for (var i = 0; i < props.todos.length; i++) {
            var todo = props.todos[i];        
            if ( (props.currentFilter === 'completed' && !todo.complete) ||
                (props.currentFilter === 'active' && todo.complete) ) {
                continue;
            }

            content.push("<tr><td colspan=5 valign=center height=50>" +
                    "<table class=todoitem cellpadding=0 cellspacing=0 border=0><tr>" +
                        "<td width=20>&nbsp;</td>" +
                        "<td width=25 height=50 valign=center class=todocheck>" +
                        "<input type=checkbox name='todo-" + todo.id + "' " + (todo.complete ? 'checked' : '') +" onclick=" + this.globalName + ".check(" + todo.id + ")>" +
                        "</td>" +
                        "<td valign=center class=" + (todo.complete ? ' todolabel-complete' : 'todolabel') +">" + todo.label + "</td>" +
                    "</tr></table>" +
                "</td></tr>" + 
                "<tr><td height=1 bgcolor=cccccc></td></tr>");
        }
        content.push("</table>");
        return content.join("\n");
    }

    TODO.Footer = function (globalName) {
        this.globalName = globalName;
    };

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
            content.push("<a href='#' onclick='" + this.globalName + ".changeFilter(\"" + props.filters[i].toLowerCase() + "\"); return false;'>" + props.filters[i] + "</a>");
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

        return content.join("\n");
    }

    TODO.App = function (layerName, globalName) {
        this.globalName = globalName;
        this.layerName = layerName;
        this.newItem = new TODO.NewItem(this, globalName);
        this.footer = new TODO.Footer(globalName);
        this.todoList = new TODO.TodoList(globalName);
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
        setTimeout(function () {
            _this.render();
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
        // console.clear();
        // console.log(this.state);
        var target = document.layers[this.layerName].document;
        var list = this.todoList.render(this.state);
        target.write("<form><table width=550 cellspacing=0 cellpadding=0 border=1><tr><td>");
        target.write(this.newItem.render(this.state));
        target.write(list);
        if (this.state.todos.length > 0) {
            target.write(this.footer.render(this.state));
        }
        target.write("</td></tr></table></form>");
        target.close(); 
    }

    // TODO.render = render;

})(window.TODO = window.TODO || {});

// window.captureEvents(Event.KEYPRESS);
// window.onkeypress = function (event) {
//     alert(event.type + " " + event.which + " " + event.modifiers + event);
//     window.routeEvent(event);
// }
