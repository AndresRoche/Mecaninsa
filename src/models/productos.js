const { Schema, model } = require('mongoose');

const schemaProductos = new Schema ({
  nombre : { type: String , required : true },
  precio : { type: Number , required : true },
  descripcion_peq: { type: String , required : true },
  cantidad : { type: Number , required : true },
  image : { type: String },
  tags : { type: String },
  ranking: { type : Number }
});

module.exports = model('productos', schemaProductos);
