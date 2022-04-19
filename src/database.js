
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  userNewUrlParser : true,
  useUnifiedTopology: true
}).then( db => console.log('DB is connected'))
  .catch( err => console.log('Hay un error : ' + err))
