const userCtrl = {}

notesCtrl.getUsers = (req, res)=> res.json({message: []})

notesCtrl.createUser = (req, res)=> res.json({message: 'note saved'})

notesCtrl.getAuser = (req, res)=> res.json({message: 'note saved'})

notesCtrl.updateUser = (req, res)=> res.json({message: 'note saved'})

notesCtrl.deleteUser = (req, res)=> res.json({message: 'note saved'})

module.exports = {
    userCtrl
}