const {Router} = require('express')

const router = Router()

const {
    getNotes, 
    createNote,
    deleteNote,
    updateNote,
    getAnote
} = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getAnote)
    .put(updateNote)
    .delete(deleteNote)


module.exports = router;