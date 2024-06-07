const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.render('index', { users: results });
    });
});

app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const user = { name, email };
    connection.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
