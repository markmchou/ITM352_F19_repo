// Mark Chou
var express = require('express'); //code for server
var myParser = require("body-parser"); //code for server
var data = require("./public/product_data.js"); //accessing data from javascript file

var app = express();
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   let POST = request.body;
   if (typeof POST['quantity_textbox'] != 'undefined') { displayPurchase(POST, response) }
});

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));

//Sources: Lab13
