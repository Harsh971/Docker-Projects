<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-API/image1.png"></img>

To create a Docker project in Python that takes the name of a country from the user and outputs its capital using an API, you can follow these steps:

1. **Choose an API**:
Select an API that provides information about countries and their capitals. One popular choice is the "REST Countries" API (https://restcountries.com/), which offers detailed information about countries, including their capitals.
2. **Create Project Directory**:
Start by creating a new directory for your Docker project and navigate into it.
    
    ```bash
    bashCopy code
    mkdir country_capital_docker
    cd country_capital_docker
    
    ```
    
3. **Create Python Script**:
Inside the project directory, create a Python script named **`get_capital.py`** to interact with the API and retrieve the capital based on the user's input. Here's a basic example using the "REST Countries" API:
    
    ```python
    pythonCopy code
    # get_capital.py
    import requests
    
    def get_capital(country_name):
        url = f"https://restcountries.com/v3.1/name/{country_name}"
        response = requests.get(url)
        data = response.json()
        if data:
            return data[0]['capital']
        else:
            return "Capital information not found."
    
    if __name__ == "__main__":
        country_name = input("Enter the name of the country: ")
        capital = get_capital(country_name)
        print(f"The capital of {country_name} is {capital}")
    
    ```
    
4. **Create Dockerfile**:
Create a file named **`Dockerfile`** (without any extension) in the project directory with the following content:
    
    ```bash
    bashCopy code
    # Use the official Python image as a base image
    FROM python:3.9-slim
    
    # Set the working directory in the container
    WORKDIR /app
    
    # Copy the Python script into the container
    COPY get_capital.py /app
    
    # Install requests module
    RUN pip install requests
    
    # Run the Python script when the container starts
    CMD ["python", "get_capital.py"]
    
    ```
    
5. **Build the Docker Image**:
Open a terminal, navigate to your project directory, and run the following command to build the Docker image:
    
    ```bash
    bashCopy code
    docker build -t country-capital-docker .
    
    ```
    
6. **Run the Docker Container**:
After the build is successful, you can run the Docker container using the following command:
    
    ```bash
    bashCopy code
    docker run -it country-capital-docker
    
    ```
    
    The **`-it`** flag allows you to interact with the container in an interactive mode, which is necessary to input the country name.
    
7. **Input Country Name**:
When prompted, enter the name of the country, and you will see its capital printed to the console.