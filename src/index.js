const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodo = require('method-override');
const session = require('express-session');

const flash = require('connect-flash');




// Inicializaciones
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3000);
// cambiando la ruta de carpeta views a src/views
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname:'.hbs' 
}));
app.set('view engine','.hbs');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodo('_method'));
app.use(session({
	secret:'mysecretapp',
	resave: true,
	saveUninitialized: true
}));
app.use(flash());


// Globarl Variables
app.use((req, res, next) => {

	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');

	next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


// Static Files
app.use(express.static(path.join(__dirname, 'public')));



// Server Is listenning
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});