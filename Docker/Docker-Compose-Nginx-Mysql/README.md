# Docker-Compose-Nginx-MySQL

To display data from MySQL in an HTML page served by Nginx using Docker Compose, you can follow these steps:

1. **Create Project Directory**:
Start by creating a new directory for your project.
    
    ```bash
  
    mkdir docker-compose-mysql-nginx
    cd docker-compose-mysql-nginx
    
    ```
    
2. **Create Docker Compose File**:
Create a file named **`docker-compose.yml`** in the project directory with the following content:
    
    ```yaml
 
    version: '3.8'
    
    services:
      web:
        image: nginx:alpine
        ports:
          - "8080:80"
        volumes:
          - ./html:/usr/share/nginx/html/index.html
    
      db:
        image: mysql:5.7
        environment:
          MYSQL_ROOT_PASSWORD: example
          MYSQL_DATABASE: test_db
        volumes:
          - ./mysql-data:/var/lib/mysql
    
    ```
    
    In this example:
    
    - The **`web`** service uses the official Nginx image, maps port 8080 on the host to port 80 in the container, and mounts the **`./html`** directory as the Nginx HTML root directory.
    - The **`db`** service uses the official MySQL 5.7 image, sets the MySQL root password to "example", creates a database named **`test_db`**, and mounts the **`./mysql-data`** directory to persist MySQL data.
3. **Create HTML File**:
Create a directory named **`html`** in the project directory and create an **`index.html`** file inside it with your HTML content. For example:
    
    ```html
  
    <!-- ./html/index.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <title>MySQL Data Table</title>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
        <script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.js"></script>
        <script>
            $(document).ready(function() {
                $('#example').DataTable();
            });
        </script>
    </head>
    <body>
        <h1>MySQL Data Table</h1>
        <table id="example" class="display">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data will be populated dynamically -->
            </tbody>
        </table>
    </body>
    </html>
    
    ```
    
4. **Run Docker Compose**:
Open a terminal, navigate to your project directory, and run the following command to start the Docker Compose services:
    
    ```bash
    
    docker-compose up
    
    ```
    
    This command will start the defined services as containers in the background.
    
5. **Access Nginx Web Server**:
Open your web browser and navigate to **`http://localhost:8080`**. You should see an empty data table with headers.
6. **Insert Data into MySQL**:
You can insert data into the MySQL database using your preferred MySQL client.
7. **Populate Data Table**:
Write a script (Python, PHP, etc.) that retrieves data from the MySQL database and dynamically populates the HTML table in **`index.html`**.
8. **Stop and Remove Services**:
To stop and remove the Docker Compose services, press **`Ctrl + C`** in the terminal where Docker Compose is running. Then, run the following command:
    
    ```bash
  
    docker-compose down
    
    ```
    
    This will stop and remove the containers defined in the **`docker-compose.yml`** file.
    

That's it! You've now set up a Docker Compose environment with Nginx serving an HTML page containing a data table, and MySQL running as a database service. You can populate the data table dynamically with data from MySQL. Let me know if you need further assistance!

Certainly! Here's the updated Dockerfile to copy the **`index.html`** file to the Nginx HTML root directory:

```

# Use the official Nginx image as a base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the HTML file into the container
COPY index.html .

```

With this Dockerfile, when you build the Docker image, it will copy the **`index.html`** file from the current directory into the **`/usr/share/nginx/html`** directory within the container, which is the default HTML root directory for Nginx.

Make sure to place the **`index.html`** file in the same directory as the Dockerfile before building the image.