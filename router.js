let router = require("express").Router();

router.get("/", (req, res) => {
	res.json({
		status: "API Works",
		message: "Test Test test Welcome to WhatsMyThing API",
	});
});

module.exports = router;
