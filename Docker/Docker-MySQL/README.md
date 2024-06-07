# Docker-MySQL

1. **Create Project Directory**:
Start by creating a new directory for your project.
    
    ```bash
  
    mkdir docker-html-mysql
    cd docker-html-mysql
    
    ```
    
2. **Create HTML Files**:
Create two HTML files in the project directory:
    - **`enter_data.html`**: HTML page where the user enters data.
    
    ```html
   
    <!-- ./enter_data.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>Enter Data</title>
    </head>
    <body>
        <h1>Enter Data</h1>
        <form action="/submit" method="post">
            <label for="name">Enter Name:</label><br>
            <input type="text" id="name" name="name"><br><br>
            <input type="submit" value="Submit">
        </form>
        <br>
        <a href="/view_data.html">View Data</a>
    </body>
    </html>
    
    ```
    
    - **`view_data.html`**: HTML page where the user can view all data from the MySQL database.
    
    ```html
   
    <!-- ./view_data.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>View Data</title>
    </head>
    <body>
        <h1>View Data</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data will be populated dynamically -->
            </tbody>
        </table>
        <br>
        <a href="/enter_data.html">Enter Data</a>
    </body>
    </html>
    
    ```
    
3. **Create Dockerfile for HTML**:
Create a Dockerfile named **`Dockerfile.html`** in the project directory to serve the HTML files using Nginx.
    
    ```
   
    # Use the official Nginx image as a base image
    FROM nginx:alpine
    
    # Copy the HTML files into the container
    COPY enter_data.html /usr/share/nginx/html/enter_data.html
    COPY view_data.html /usr/share/nginx/html/view_data.html
    
    ```
    
4. **Build Docker Image for HTML**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image for serving the HTML files.
    
    ```bash
   
    docker build -t html-server -f Dockerfile.html .
    
    ```
    
5. **Run HTML Server Container**:
After the build is successful, run the Docker container for serving the HTML files.
    
    ```bash
   
    docker run -d -p 8080:80 html-server
    
    ```
    
   <img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-MySQL/image1.png"></img>
    
  <img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-MySQL/image2.png"></img>
    
   
   
1. **Create Dockerfile for MySQL**:
    Create a Dockerfile named **`Dockerfile.mysql`** in the project directory to set up MySQL with a custom database and table.
        
        ```
     
        # Use the official MySQL image as a base image
        FROM mysql:5.7
        
        # Environment variables
        ENV MYSQL_ROOT_PASSWORD=example
        ENV MYSQL_DATABASE=my_database
        
        # Copy SQL initialization script
        COPY init.sql /docker-entrypoint-initdb.d/
        
        ```
        
    2. **Create MySQL Initialization SQL Script**:
    Create a file named **`init.sql`** in the project directory to create a database and a table.
        
        ```sql
       
        -- ./init.sql
        CREATE TABLE IF NOT EXISTS names (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        
        ```
        
    3. **Build Docker Image for MySQL**:
    Open a terminal, navigate to your project directory, and run the following command to build the Docker image for MySQL.
        
        ```bash
        
        docker build -t mysql-server -f Dockerfile.mysql .
        
        ```
        
        <img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-MySQL/image3.png"></img>
        
    4. **Run MySQL Server Container**:
    After the build is successful, run the Docker container for the MySQL server.
        
        ```bash
       
        docker run -d -p 3306:3306 mysql-server
        
        ```
        
    5. **Access the HTML Form**:
    Open your web browser and navigate to **`http://localhost:8080`**. You should see the HTML form with a textbox to enter names.
    6. **Enter Names and Store in MySQL**:
    Enter names into the textbox and submit the form. The names should be stored in the MySQL database.
    
    That's it! You've created a project where you can enter names into an HTML form and have them stored into a table in MySQL, each within separate Docker containers. Let me know if you need further assistance!
	
	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-MySQL/image4.png"></img>
