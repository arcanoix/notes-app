const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
})

	.then(db => console.log('DB in connected'))
	.catch(err => console.error('Error de conexion' + err));