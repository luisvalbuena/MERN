const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res)=> {
    const notes = await Note.find()
    res.json(notes)
}

notesCtrl.createNote = async (req, res)=> {
    const {title, description, author, date} = req.body
    const newNote = new Note({
        title: title,
        description: description,
        author: author,
        date: date
    })
    await newNote.save()
    res.json({message: 'note saved'})
}

notesCtrl.getAnote = (req, res)=> {
    
}

notesCtrl.updateNote = (req, res)=> res.json({message: 'note saved'})

notesCtrl.deleteNote = (req, res)=> res.json({message: 'note saved'})

module.exports = {
    notesCtrl
}