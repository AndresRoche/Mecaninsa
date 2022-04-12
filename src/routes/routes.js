const express = require('express');

const router = express.Router();


router.get('/',(req, res) => {

	res.render('index');

	console.log('iniciando pagina web')

	// res.sendFile(path.join(__dirname,'views/index.html'));
  //
	// //aqui abajo si estuviera en windows  seria \
	// console.log(__dirname+'/views/index.html');
  //
	// //aqui lo pasa a /
	// console.log(path.join(__dirname,'views/index.html'))

});


router.get('/twitter', (req , res) => {
	res.render('twitter.html');
	console.log('secion twitter.html iniciando');
});

router.get('/contacto',(req, res)=> {
	res.render('contacto.html',{title: 'Constact Page'});
});

module.exports = router;
