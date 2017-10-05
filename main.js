var express = require('express');
var app = express();

const config = { port: 4000};

app.use('/', express.static(__dirname+'/client/dist/'));

app.listen(config.port, function(){
console.log("listen on port "+ config.port);

})