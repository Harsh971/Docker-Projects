# Docker-Network

1. **Create a Dockerfile for the application**: We'll create a simple Node.js application for demonstration purposes.
    
    ```
 
    # Use Node.js as base image
    FROM node:14
    
    # Set working directory
    WORKDIR /app
    
    # Copy package.json and package-lock.json
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy application code
    COPY . .
    
    # Expose port 3000
    EXPOSE 3000
    
    # Command to run the application
    CMD ["node", "app.js"]
    
    ```
    
2. **Create the application code**: Let's create a simple Node.js application that listens on port 3000 and responds with a message.
    
    ```jsx
   
    // app.js
    const http = require('http');
    
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, Docker!\n');
    });
    
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    
    ```
    
3. **Create a Docker network**: We'll create a custom Docker network to connect our containers.
    
    ```bash

    docker network create mynetwork
    
    ```
    
4. **Build the Docker image**: Navigate to the directory containing your Dockerfile and application code, and run the following command to build the Docker image.
    
    ```bash
   
    docker build -t mynodeapp .
    
    ```
    
5. **Run the Docker containers**: Now, let's run two instances of our Docker container, and connect them to the custom network we created.
    
    ```bash

    docker run -d --name container1 --network mynetwork mynodeapp
    docker run -d --name container2 --network mynetwork mynodeapp
    
    ```
    
6. **Test the network communication**: We can test the network communication by accessing one container from another.
    
    ```bash

    docker exec container1 curl container2:3000
    
    ```
    
    This command sends a request from **`container1`** to **`container2`** on port 3000. You should see the response "Hello, Docker!".
    


	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Network/image1.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Network/image2.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Network/image3.png"></img>