const userCtrl = {}

userCtrl.getUsers = (req, res ) => res.send('Users routes')
userCtrl.createUser = (req, res) => res.send('Created a new user')
userCtrl.deleteUser = (req, res) => res.send('Deleted user')

module.exports = userCtrl