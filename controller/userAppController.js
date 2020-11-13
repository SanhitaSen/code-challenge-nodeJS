const User = require("../models/users");

const createUser = async (req, res, next) =>
{
    console.log(req.body);
    try{
        const newUser = new User();
        newUser.email = req.body.email;
        newUser.age = req.body.age;
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;

        await newUser.save();
        return res.json({message: "User created!", data: req.body});
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).json({err});
    }
}
const getUsers = async (req,res,next) =>
{
    try{
        const allUsers = await User.find({});
        return res.json({ data: allUsers });;
    }
    catch (err) {
        return res.status(400).json({ err });
      }
}

const getUserById = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    try {
      const UserWithId = await User.findById(id).exec();
      return res.json({ data: UserWithId });
    } catch (err) {
      return res.status(400).json(err);
    }
  };
  
  const updateUsersById = async (req, res, next) => {
    let id = req.params.id;
    try {
      const updatedUser = await User.updateOne(
        { _id: id },
        {
          $set: { firstName: "Some Value" },
        }
      );
      console.log(updatedUser)
      return res.json({ Message: "Updated!" });
    } catch {
      return res.status(400).json(err);
    }
  };
  
  const deleteUser = async (req, res, next) => {
    let id = req.params.id;
    try {
      const deleteusers = await User.deleteOne({ _id: id });
      return res.json({ Message: "User deleted!" });
    } catch {
      return res.status(400).json(err);
    }
  };

module.exports = {createUser, getUsers, getUserById, deleteUser, updateUsersById};