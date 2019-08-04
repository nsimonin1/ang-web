const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname+'dist/visio-logic-ui'));


app.get('/*', function(req,resp){
  resp.sendFile(path.join(__dirname+'dist/visio-logic-ui/index.html'));
});

app.listen(process.env.PORT || 8080);
