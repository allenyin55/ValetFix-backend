const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const app = require("express")();
const index = require('./routes/index');
const bodyParser = require('body-parser');

const stripe = require("stripe")(keySecret);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => res.send("Hello World"));

app.use('/', index);

app.listen(4567, function() {
  console.log('Listening on port 4567!');
});