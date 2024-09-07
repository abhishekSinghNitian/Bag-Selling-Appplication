const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());  // Missing parentheses fixed
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.get('/', function (req, res) {
    res.render('users');  // Corrected to pass the template name as a string
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
