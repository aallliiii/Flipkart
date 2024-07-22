import User from "../model/user-schema.js";
export const userSignUp = async (req, res) => {
  try {
    const ifExist = await User.findOne({ userName: req.body.userName });
    if (ifExist) {
      return res.status(401).json({ message: "Username already exists" });
    }
    const data = req.body;
    const userData = new User(data);
    await userData.save();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    let loginValid = await User.findOne({
      userName: req.body.username,
      password: req.body.password,
    });

    if (loginValid) {
      res.status(200).json({ data: loginValid });
    } else {
      res.status(401).json({ message: "user does not exists" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
