var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        console.log(req.body);

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            name: req.body.name,
            priority:req.body.priority,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });


        // update
    app.put('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular

        Todo.update({
            _id: req.body._id
        },req.body, //wird eingesetzt in Datenbank
            function (err, todo) { //Callback
            if (err)
                res.send(err);
                        getTodos(res); //dann wird es im Front-End als Success erkannt

        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    //single GET
    app.get('/api/todos/:todo_id', function (req, res) {

        Todo.findOne({
            _id: req.params.todo_id
        },  function(err, todo) {
            if (err) {
                res.send(err);
            }
            res.json(todo); // return all todos in JSON format
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
