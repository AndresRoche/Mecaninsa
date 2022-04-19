const { Router } = require('express');

const router = Router();


const Productos = require('../models/productos.js');

const cloudinary = require('cloudinary');

router.get('/',(req, res) => {

	res.render('index')
	console.log('iniciando pagina web')
});

router.get('/productos', (req , res) => {
	res.render('view/productos.ejs');
});

router.get('/nosotros', (req, res) => {
	res.render('view/nosotros.ejs');
})

router.get('/services', (req, res) =>{
	res.render('view/service.ejs');
});

router.get('/contactos',(req, res)=> {
	res.render('view/contactos.ejs');
});

router.get('/product', (req , res) => {
	res.render('view/product.ejs');
});


module.exports = router;
