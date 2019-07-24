const userCtrl = {}

const user = require('../models/User')

userCtrl.getUsers = async (req, res ) => {
    const users = await user.find()
    res.json(users)
}
userCtrl.createUser = async (req, res) => {
    const {username } = req.body
    const newUser = new user({username})
    await newUser.save()
    res.json('user created')

}
userCtrl.deleteUser = async (req, res) => {
    await user.findOneAndDelete({_id: req.params.id})
    res.json('User deleted')
}

module.exports = userCtrl