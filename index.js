let express = require("express");
let app = express();
let multer = require("multer");
var port = process.env.PORT || 8080;

// Welcome message
app.get("/", (req, res) => res.send("Welcome to Express"));

// Launch app to the specified port
app.listen(port, function () {
	console.log("Running FirstRest on Port " + port);
});

//Import routes
let apiRoutes = require("./router");

//Use API routes in the App
app.use("/api", apiRoutes);

// //import body parser
// let bodyParser = require('body-parser');

//import mongoose
let mongoose = require("mongoose");

//configure bodyparser to hande the post requests
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

//define path of image we are uploading
app.use(
	multer({
		dest: "/uploads/",
		rename: (fieldname, filename) => {
			return filename;
		},
	})
);

//connect to mongoose
const dbPath = "mongodb://localhost/firstrest";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);
mongo.then(
	() => {
		console.log("connected");
	},
	(error) => {
		console.log(error, "error");
	}
);
