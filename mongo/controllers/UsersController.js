import {User} from "../../models/User.js"

 const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ error: false, users });
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Failed to fetch users",
        details: err.message,
      });
    }
  },
  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      // prevent duplicate email
      const existing = await User.findOne({ email });
      if (existing) {
        res.status(409).json({
          error: true,
          message: "Email already in use!",
        });
      }

      // create and save new user
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({
        error: false,
        user,
        message: "😊",
      });
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Server error",
        details: err.message,
      });
    }
  },
  register: async(req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        error: true,
        message: "Missing required fields",
      });
    }
    try {
      const existing = await User.findOne({ email });
      if (existing) {
        return res.status(409).json({
          error: true,
          message: "Email already in use!",
        });
      }
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({
        error: false,
        user,
        message: "😊",
      });
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Server error",
        details: err.message,
      });
    }
  },
  login: async (req, res) =>{
    const { email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: "Missing required fields",
      });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          error: true,
          message: "Invalid credentials",
        });
      }
      if (user.password !== password) {
        return res.status(401).json({
          error: true,
          message: "Invalid credentials",
        });
      }
      res.status(200).json({
        error: false,
        user,
        message: "Login successful",
      });
    } catch (err) {
      res.status(500).json({
        error: true,
        message: "Server error",
        details: err.message,
      });
    }
  }
};
export default usersController