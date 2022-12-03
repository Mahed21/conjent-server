const express = require("express");
const UserController = require("../controller/user.controller");
const router = express.Router();
router.route("/").get(UserController.getUser).post(UserController.createUser);
router.route("/:id").put(UserController.userStatusUpdate);
router.route("/:id").delete(UserController.getDeleteUser);

module.exports = router;
