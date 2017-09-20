// Dependencies
const express = require("express");
const path = require("path");

var app = express();
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"./app/public/index.html"));
});

// Server Listen
app.listen(app.get('port'), () => {
  console.log("App listening on PORT " + app.get('port'));
});