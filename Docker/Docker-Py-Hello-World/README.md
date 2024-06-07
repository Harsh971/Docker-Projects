# Hello World (Python)

1. **Create Project Directory**:
Create a new directory for your Docker project and navigate into it.
    
    ```bash
    bashCopy code
    mkdir hello_world_docker
    cd hello_world_docker
    
    ```
    
2. **Create Python Script**:
Inside the project directory, create a Python script named **`hello_world.py`** with the following content:
    
    ```python
    pythonCopy code
    # hello_world.py
    print("Hello, world!")
    
    ```
    
3. **Create Dockerfile**:
Create a file named **`Dockerfile`** (without any extension) in the project directory with the following content:
    
    ```bash
    bashCopy code
    # Use the official Python image as a base image
    FROM python:3.9-slim
    
    # Set the working directory in the container
    WORKDIR /app
    
    # Copy the Python script into the container
    COPY hello_world.py /app
    
    # Run the Python script when the container starts
    CMD ["python", "hello_world.py"]
    
    ```
    
4. **Build the Docker Image**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image:
    
    ```bash
    bashCopy code
    docker build -t hello-world-docker .
    
    ```
    
5. **Run the Docker Container**:
After the build is successful, you can run the Docker container using the following command:
    
    ```bash
    bashCopy code
    docker run hello-world-docker
    
    ```
    
6. **Verify Output**:
You should see "Hello, world!" printed to the console, indicating that the Python script ran successfully inside the Docker container.

<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Py-Hello-World/image1.png"></img>