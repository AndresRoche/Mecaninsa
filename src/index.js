
//	modulos
const express = require('express');

const app = express();

//	es para ajustarlo de windows que se una \ en ves
//	de linux que usa /
const path = require('path');

//	settings
app.set('port', process.env.PORT || 3030);

//el views es algo por defecto en express para selecionar
//the view engine y ejs es para usar logicar de programacion
// desde el html
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// 	para Crear package.json es con un: npm init --yes
// dentro de package.json cuand creamos scripts nuevo si o si debemos
//  empezar por npm run "NOMBRE DEL SCRIPT"


//	middlewares



//	routers
//como si ejecutara lo del codigo de routes
app.use(require('./routes/index'));


//	static files
app.use(express.static(path.join(__dirname,'public')));
// establecemos los archivos estaticos osea style.css, main.js, imagenes, etc




//	listening the server
app.listen(app.get('port'), ()=> {
	console.log('iniciando servidor en el puerto', app.get('port'))
});
