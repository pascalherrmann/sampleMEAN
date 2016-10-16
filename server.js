// set up ======================================================================
var express = require('express');
var app = express();                                            // create our app w/ express
var mongoose = require('mongoose');                             // mongoose for mongodb
var port = process.env.PORT || 8080;                            // set the port
var database = require('./config/database');                    // load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var UMGEBUNGSVARIABLE = process.env.UMGEBUNGSVARIABLE;

var cloudFoundryService = {};
if(process.env.VCAP_SERVICES){
cloudFoundryService = JSON.parse(process.env.VCAP_SERVICES);
}

// configuration ===============================================================
var uri = "";
if(UMGEBUNGSVARIABLE){
    console.log("Umgebungsvariable mit externer DB wurde gesetzt.");
    uri = 'mongodb://'+UMGEBUNGSVARIABLE+"/toDo"; //Umgebungsvariable wurde aktiv eingetragen - wird bevorzugt
}
else if ("mlab" in cloudFoundryService) {
    console.log("MLAB-Service in PCF wird verwendet!");
    uri =  cloudFoundryService.mlab[0].credentials.uri+"/toDo";
}
else if ("user-provided" in cloudFoundryService){
    console.log("Eigener CUPS Cloud Foundry Service (externe DB) wird verwendet!");
    uri = cloudFoundryService['user-provided'][0].credentials.uri+"/toDo";
}

else {
    console.log("Umgebungsvariable nicht gesetzt, Service-Variable nicht gefunden, lokale Einstellungen werden verwendet!");
    uri = database.localUrl;    
}// Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

console.log("Datenbank-Verbindung wird aufgebaut. URI: "+uri);
mongoose.connect(uri);



app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
