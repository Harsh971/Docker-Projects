# Docker-Nginx-Basics

```jsx


<!DOCTYPE html>
<html>
<head>
    <title>My Dockerized Website</title>
</head>
<body>
    <h1>Hello from Docker!</h1>
</body>
</html>

```

```jsx


# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy the local index.html file to Nginx's html directory
COPY index.html /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

```

1. **Build the Docker Image**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image:
    
    ```bash
 
    docker build -t nginx-docker .
    
    ```
    
2. **Run the Docker Container**:
After the build is successful, you can run the Docker container using the following command:
    
    ```bash

    docker run -d -p 8080:80 nginx-docker
    
    ```
    
    This command will run the container in detached mode (**`-d`**) and map port 8080 of your host machine to port 80 of the container.
    
3. **Access the Website**:
Open your web browser and go to **`http://localhost:8080`**. You should see your HTML content displayed on the page.

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Basic/image1.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Basic/image2.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Basic/image3.png"></img>