const notesCtrl = {}

notesCtrl.getNotes = (req, res) => res.json({ message: 'GET Request'})
notesCtrl.createNotes = (req, res) => res.json({message: 'Notas guardadas'})

notesCtrl.getNote = (req, res) => res.json({title: 'First title'})
notesCtrl.updateNote = (req, res) => res.json({message: 'PUT Request'})
notesCtrl.deleteNote = (req, res) => res.json({message: 'Delete Request'})


module.exports = notesCtrl