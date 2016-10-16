# Sample MEAN App

Diese Web-App enthält eine Reihe von wichtigen Angular-Funktionen (z.B. CRUD-Operatio) und dient als Vorlega für Projekte.

## TechStack

- Node.js und npm (Node Package Manager)
- MongoDB (lokaler Datenbank URL wird konfiguriert in `config/database.js`)



## Enthaltene Samples

Dieses Projekt wird stets erweitert. Momentan sind enthalten:
- Routing
- CRUD
- Navigation



___
# Deployment

### Lokal

1. Repository klonen: `git clone https://github.com/pascalherrmann/sampleMEAN`
2. Node-Module installieren: `npm install`
3. MongoDB-URL einfügen: `config/database.js`
3. Server starten: `node server.js`
4. Im Browser aufrufen `http://localhost:8080`

### Docker:
* Container per Docker-Compose starten:
```
docker-compose up
```
* Erklärung:
  * in der Datei docker-compose.yaml wird erst das ToDo-Image per Dockerfile gebaut
  * die Datenbank basiert auf dem fertigem MongoDB-Image, welches aus dem DockerHub heruntergeladen wird
  * in Docker-Compose werdne wird der Mongo-DB-Container verlinkt
  * man kann auch durch setzen der Umgebungsvariable "UMGEBUNGSVARIABLE" eine externe Datenbank hinzufügen
  
  
### Cloud Foundry
* Repository klonen: `git clone https://github.com/pascalherrmann/sampleMean`
* hinein navigieren: `cd sampleMean`
* in Cloud Foundry pushen: `cf push toDoApp`
* Service hinzufügen (MLab, oder per CUPS eigene Datenbank-Verbindung, alternativ UMGEBUNGSVARIABLE setzen)
* Erklärung
  * wird ein Service hinzugefügt, wird eine Umgebungsvariable gesetzt - diese enthält einen JSON-String
  * diese wird abgefragt (falls nicht existiert einfach leeres Objekt) und falls sie die Attribute für die Services enthält, wird so der DB-URL gesetzt


