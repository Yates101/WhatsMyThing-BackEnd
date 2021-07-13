let router = require("express").Router();
let thingController = require("./thingController");

router.get("/", (req, res) => {
	res.json({
		status: "API Works",
		message: "Test Test test Welcome to WhatsMyThing API",
	});
});

router.route("/thing").get(thingController.index).get(thingController.add);

router
	.route("/thing/:thing_id")
	.get(thingController.view)
	.patch(thingController.update)
	.put(thingController.update)
	.delete(thingController.delete);

module.exports = router;
