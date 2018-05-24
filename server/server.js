//requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//global
const port = 5000;
let quotes = [{
    quote: "To be, or not to be",
    author: "Bill Shakespeare"
}];

//uses
app.use( express.static('server/public') );
app.use(bodyParser.urlencoded({extended: true}));

//spin up to server
app.listen(port, () => {
    console.log('server up on:', port);
});

//spin up get route
app.get('/quotes', (req, res) => {
    console.log('in GET hit for /quotes route');
    res.send(quotes);
})

app.post('/quotes', (req, res) => {
    console.log('in app.post', req.body);
    quotes.push(req.body);
    res.send(quotes);
  
})