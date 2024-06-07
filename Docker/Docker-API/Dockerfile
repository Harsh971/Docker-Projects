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