const express = require('express');
const app     = express();

app.get('/',function(req,res){
res.send('hello world!');
});

app.listen(process.env.PORT || 5000,function(){
console.log('running on port 3000!');
});

