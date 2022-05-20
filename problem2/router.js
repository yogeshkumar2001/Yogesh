const express = require("express");
const router = express.Router();
const { getData} = require("./controller");

router.route("/prefixes?keywords=bonfire,bool").get(getData);

module.exports.router = router;
