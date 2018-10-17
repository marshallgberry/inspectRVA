const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3001;
const booking = require('./routes/api/booking');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database
mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/lubeRVA", 
  (err) => err ?
      console.log(`Sorry, could not connect to the database.`) : 
      console.log(`Connected to database!`));

// use routes
app.use('/api/booking', booking);


if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Origin, Content-type, Authorization, Accept"
  );
  next();
});


/// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Error handling
app.use(function(error, req, res, next) {
  if (error.name === "UnauthorizedError") {
    res.status(401).send(error);
  } else {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
