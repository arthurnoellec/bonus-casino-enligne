var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'views')));
// Catch all other routes and return the index file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/', 'index.html'));
});


// Make the app listen on port 5555
app.listen(5555, () => {
  console.log('Server is running on port 5555');
});

module.exports = app;