const User = require("./model/User");

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const weatherKey = authHeader.split(" ")[1];
  if (!weatherKey || weatherKey == "") {
    req.isAuth = false;
    return next();
  }
  const user = await User.findOne({ userId: weatherKey });
  if (!user) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = weatherKey;
  next();
};
