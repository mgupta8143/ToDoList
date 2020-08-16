var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var data = [

];

module.exports = function(app) {
    app.get("/todo", (req, res) => {
        res.render("todo", {data: data});
    });
    
    app.post("/todo", urlencodedParser, (req, res) =>{
        data.push(req.body);
        res.json(data);
    });

    app.delete("/todo/:item", (req, res) =>{
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item
        })
        res.json(data);

    });
    

}