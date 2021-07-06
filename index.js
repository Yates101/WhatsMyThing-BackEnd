let express = require('express')
let app = express();
var port = process.envPORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
  console.log("Running What'sMyThing on port " + port);
})
