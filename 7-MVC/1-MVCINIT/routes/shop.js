const express = require("express");
const router = express.Router();
const { shopviewController } = require("../controllers/users");
router.get("/", shopviewController);

module.exports = router;
