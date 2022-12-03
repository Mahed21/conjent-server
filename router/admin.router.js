const express = require("express");
const adminController = require("../controller/admin.controller");
const router = express.Router();
router
  .route("/")
  .get(adminController.getAdmin)
  .post(adminController.createAdmin);

module.exports = router;
