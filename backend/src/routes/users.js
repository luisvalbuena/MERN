const {Router} = require('express')

const router = Router()

const {
    getUsers, 
    createUser,
    deleteUser,
    updateUser,
    getAuser
} = require('../controller/users.controller.js')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getAuser)
    .put(updateUser)
    .delete(deleteUser)


module.exports = router;