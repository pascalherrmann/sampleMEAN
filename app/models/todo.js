var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    priority: {
        type: String, //Workaround, damit Option-Felder richtig angezeigt werden!
        default: '2'
    }
});


/* Zum Erweitern:
- einfach hier das Datenbank-Schema anpassen
- in der Edit-Datei das ng-model dafür hinzufügen
- der Rest geht von allein
- durch MongoDB: kein SQL-Befehl ändern, keine Prepared Statement, kein Datenbankschema; durch Node.js: kein Backend-Objekt anpassen; durch AngularJS: kein Request ändern
*/
