const express = require('express');
const app = express();

app.get('/documents/Certificate.pdf', function(req, res) {
  const filePath = "/home/ubuntu/yaro-sakalosh/documents/Certificate.pdf";
  res.sendFile(filePath);
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});