# Docker-MYSQL-2

We'll set up the MySQL database and the Node.js application separately in Docker containers and establish a connection between them. 
Here's a step-by-step guide:

1. **Set up the MySQL container**:
    
    Start by running a MySQL container:
    
    ```bash
    bashCopy code
    docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=testdb -p 3306:3306 mysql:5.7
    
    ```
    
    This command starts a MySQL container named **`mysql-container`** with the specified environment variables for the root password and database name, and exposes port 3306.
    
2. **Create the Node.js application**:
    
    Create a directory for your Node.js application and navigate into it:
    
    ```bash
    bashCopy code
    mkdir node-mysql-app
    cd node-mysql-app
    
    ```
    
    Initialize a new Node.js project and install necessary dependencies:
    
    ```bash
    bashCopy code
    npm init -y
    npm install express mysql ejs body-parser
    
    ```
    
3. **Create the application code**:
    
    Create a file named **`app.js`** with the following content:
    
    ```jsx
    javascriptCopy code
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
    
    ```
    
4. **Create the HTML template**:
    
    Create a directory named **`views`** and inside it, create a file named **`index.ejs`** with the following content:
    
    ```html
    htmlCopy code
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js MySQL CRUD App</title>
    </head>
    <body>
        <h1>Users</h1>
        <ul>
            <% users.forEach(user => { %>
                <li><%= user.name %> - <%= user.email %></li>
            <% }); %>
        </ul>
        <h2>Add User</h2>
        <form action="/add" method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <button type="submit">Add User</button>
        </form>
    </body>
    </html>
    
    ```
    
5. **Build the Docker image for the Node.js application**:
    
    Create a Dockerfile in the root directory of your Node.js application with the following content:
    
    ```
    DockerfileCopy code
    FROM node:14
    
    WORKDIR /app
    
    COPY package*.json ./
    
    RUN npm install
    
    COPY . .
    
    EXPOSE 3000
    
    CMD ["node", "app.js"]
    
    ```
    
    Build the Docker image:
    
    ```bash
    bashCopy code
    docker build -t node-mysql-app .
    
    ```
    
6. **Run the Node.js application container**:
    
    Run the following command to start the Node.js application container:
    
    ```bash
    bashCopy code
    docker run -d --name node-app-container -p 3000:3000 --link mysql-container:mysql node-mysql-app
    
    ```
    
7. **Access the application**:
    
    You can now access the application by navigating to **`http://localhost:3000`** in your web browser. You should see a list of users (initially empty). You can add users using the form provided.
    

This setup allows you to run the MySQL database and the Node.js application separately in Docker containers. The Node.js application connects to the MySQL database using the hostname **`mysql`**, which is the name of the linked MySQL container.