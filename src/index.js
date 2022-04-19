


const app = require('./app');


//	listening the server
app.listen(app.get('port'), ()=> {
	console.log('iniciando servidor en el puerto', app.get('port'))
});
