
//	modulos
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');



// Initialize
const app = express();
require('./database.js');




//	settings
app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



// 	para Crear package.json es con un: npm init --yes
// dentro de package.json cuand creamos scripts nuevo si o si debemos
//  empezar por npm run "NOMBRE DEL SCRIPT"


//	middlewares
app.use(morgan('dev'));//con dev envia mensajes corto en el servidor
app.use(express.json());//para que pueda entender los formatos json
app.use(express.urlencoded({extended: false}));//para que solo procese string
const storage = multer.diskStorage({//configuracion de multer
  destination: path.join(__dirname, 'public/upload'), //donde queramos que se guarden la imagenes
  filename: (req, file, cb)=> {
    //usamo el callbacks (primer parametro error)
    //el new Date().getTime() nos lanza unos numero determinado por los milisegundos
    //el path.extname(file.originalname))=> first file.originalname aggara el nombre originalname
    // y path extname agarra solo la extencion
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
})
//el storage en la configuracion de arriba que se lo pasamos a multer
app.use(multer({storage: storage}).single('image'));//multer ve si estamos enviar una image



//	routers
//como si ejecutara lo del codigo de routes
app.use(require('./routes/routes'));
app.use(require('./routes/admin'));


//	static files
app.use(express.static(path.join(__dirname,'public')));

// establecemos los archivos estaticos osea style.css, main.js, imagenes, etc



module.exports = app;
