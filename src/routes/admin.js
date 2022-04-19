const { Router } = require('express');

const router = Router();


router.get('/admin', (req, res) => {
	res.render('admin/admin.ejs')
})
router.get('/admin/productos', (req, res) => {
	res.render('admin/view/productos.ejs')
})
router.get('/admin/servicios', (req, res) => {
	res.render('admin/view/servicios.ejs');
})

router.get('/admin/service/add', (req, res) => {
  res.render('admin/view/service-add');
})

router.get('/admin/productos/add', (req, res) => {
  res.render('admin/view/productos-add');
})

router.get('/admin/login', (req, res) => {
  res.render('admin/view/login');
})


module.exports = router;
