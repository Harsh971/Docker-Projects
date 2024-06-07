

1. **Update Dockerfile**:
Modify the Dockerfile to include the new port configuration. We'll also add a label to differentiate between versions.
    
    ```

    # Use the official Nginx image as a base image
    FROM nginx:alpine
    
    # Copy the local index.html file to Nginx's html directory
    COPY index1.html /usr/share/nginx/html/index.html
    
    # Expose port 80 to the outside world
    EXPOSE 80
    
    # Add a label to specify the version
    LABEL version="1.0"
    
    ```
    
2. **Build the Docker Image for Version 1**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image for version 1:
    
    ```bash

    docker build -t nginx-docker:v1 .
    
    ```
    
3. **Run the Docker Container for Version 1**:
Run the Docker container for version 1 using port 8080:
    
    ```bash

    docker run -d -p 8080:80 nginx-docker:v1
    
    ```
    
4. **Update Dockerfile for Version 2**:
Modify the Dockerfile to change the port and update the version label:
    
    ```

    # Use the official Nginx image as a base image
    FROM nginx:alpine
    
    # Copy the local index.html file to Nginx's html directory
    COPY index2.html /usr/share/nginx/html/index.html
    
    # Expose port 80 to the outside world
    EXPOSE 80
    
    # Add a label to specify the version
    LABEL version="2.0"
    
    ```
    
5. **Build the Docker Image for Version 2**:
Build the Docker image for version 2 with a different tag:
    
    ```bash
   
    docker build -t nginx-docker:v2 .
    
    ```
    
6. **Run the Docker Container for Version 2**:
Run the Docker container for version 2 using port 8081:
    
    ```bash
 
    docker run -d -p 8081:80 nginx-docker:v2
    
    ```
    

Now you have two versions of the same Dockerized website running on different ports, differentiated by Docker tags. Version 1 runs on port 8080, and Version 2 runs on port 8081.

```jsx
index1.html

<!DOCTYPE html>
<html>
<head>
    <title>My Dockerized Website - Version 2</title>
</head>
<body>
    <h1>This is version 1</h1>
</body>
</html>

```

```jsx
index2.html

<!DOCTYPE html>
<html>
<head>
    <title>My Dockerized Website - Version 2</title>
</head>
<body>
    <h1>This is version 2</h1>
</body>
</html>

```

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Versioning/image1.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Versioning/image2.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Versioning/image3.png"></img>

	<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Nginx-Versioning/image4.png"></img>