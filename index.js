let express = require("express");
let bodyParser = require("body-parse");
let mongoose = require("mongoose");

//Import routes
let apiRoutes = require("./router");

let app = express();
var port = process.envPORT || 8080;

app.get("/", (req, res) => res.send("Welcome to Express"));

app.listen(port, function () {
	console.log("Running What'sMyThing on port " + port);
});

//Use API routes in the App
app.use("/api", apiRoutes);

// Configure bodyPareser to handle post requests
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

// connect to mongoose
const dbPath = "mongodb://localhost/firstrest";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);

mongo.then(
	() => {
		console.log(connected);
	},
	(error) => {
		console.log(error, "error");
	}
);
