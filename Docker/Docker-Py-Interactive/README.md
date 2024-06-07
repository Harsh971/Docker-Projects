

1. **Create Project Directory**:
Start by creating a new directory for your Docker project and navigate into it.
    
    ```bash
    bashCopy code
    mkdir sum_numbers_docker
    cd sum_numbers_docker
    
    ```
    
2. **Create Python Script**:
Inside the project directory, create a Python script named **`sum_numbers.py`** with the following content:
    
    ```python
    pythonCopy code
    # sum_numbers.py
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    sum = num1 + num2
    print("Sum:", sum)
    
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
    COPY sum_numbers.py /app
    
    # Run the Python script when the container starts
    CMD ["python", "sum_numbers.py"]
    
    ```
    
4. **Build the Docker Image**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image:
    
    ```bash
    bashCopy code
    docker build -t sum-numbers-docker .
    
    ```
    
5. **Run the Docker Container**:
After the build is successful, you can run the Docker container using the following command:
    
    ```bash
    bashCopy code
    docker run -it sum-numbers-docker
    
    ```
    
    The **`-it`** flag allows you to interact with the container in an interactive mode, which is necessary to input the numbers.
    
6. **Input Numbers**:
When prompted, enter two numbers, and you will see their sum printed to the console.

That's it! You've Dockerized your Python project that takes two numbers from the user and outputs their sum. Let me know if you need further assistance!

<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Py-Interactive/image1.png"></img>