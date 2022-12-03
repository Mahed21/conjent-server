const User = require("../model/user");
exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      status: "success",
      message: "data get Successfully",

      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
exports.createUser = async (req, res, mext) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to post",
      data: error.message,
    });
  }
};
exports.userStatusUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await User.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({
      status: "success",
      message: "data updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to update",
      data: error.message,
    });
  }
};
exports.getDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    //console.log(id);

    const result = await User.deleteOne({ _id: id });

    res.status(200).json({
      status: "success",
      message: "data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to Delete",
      data: error.message,
    });
  }
};
