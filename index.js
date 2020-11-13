const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000;
const MONGO_URI = "mongodb+srv://Mindtree-user:Mindtree123@cluster0.rutno.mongodb.net/<dbname>?retryWrites=true&w=majority";
const route = require('./routes/userAppRoute');
const bodyparser = require('body-parser');

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })
  .catch(err => console.log(err))


// mongoose.connect(MONGO_URI,
//     { useUnifiedTopology: true, useNewUrlParser: true});

app.use(bodyparser.json());
app.use('/', route);
app.listen(PORT, ()=> console.log(`Server is listening at port ${PORT}`));
