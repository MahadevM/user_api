import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
 

 
 


var cors = require('cors');

mongoose.connect(`mongodb://localhost:27017/provabsoft`, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

// Middlewares
// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname + '/Public'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 
 // Routes
app.use('/api/provabsoft', require('./routes/users'));


// app.all('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'Public', 'index.html'));
// });

// Start the server
const port = process.env.PORT || 7000;
app.listen(port);
console.log(`Server listening at ${port}`);

 





